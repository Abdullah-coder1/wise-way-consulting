'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';

const LeadSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    companyName: z.string().min(5, 'Company name must be at least 5 characters').optional().or(z.literal('')),
    serviceNeeded: z.string().min(1, 'Service selection is required'),
    message: z.string().min(5, 'Message must be at least 5 characters'),
});

export type CreateLeadState = {
    errors?: {
        name?: string[];
        email?: string[];
        companyName?: string[];
        serviceNeeded?: string[];
        message?: string[];
    };
    message?: string | null;
    success?: boolean;
};

export async function createLead(prevState: CreateLeadState, formData: FormData): Promise<CreateLeadState> {
    const validatedFields = LeadSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        companyName: formData.get('companyName'),
        serviceNeeded: formData.get('serviceNeeded'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Lead.',
            success: false
        };
    }

    const { name, email, companyName, serviceNeeded, message } = validatedFields.data;

    try {
        await prisma.lead.create({
            data: {
                name,
                email,
                companyName,
                serviceNeeded,
                message,
            },
        });
        return { message: 'Lead Created Successfully', success: true };
    } catch (error: unknown) {
        console.error("PRISMA ERROR DETAILS:", error);

        let errorMessage = "Unknown database error occurred.";

        const err = error as Error & { name?: string };

        if (err?.name === 'PrismaClientInitializationError' || err?.message?.includes("Can't reach database server")) {
            errorMessage = "Database connection failed. The server might be paused or unreachable. Please check your Supabase dashboard.";
        } else if (error instanceof Error) {
            errorMessage = error.message;
        }

        return { success: false, message: errorMessage };
    }
}
