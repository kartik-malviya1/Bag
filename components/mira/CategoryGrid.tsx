//@ts-nocheck
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
    {
        name: 'Industrial Uniforms',
        path: '/catalogue/industrial-uniforms',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/709d5d509_generated_image.png',
        position: 'left',   // full-height left column
    },
    {
        name: 'Healthcare Apparel',
        path: '/catalogue/healthcare-apparel',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d4b1b1b5c_generated_image.png',
        position: 'mid-top',  // stacked top in middle column
    },
    {
        name: 'Hospitality Wear',
        path: '/catalogue/hospitality-wear',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/6d8286f36_generated_image.png',
        position: 'mid-bottom', // stacked bottom in middle column
    },
    {
        name: 'Corporate Formals',
        path: '/catalogue/corporate-uniforms',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/46938c7e2_generated_image.png',
        position: 'right',  // full-height right column
    },
];

// Shared category card
function CategoryCard({ cat, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden group h-full"
        >
            <Link href={cat.path} className="block w-full h-full">
                <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Dark overlay that deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent group-hover:from-foreground/60 transition-all duration-500" />
                {/* Category label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <motion.span
                        className="inline-block font-heading text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground tracking-tight"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
                    >
                        {cat.name}
                    </motion.span>
                </div>
            </Link>
        </motion.div>
    );
}

export default function CategoryGrid() {
    const leftCat = categories.find(c => c.position === 'left');
    const midTop = categories.find(c => c.position === 'mid-top');
    const midBottom = categories.find(c => c.position === 'mid-bottom');
    const rightCat = categories.find(c => c.position === 'right');

    return (
        <section className="py-12 md:py-20">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                {/* 3-column grid matching Mira: Tall | Stacked x2 | Tall */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 h-auto md:h-[700px] lg:h-[750px]">
                    
                    {/* Column 1 — Full height */}
                    <div className="aspect-[3/4] md:aspect-auto md:h-full">
                        <CategoryCard cat={leftCat} index={0} />
                    </div>

                    {/* Column 2 — Stacked (two images) */}
                    <div className="flex flex-col gap-4 md:gap-5 md:h-full">
                        <div className="flex-1 min-h-0 aspect-[4/3] md:aspect-auto">
                            <CategoryCard cat={midTop} index={1} />
                        </div>
                        <div className="flex-1 min-h-0 aspect-[4/3] md:aspect-auto">
                            <CategoryCard cat={midBottom} index={2} />
                        </div>
                    </div>

                    {/* Column 3 — Full height */}
                    <div className="aspect-[3/4] md:aspect-auto md:h-full">
                        <CategoryCard cat={rightCat} index={3} />
                    </div>

                </div>
            </div>
        </section>
    );
}
