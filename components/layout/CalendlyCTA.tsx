'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export default function CalendlyCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-8 right-8 z-50"
        >
            <Link
                href="https://calendly.com/your-link"
                target="_blank"
                className="flex items-center gap-3 px-6 py-4 bg-brand-primary text-white rounded-full font-bold shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] hover:bg-brand-primary/90 transition-all transform hover:-translate-y-1"
            >
                <Calendar className="w-5 h-5" />
                <span>Book a Call Now</span>
            </Link>
        </motion.div>
    );
}
