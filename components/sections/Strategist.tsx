'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, ArrowRight } from 'lucide-react';

export default function Strategist() {
    return (
        <section className="py-24 bg-black border-y border-white/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Interactive Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative w-full max-w-md mx-auto md:ml-auto h-[600px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src="/simg.png"
                            alt="Haris - Lead Strategist"
                            fill
                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Right Column: Bio */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium tracking-widest uppercase border border-white/10">
                                THE STRATEGIST
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Haris Doesn&apos;t Just Fix Pitch Decks. He Changes How Investors See Your Business.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-zinc-400 leading-relaxed space-y-4"
                        >
                            <p>
                                Haris brings 3 decades of combined experience and has helped founders raise over $137M. He knows exactly how investors think. Most consultants just polish your slides and make them look nice. Haris goes deeper.
                            </p>
                            <p>
                                He knows that investors are not just looking at your product; they are looking at their risk. His job is to remove every reason they have to say no. He builds a story that speaks the exact language investors want to hear.
                            </p>
                            <p className="text-white font-medium">
                                Founders who work with Haris raise money faster, on better terms, and from the right investors.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-4 flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href="https://www.linkedin.com/in/m-haris-khan1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-12 items-center justify-center rounded-md bg-white px-8 font-medium text-black transition-all hover:bg-gray-200"
                            >
                                <Linkedin className="w-4 h-4 mr-2" />
                                <span>Connect on LinkedIn</span>
                            </Link>

                            <Link
                                href="/#work"
                                className="group inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-8 font-medium text-white transition-all hover:bg-white/10"
                            >
                                <span>View Success Stories</span>
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
