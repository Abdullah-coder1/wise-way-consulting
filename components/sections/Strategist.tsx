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
                            alt="Haris Khan - Lead Strategist"
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
                                The Strategist
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Meet Haris Khan
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-zinc-400 leading-relaxed"
                        >
                            Bringing <span className="text-white font-semibold">3 decades of combined experience</span> to the table, Haris is the lead strategist behind <span className="text-white font-semibold">$137M+</span> in raised capital.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-zinc-400 leading-relaxed"
                        >
                            Haris doesn&apos;t just critique decks; he architects funding narratives that resonate natively with institutional investors. With a profound understanding of what VCs are actively searching for, he transforms high-potential startups into rigorously investable assets.
                        </motion.p>

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
                                href="/#portfolio"
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
