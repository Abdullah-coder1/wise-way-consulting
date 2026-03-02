'use client';

import { motion } from 'framer-motion';
import { Presentation, FileSpreadsheet, FileText } from 'lucide-react';

const services = [
    {
        icon: <Presentation className="w-8 h-8 md:w-12 md:h-12 text-white" />,
        title: 'Pitch Decks',
        description: 'Cinematic, narrative-driven decks that keep investors glued to the screen.',
    },
    {
        icon: <FileSpreadsheet className="w-8 h-8 md:w-12 md:h-12 text-white" />,
        title: 'Financial Models',
        description: 'Bulletproof logic. Defensible assumptions. The numbers investors actually want to see.',
    },
    {
        icon: <FileText className="w-8 h-8 md:w-12 md:h-12 text-white" />,
        title: 'Business Plans',
        description: 'Comprehensive roadmaps that turn vision into a tactical execution strategy.',
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-zinc-900/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">The Arsenal</h2>
                    <p className="text-zinc-400">Everything you need to close the round.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
