//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Navbar from '@/components/mira/Navbar';
import Footer from '@/components/mira/Footer';
import SectionHeader from '@/components/mira/SectionHeader';

const reviews = [
    { name: 'Rajeev Mehta', location: 'General Manager, Hotel Landmark, Bhopal', rating: 5, text: 'Corporate Uniforms By B.A.G Group delivered exactly what we needed — elegant, durable hotel uniforms with our logo precisely embroidered. Our staff looks outstanding.' },
    { name: 'Dr. Sunita Patel', location: 'Hospital Administrator, Bhopal Medical Centre', rating: 5, text: 'The scrub suits and doctor coats are of exceptional quality. The fabric is comfortable for long shifts and the stitching is precise. Highly recommend for any healthcare facility.' },
    { name: 'Arvind Sharma', location: 'Operations Head, Tech Solutions Pvt. Ltd.', rating: 5, text: 'We ordered blazers and polo t-shirts for our entire team of 200 staff. The custom embroidery was flawless and delivery was on schedule. Will definitely reorder.' },
    { name: 'Priya Joshi', location: 'Spa Director, The Wellness Hub', rating: 4, text: 'The salon uniforms have elevated our spa\'s professional look considerably. The fabric is soft, the fit is excellent, and the branding is crisp.' },
    { name: 'Manoj Gupta', location: 'Factory Manager, Gupta Industries', rating: 5, text: 'Safety jackets and boiler suits exactly as required — compliant, durable, and well-branded. B.A.G Group understands industrial requirements completely.' },
    { name: 'Neha Singh', location: 'HR Manager, Corporate Services Ltd.', rating: 5, text: 'From the initial consultation to the final bulk delivery, the entire process was seamless. The uniforms reflect our brand perfectly. Exceptional service!' },
];

function ReviewCard({ review, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-border p-8 bg-card"
            id='reviews'
        >
            <div className="flex gap-1 mb-5">
                {Array(5).fill(null).map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-border'}`}
                        strokeWidth={1.5}
                    />
                ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                "{review.text}"
            </p>
            <div className="border-t border-border pt-5">
                <p className="text-sm font-medium">{review.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{review.location}</p>
            </div>
        </motion.div>
    );
}

export default function Reviews() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-16 md:pb-24">
                <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-16"
                    >
                        <SectionHeader subtitle="Testimonials" title="What Our Customers Say" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, i) => (
                            <ReviewCard key={review.name} review={review} index={i} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
