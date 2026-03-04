'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const successStories = [
    { companyName: 'Care', amountRaised: '$150k', description: 'Series A Funding secured with our bespoke deck.', image: '/Care.png' },
    { companyName: 'Legacy One', amountRaised: '$100k', description: 'Grant + Equity matched funding.', image: '/Legacy one.png' },
    { companyName: 'The Standard', amountRaised: '$100k', description: '', image: '/The Standard.png' },
    { companyName: 'Acai Bella', amountRaised: '$100k', description: 'Seed Round closed in 6 weeks.', image: '/Acaibella wellness cafe.png' },
    { companyName: 'Scout Portugal', amountRaised: '$250k', description: 'Pre-revenue seed round.', image: '/Scout portugal.png' },
    { companyName: 'Quest Trip', amountRaised: '$200k', description: 'Token sale private round advisory.', image: '/QuestTrip.png' },
    { companyName: 'Freedom Movement', amountRaised: '$150k', description: 'Strategic acquisition proposal accepted.', image: '/Freedom movement.png' }
];

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-24 bg-black border-t border-zinc-900" id="work">
            <div className="container px-4 md:px-6 mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">Proven Results</h2>
                <p className="text-zinc-400">Real founders. Real capital raised.</p>
            </div>

            <div className="w-full overflow-x-auto pb-8 hide-scrollbar px-4 md:px-6">
                <div className="flex space-x-6 w-max">
                    {successStories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors"
                        >
                            <div
                                className="relative h-48 w-full mb-6 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden cursor-pointer group"
                                onClick={() => setSelectedImage(story.image)}
                            >
                                <Image
                                    src={story.image}
                                    alt={`${story.companyName} success story`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-white">{story.companyName}</h3>
                                {story.amountRaised && (
                                    <span className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
                                        Raised {story.amountRaised}
                                    </span>
                                )}
                            </div>
                            <p className="text-zinc-500 text-sm">
                                {story.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-sm transition-all z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X className="w-8 h-8" />
                            <span className="sr-only">Close</span>
                        </button>
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="relative w-full max-w-5xl h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Enlarged success story"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
