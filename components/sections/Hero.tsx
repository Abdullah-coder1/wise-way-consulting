'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative bg-black overflow-hidden">
            {/* Vibrant Premium Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <section className="relative min-h-screen flex items-center justify-center pt-20">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl filter opacity-50 animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl filter opacity-50 animate-pulse delay-1000" />
                </div>

                <div className="container relative z-10 px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column: Text & CTAs */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
                            >
                                <TrendingUp className="w-4 h-4 text-brand-secondary" />
                                <span className="text-sm font-medium text-brand-secondary drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">Trusted by Founders Raising $137M+</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-2xl uppercase leading-tight"
                            >
                                Make your next pitch <span className="text-zinc-500">your last.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-xl text-zinc-200 max-w-xl leading-relaxed"
                            >
                                Investors don&apos;t fund good ideas. They fund certainty. We bridge the gap between your vision and their checkbook.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4 w-full sm:w-auto"
                            >
                                <Link
                                    href="/get-started"
                                    className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-md bg-brand-primary px-8 font-medium text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:bg-brand-primary/90 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-black"
                                >
                                    <span className="mr-2">Start Your Project</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/#work"
                                    className="group inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-white/20 px-8 font-medium text-white transition-all hover:bg-white/10 hover:border-white/40"
                                >
                                    View Our Work
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Column: Interactive Image Widget */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative w-full aspect-video max-w-md mx-auto lg:ml-auto rounded-2xl border border-white/10 overflow-hidden shadow-2xl group/hero"
                        >
                            {/* Single Base Image */}
                            <Image
                                src="/newimgtouse.png"
                                alt="Wiseway Funding Difference"
                                fill
                                className="object-cover opacity-70 grayscale-[50%] transition-all duration-700 group-hover/left:opacity-100 group-hover/left:grayscale-0 group-hover/right:opacity-100 group-hover/right:grayscale-0"
                                priority
                            />

                            {/* Left Hover Zone: Absolute 50% width overlay trigger */}
                            <div className="absolute top-0 left-0 w-1/2 h-full z-10 group/left cursor-crosshair">
                                {/* Slide-up Glass Overlay */}
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/80 backdrop-blur-md opacity-0 translate-y-full group-hover/left:opacity-100 group-hover/left:translate-y-0 transition-all duration-500 ease-out flex flex-col items-center justify-center p-6 text-center border-t border-white/10">
                                    <span className="text-xl md:text-2xl font-medium text-white/90">
                                        Struggling to Raise Funds?
                                    </span>
                                </div>
                            </div>

                            {/* Right Hover Zone: Absolute 50% width overlay trigger */}
                            <div className="absolute top-0 right-0 w-1/2 h-full z-10 group/right cursor-pointer">
                                {/* Slide-up Bright Glass Overlay */}
                                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-white/20 backdrop-blur-xl opacity-0 translate-y-full group-hover/right:opacity-100 group-hover/right:translate-y-0 transition-all duration-500 ease-out flex flex-col items-center justify-center p-6 text-center border-t border-l border-white/40 shadow-[inset_0_0_50px_rgba(255,255,255,0.2)]">
                                    <span className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                                        Partnered with Wiseway & Raised!
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
