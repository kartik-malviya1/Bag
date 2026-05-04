//@ts-nocheck
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/mira/Navbar';
import Footer from '@/components/mira/Footer';
import SectionHeader from '@/components/mira/SectionHeader';

const blogPosts = [
    {
        title: 'Why Corporate Uniforms Are a Brand Asset, Not Just Clothing',
        excerpt: 'Discover how B.A.G Group helps businesses treat uniforms as functional brand assets — improving team identity, customer perception, and employee morale.',
        date: 'April 20, 2026',
        category: 'Branding',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/46938c7e2_generated_image.png',
    },
    {
        title: 'How to Choose the Right Uniform Fabric for Your Industry',
        excerpt: 'From anti-bacterial fabrics for healthcare to high-visibility materials for industrial environments — a guide to making the right fabric decisions.',
        date: 'April 12, 2026',
        category: 'Fabric Guide',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/da65fda68_generated_image.png',
    },
    {
        title: 'The B.A.G Group Story: From Bhopal\'s Flea Markets to Corporate India',
        excerpt: 'Tracing the journey from Ashok Gyanchandani\'s first textile stall in Bhopal to Corporate Uniforms By B.A.G Group serving 500+ businesses nationwide.',
        date: 'March 28, 2026',
        category: 'Our Story',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d4b1b1b5c_generated_image.png',
    },
    {
        title: 'Hospital Uniform Essentials: What Every Healthcare Facility Needs',
        excerpt: 'From doctor coats to patient gowns, we break down the complete uniform program for modern hospitals and clinics in India.',
        date: 'March 10, 2026',
        category: 'Healthcare',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/52ebd90db_generated_image.png',
    },
];

export default function Blog() {
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
                        <SectionHeader subtitle="Fashion Journal" title="Latest from the Blog" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {blogPosts.map((post, i) => (
                            <motion.article
                                key={post.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                className="group"
                            >
                                <Link href="/blog" className="block">
                                    <div className="aspect-[16/10] overflow-hidden mb-5">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                                            {post.category}
                                        </span>
                                        <span className="w-1 h-1 bg-muted-foreground/40 rounded-full" />
                                        <span className="text-[10px] tracking-[0.1em] text-muted-foreground">
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-xl md:text-2xl font-medium mb-3 group-hover:text-muted-foreground transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
