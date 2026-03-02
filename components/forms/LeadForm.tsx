'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';
import { createLead, CreateLeadState } from '@/app/actions/lead';
import { Loader2, CheckCircle2 } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full h-12 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                </>
            ) : (
                'Submit Request'
            )}
        </button>
    );
}

const initialState: CreateLeadState = {
    message: null,
    errors: {},
    success: false
};

export default function LeadForm() {
    const [state, setState] = useState<CreateLeadState>(initialState);

    const handleSubmit = async (formData: FormData) => {

        const result = await createLead(state, formData);
        setState(result);
    }

    if (state.success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-zinc-900 border border-zinc-800 rounded-2xl"
            >
                <div className="flex justify-center mb-4">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-zinc-400">
                    Thank you for reaching out. A member of our team will review your project details and contact you within 24 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <form action={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-400">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                        placeholder="John Doe"
                        minLength={2}
                    />
                    {state.errors?.name && (
                        <p className="text-xs text-red-500">{state.errors.name[0]}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                        placeholder="john@example.com"
                    />
                    {state.errors?.email && (
                        <p className="text-xs text-red-500">{state.errors.email[0]}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium text-zinc-400">Company Name (Optional)</label>
                <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="Acme Inc."
                    minLength={5}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="serviceNeeded" className="text-sm font-medium text-zinc-400">Service Needed</label>
                <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all appearance-none"
                >
                    <option value="" disabled selected>Select a service</option>
                    <option value="Business Plan">Business Plan</option>
                    <option value="Pitch Deck">Pitch Deck</option>
                    <option value="Financial Model">Financial Model</option>
                    <option value="Full Package">Full Fundraising Package</option>
                    <option value="Other">Other</option>
                </select>
                {state.errors?.serviceNeeded && (
                    <p className="text-xs text-red-500">{state.errors.serviceNeeded[0]}</p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Project Details</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your fundraising goals and timeline..."
                    minLength={5}
                />
                {state.errors?.message && (
                    <p className="text-xs text-red-500">{state.errors.message[0]}</p>
                )}
            </div>

            {state.message && !state.success && (
                <p className="text-sm text-red-500 text-center">{state.message}</p>
            )}

            <SubmitButton />
        </form>
    );
}
