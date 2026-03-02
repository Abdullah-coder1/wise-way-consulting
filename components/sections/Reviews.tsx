'use client';

import { motion } from 'framer-motion';

const reviews = [
    { name: 'Sarah L.', title: 'CEO, TechFlow', text: 'Wiseway transformed our chaotic ideas into a compelling narrative. Closed $2M in 3 months.', image: '' },
    { name: 'James K.', title: 'Founder, BlockScale', text: 'Financial model was impeccable. VCs didn\'t find a single hole in our logic.', image: '' },
    { name: 'Elena R.', title: 'Co-Founder, GreenEnergy', text: 'The pitch deck design was stunning. It immediately set us apart from the crowd.', image: '' },
    { name: 'Michael T.', title: 'CEO, DataSense', text: 'Professional, fast, and incredibly insightful. Worth every penny.', image: '' },
    { name: 'David W.', title: 'Founder, Healthify', text: 'They helped us structure our ask perfectly. We got exactly what we needed.', image: '' },
    { name: 'Jessica M.', title: 'COO, EduTech', text: 'Our valuation increased significantly thanks to their financial modeling work.', image: '' },
    { name: 'Robert C.', title: 'Founder, AeroSpace', text: 'A true partner in our fundraising journey. Highly recommended.', image: '' },
    { name: 'Linda P.', title: 'CEO, RetailNext', text: 'The storytelling workshop changed how we pitch forever.', image: '' },
    { name: 'Thomas H.', title: 'Founder, FinTech', text: 'Simply the best advisory service for early-stage founders.', image: '' },
    { name: 'Waleed A.', title: 'CEO, LogisticsOne', text: 'From zero to funded. Couldn\'t have done it without Wiseway.', image: '' },
]; // 10 reviews

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
