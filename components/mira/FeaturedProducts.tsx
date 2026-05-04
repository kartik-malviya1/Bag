//@ts-nocheck
'use client';

import React from 'react';
import SectionHeader from './SectionHeader';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const featured = [
    { name: 'Custom Blazers & Suits', path: '/catalogue/corporate-uniforms', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/fb9594bd0_generated_image.png', tag: 'Corporate' },
    { name: 'Scrub Suits', path: '/catalogue/hospital-uniforms', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/52ebd90db_generated_image.png', tag: 'Healthcare' },
    { name: 'Chef Uniforms', path: '/catalogue/hotel-uniforms', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/a27fbecc0_generated_image.png', tag: 'Hospitality' },
    { name: 'Safety Jackets', path: '/catalogue/industrial-uniforms', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/1b9fade4c_generated_image.png', tag: 'Industrial' },
];

export default function FeaturedProducts() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <SectionHeader subtitle="Our Speciality" title="Featured Uniform Categories" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
                    {featured.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                        >
                            <Link href={item.path} className="group block">
                                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-foreground text-primary-foreground text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium">
                                        {item.tag}
                                    </div>
                                </div>
                                <h3 className="font-body text-sm font-medium tracking-wide mb-1 group-hover:text-muted-foreground transition-colors duration-300">
                                    {item.name}
                                </h3>
                                <span className="text-xs text-muted-foreground tracking-wide">Custom — Bulk Orders Available</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <AnimatedButton href="/catalogue/corporate-uniforms" variant="outline">View Full Catalogue</AnimatedButton>
                </div>
            </div>
        </section>
    );
}
