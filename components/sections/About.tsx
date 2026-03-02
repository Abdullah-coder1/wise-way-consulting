'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-8"
                    >
                        About Wiseway Consulting
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 text-lg text-gray-400 leading-relaxed"
                    >
                        <p>
                            We are a premier team of financial analysts, strategists, and storytellers dedicated to bridging the gap between ambitious founders and capital. At Wiseway, we don&apos;t just write documents; we engineer funding outcomes.
                        </p>
                        <p>
                            With over $137M raised for our clients, our methodology combines rigorous financial modeling with compelling narrative structures, ensuring that every pitch deck and business plan we produce stands up to the scrutiny of top-tier VCs and institutional investors.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
                    >
                        <div className="p-4 border border-white/10 rounded-lg bg-black/20">
                            <div className="text-3xl font-bold text-white mb-1">5+</div>
                            <div className="text-sm text-gray-500">Years Experience</div>
                        </div>
                        <div className="p-4 border border-white/10 rounded-lg bg-black/20">
                            <div className="text-3xl font-bold text-white mb-1">200+</div>
                            <div className="text-sm text-gray-500">Projects Delivered</div>
                        </div>
                        <div className="p-4 border border-white/10 rounded-lg bg-black/20">
                            <div className="text-3xl font-bold text-white mb-1">$137M+</div>
                            <div className="text-sm text-gray-500">Capital Raised</div>
                        </div>
                        <div className="p-4 border border-white/10 rounded-lg bg-black/20">
                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                            <div className="text-sm text-gray-500">Client Satisfaction</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
