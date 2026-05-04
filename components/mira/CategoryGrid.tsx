//@ts-nocheck
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
    {
        name: 'Industrial Uniforms',
        path: '/catalogue/industrial-uniforms',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/709d5d509_generated_image.png',
        span: 'md:col-span-2 md:row-span-2',
    },
    {
        name: 'Healthcare Apparel',
        path: '/catalogue/healthcare-apparel',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d4b1b1b5c_generated_image.png',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        name: 'Hospitality Wear',
        path: '/catalogue/hospitality-wear',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/6d8286f36_generated_image.png',
        span: 'md:col-span-1 md:row-span-2',
    },
    {
        name: 'Corporate Formals',
        path: '/catalogue/corporate-uniforms',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/46938c7e2_generated_image.png',
        span: 'md:col-span-1 md:row-span-1',
    },
];

export default function CategoryGrid() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-[1000px] md:h-[700px]">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                            className={`${cat.span} relative overflow-hidden group`}
                        >
                            <Link href={cat.path} className="block w-full h-full">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-primary-foreground font-heading text-xl md:text-2xl font-medium">
                                        {cat.name}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
