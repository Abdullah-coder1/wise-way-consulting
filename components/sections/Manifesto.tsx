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
                        The Hard Truth About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Raising Capital</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
                        <p>
                            Investors don&apos;t fund &quot;good ideas.&quot; They fund certainty.
                        </p>
                        <p>
                            They need to see a clear path to roi, a defensible market position, and a financial model that withstands scrutiny.
                            Most founders have the vision but fail the translation.
                        </p>
                        <p className="text-white font-medium">
                            Wiseway is that translation layer. We turn your vision into a bankable asset.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
