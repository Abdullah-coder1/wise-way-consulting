import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Wiseway Consulting',
    description: 'Learn more about Wiseway Consulting and our mission.',
};

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col bg-black text-white selection:bg-white/20">
            {/* Ambient Blue Background Glow */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                            About Us
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed mb-12">
                            Transforming complex ideas into compelling narratives that win investors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blank Container for Text */}
            <section className="relative z-10 py-20 px-4 md:px-6 bg-zinc-950 border-y border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.05)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto min-h-[400px] border border-blue-500/10 rounded-2xl bg-black/50 backdrop-blur-sm p-8 md:p-12">
                        {/* Placeholder for future content */}
                        <div className="w-full h-full border border-dashed border-blue-500/30 rounded-xl flex items-center justify-center p-12">
                            <p className="text-blue-500/50 text-lg uppercase tracking-widest font-medium">Text Content Placeholder</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
