'use client';

import { motion } from 'framer-motion';

const reviews = [
    { name: 'Chiquita Smith', title: 'Founder of Care', text: 'Working with Haris was invaluable. He is highly attentive, brings a wealth of industry knowledge to the table, and his final presentation was outstanding. I highly recommend his consulting services.', image: '' },
    { name: 'Alexandria', title: 'Founder of Scout Portugal', text: 'Haris and his team provided the exact level of detail, specificity, and strategic care we needed. His work was instrumental in helping us successfully close our funding round. We will absolutely continue to collaborate with Wise Way Consulting for future ventures.', image: '' },
    { name: 'Eric Robinson', title: 'Founder of Freedom Movement', text: 'An absolute beast! The executive one-pager Haris created alone secured the signature I needed to build a 7-figure business. I highly recommend his services to any founder—my team and I will definitely be keeping him busy with future projects.', image: '' },
    { name: 'Ida Bella', title: 'Founder of Acai Bella', text: 'Haris was exceptional. He completely understood the assignment, listened to exactly what our business needed, and executed well beyond our expectations. He is a true expert at bringing a founder\'s vision to life.', image: '' },
    { name: 'Nihar Gala', title: 'Founder of Care IQ', text: 'Haris is a phenomenal strategic partner. The business plan he developed showcased impeccable attention to detail and went far beyond our expectations, directly contributing to our latest raise. Outstanding execution and proactive advisory.', image: '' },
    { name: 'Darcell Boutelle', title: 'Founder of Annadale Family Medicine', text: 'Haris truly shines in creating top-notch business plans. His strategic insight and incredible attention to detail far exceeded my expectations—I’ve previously paid much more for plans from others that weren\'t half as robust. Working with him was a seamless and highly professional experience.', image: '' },
    { name: 'Nisso Andubekov', title: 'Founder of Tequila Beauty', text: 'Working with Haris was an outstanding experience. His organizational skills and ability to anticipate operational questions I hadn\'t even thought to ask were incredibly valuable. He went above and beyond to guide me through the strategy, resulting in a clear, visually engaging roadmap for my business.', image: '' },
    { name: 'Shareese', title: 'CEO of Skin by Aspen', text: 'I had the pleasure of working with Haris on my updated business plan and pitch deck. He was incredibly thorough and knowledgeable. What impressed me most was how perfectly he aligned the final presentations with our brand architecture. I will absolutely be referring him to other founders looking for top-tier investor materials.', image: '' },
    { name: 'Gina Luiz', title: 'CEO of Bao Beyond Restaurant', text: 'I recently worked with Haris on my business plan, and I couldn\'t be happier. He is incredibly knowledgeable about exactly what makes a business stand out to investors. He was a fantastic guide throughout the entire process and truly goes the extra mile.', image: '' },
    { name: 'Adam Harvey', title: 'Founder of Padelock', text: 'Haris is brilliant. His immediate understanding of our business model, combined with his strategic guidance and execution speed, are simply second to none. I would happily trust him and his team with our future consulting needs.', image: '' }
];

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
