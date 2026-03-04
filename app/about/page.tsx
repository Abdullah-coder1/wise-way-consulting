'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const sentenceAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function AboutPage() {
    const headlineText = "We don't just make pitch decks. We build the case that closes the round.";

    return (
        <main className="flex min-h-screen flex-col bg-black text-white selection:bg-brand-primary/30">
            {/* Dark Premium Ambient Background Gradients (Enhanced Blue Theme) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[1000px] h-[800px] bg-blue-600/15 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 opacity-80" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/15 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/4 opacity-70" />
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            <article className="relative z-10 pt-32 pb-24 md:pt-48 md:pb-32 px-4 md:px-6 container mx-auto max-w-7xl">

                {/* 2-Column Dynamic Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

                    {/* Left Column: Sticky Headings */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="inline-block"
                            >
                                <span className="px-4 py-1.5 rounded-full bg-white/5 text-white/90 text-xs font-semibold tracking-widest uppercase border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)] relative overflow-hidden group">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    Our Story
                                </span>
                            </motion.div>

                            {/* Kinetic Text Reveal for Headline */}
                            <motion.h1
                                variants={sentenceAnimation}
                                initial="hidden"
                                animate="show"
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                            >
                                {headlineText.split(' ').map((word, index) => (
                                    <motion.span key={index} variants={wordAnimation} className="inline-block mr-[0.25em]">
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            {/* Executive Portrait - Fixed Framing (Aspect-[3/4], Object-top) combined with Slow Scale & Fade Reveal */}
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                                className="hidden lg:block relative w-full aspect-[3/4] max-w-sm mt-12 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-md shadow-[0_0_50px_rgba(37,99,235,0.1)] group"
                            >
                                <Image
                                    src="/simg.png"
                                    alt="Haris - Strategic Consulting"
                                    fill
                                    className="object-cover object-top opacity-80 grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-60" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Scrolling Body Narrative */}
                    <div className="lg:col-span-7 pb-12 mt-8 lg:mt-0">
                        <motion.h2
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6"
                        >
                            We Got Tired of Seeing Great Companies Lose Funding.
                        </motion.h2>

                        <div className="space-y-12 text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                We saw it happen too many times. A founder with a brilliant idea, great traction, and a massive market walks into a pitch meeting—and leaves empty-handed. The idea didn&apos;t fail. The translation did.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Here is the hard truth: investors are not just evaluating your product. They are managing risk. Every question they ask is a test. They need to see a clear path to profit and a financial model that holds up under pressure.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                Most founders are brilliant at building, but no one ever taught them how to raise capital. So, we built the playbook for them.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                className="my-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-[0_0_40px_rgba(37,99,235,0.05)] relative overflow-hidden group"
                            >
                                {/* Glassmorphic accent inside the box */}
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl group-hover:bg-brand-primary/25 transition-colors duration-700" />

                                <p className="relative z-10 text-white font-medium leading-relaxed">
                                    Wiseway is not a slide design agency. We are your strategic partners. We dive deep into your business, find the gaps before investors do, and rebuild your story from the ground up. We don&apos;t just make your business look investable. We make sure it actually is.
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                We keep our client list small on purpose. Every founder we work with gets the exact same dedication we would want if it were our own money on the line. We pressure-test your assumptions and rewrite the narrative until it is bulletproof.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30, x: -20 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                className="text-white text-xl md:text-2xl font-semibold italic border-l-4 border-brand-primary pl-6 py-2 shadow-sm"
                            >
                                Our mission is simple: we make sure you walk into that room more prepared than anyone else, making &quot;yes&quot; the only logical answer.
                            </motion.p>
                        </div>
                    </div>

                </div>

                {/* Staggered Animated Stat Pills footer */}
                <div className="mt-24 pt-16 border-t border-white/5 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {[
                            { value: '$137M+', label: 'Raised' },
                            { value: '3 Decades', label: 'Combined Experience' },
                            { value: '12+', label: 'Industries' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "0px" }}
                                transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
                                className="group bg-zinc-950/50 backdrop-blur-sm border border-white/5 hover:border-white/20 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(37,99,235,0.15)]"
                            >
                                <span className="block text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-primary transition-all duration-300">
                                    {stat.value}
                                </span>
                                <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em] group-hover:text-zinc-300 transition-colors duration-300">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </article>
        </main>
    );
}
