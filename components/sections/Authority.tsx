'use client';

import { motion } from 'framer-motion';

const metrics = [
    { label: 'Combined Experience', value: '3 Decades' },
    { label: 'Clients Advised', value: '1000+' },
    { label: 'Capital Raised', value: '$137M+' },
];

export default function Authority() {
    return (
        <section className="py-24 border-y border-white/5 bg-black">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                        >
                            <div className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                                {metric.value}
                            </div>
                            <div className="text-sm md:text-base text-zinc-500 uppercase tracking-widest font-medium">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
