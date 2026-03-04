'use client';

import { motion } from 'framer-motion';

export default function Manifesto() {
    return (
        <section className="py-32 bg-zinc-900/30">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                        The Truth About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Raising Capital.</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed text-left max-w-3xl mx-auto">
                        <p>
                            When an investor says no, they rarely tell you the real reason. It wasn&apos;t your idea—ideas are everywhere. What they didn&apos;t see was certainty.
                        </p>
                        <p>
                            They want a strong market, a solid financial model, and a story that makes writing the check an easy decision. Most founders walk in with a great vision but fail to explain it in investor terms.
                        </p>
                        <p className="text-white font-medium">
                            Wiseway is your translator. We don&apos;t just make your slides look pretty—we rebuild how investors see your business.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
