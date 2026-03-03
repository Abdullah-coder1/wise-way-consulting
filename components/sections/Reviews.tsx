'use client';

import { motion } from 'framer-motion';

const reviews = [
    { name: 'Alexandria', title: 'CEO, Nova Tech', text: 'Haris Khan went way above and beyond our expectations. His strategic insights and excellent work were instrumental in helping us successfully raise $3.5M USD. Highly recommended!', image: '' },
    { name: 'Bella', title: 'Founder', text: 'An absolute lifesaver. The business plan was sharp, compelling, and perfectly aligned with what investors wanted to see. We couldn\'t have secured our seed round without this expertise.', image: '' },
    { name: 'Nihar Gala', title: 'CEO', text: 'Exceptional financial modeling and a stunning pitch deck layout. His ability to translate complex data into a simple, investable narrative is unmatched.', image: '' },
    { name: 'Vivian', title: 'Founder', text: 'Working with him completely changed our trajectory. The clarity and structure he brought to our value proposition directly led to our successful fundraising.', image: '' },
    { name: 'Adam Harvey', title: 'CEO', text: 'A masterclass in investor storytelling. Haris knows exactly what VCs are looking for and delivers presentation materials that command attention.', image: '' },
]; // 5 new reviews

export default function Reviews() {
    return (
        <section className="py-24 bg-zinc-950 overflow-hidden border-y border-zinc-900" id="reviews">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">Founder Feedback</h2>
            </div>

            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex space-x-8 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={index}
                            className="w-[350px] p-8 rounded-xl bg-black border border-zinc-800 flex-shrink-0"
                        >
                            <p className="text-zinc-300 mb-6 text-lg italic leading-relaxed">&quot;{review.text}&quot;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <p className="text-zinc-500 text-sm uppercase tracking-wide">{review.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
