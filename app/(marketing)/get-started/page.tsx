import LeadForm from '@/components/forms/LeadForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Get Started | Wiseway Consulting',
    description: 'Start your fundraising journey with Wiseway Consulting. Fill out our intake form to get matched with the right financial services.',
};

export default function GetStartedPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24 px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Project</h1>
                    <p className="text-gray-400">
                        Tell us about your company and fundraising goals. We&apos;ll analyze your needs and propose a tailored engagement plan.
                    </p>
                </div>

                <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <LeadForm />
                </div>

                <div className="mt-12 text-center text-sm text-zinc-500">
                    <p>Confidentital & Secure. We sign NDAs for all potential clients.</p>
                </div>
            </div>
        </main>
    );
}
