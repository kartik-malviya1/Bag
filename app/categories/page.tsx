//@ts-nocheck
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/mira/Navbar';
import Footer from '@/components/mira/Footer';
import SectionHeader from '@/components/mira/SectionHeader';

import { catalogueCategories } from '@/lib/catalogueData';
const categories = catalogueCategories.map(c => ({
    name: c.label,
    description: c.description.slice(0, 90) + '...',
    image: c.image,
    path: c.path,
}));

export default function Categories() {
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
                        <SectionHeader subtitle="Browse by Industry" title="Uniform Categories" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                            >
                                <Link href={cat.path || '/products'} className="group block relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-500" />
                                    <div className="absolute bottom-8 left-8">
                                        <h3 className="font-heading text-2xl md:text-3xl font-medium text-primary-foreground mb-2">
                                            {cat.name}
                                        </h3>
                                        <p className="text-sm text-primary-foreground/70">{cat.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
