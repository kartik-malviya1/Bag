//@ts-nocheck
'use client';

import React from 'react';
import SectionHeader from './SectionHeader';
import AnimatedButton from './AnimatedButton';
import Link from 'next/link';
import { motion } from 'framer-motion';

const uniformItems = [
    { name: 'Custom T-Shirts & Polo', path: '/catalogue/corporate-uniforms', tag: 'Corporate', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/4d2f86589_generated_image.png' },
    { name: 'Ladies Office Uniforms', path: '/catalogue/corporate-uniforms', tag: 'Corporate', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/09164bfbf_generated_image.png' },
    { name: 'Mens Office Uniforms', path: '/catalogue/corporate-uniforms', tag: 'Corporate', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/a6c233426_generated_image.png' },
    { name: 'Custom Jackets & Hoodies', path: '/catalogue/corporate-uniforms', tag: 'Corporate', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/149afa39b_generated_image.png' },
    { name: 'Doctors & Lab Coats', path: '/catalogue/hospital-uniforms', tag: 'Healthcare', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/1d59c7349_generated_image.png' },
    { name: 'Nurse Uniforms', path: '/catalogue/hospital-uniforms', tag: 'Healthcare', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/2dc0c29f9_generated_image.png' },
    { name: 'Boiler Suits', path: '/catalogue/industrial-uniforms', tag: 'Industrial', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d61024afb_generated_image.png' },
    { name: 'Waiter Uniforms', path: '/catalogue/hotel-uniforms', tag: 'Hospitality', image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/2e14f7f38_generated_image.png' },
];

export default function LatestProducts() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <SectionHeader subtitle="Full Catalogue" title="Our Uniform Range" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
                    {uniformItems.map((item, i) => (
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
                                <h3 className="font-body text-sm font-medium tracking-wide group-hover:text-muted-foreground transition-colors duration-300">
                                    {item.name}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <AnimatedButton href="/catalogue/corporate-uniforms" variant="outline">
                        View Full Catalogue
                    </AnimatedButton>
                </div>
            </div>
        </section>
    );
}
