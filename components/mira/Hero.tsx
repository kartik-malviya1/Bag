//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const heroImages = {
    img1: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/46938c7e2_generated_image.png',
    img2: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d4b1b1b5c_generated_image.png',
    img3: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/6d8286f36_generated_image.png',
    overlay: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/da65fda68_generated_image.png',
};

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-20 overflow-hidden">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start min-h-[85vh]">
                    {/* Left image column */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className="lg:col-span-3 relative"
                    >
                        <div className="aspect-[3/4] overflow-hidden">
                            <img
                                src={heroImages.img1}
                                alt="Corporate uniforms"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-background p-4 md:p-6 shadow-lg"
                        >
                            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Trusted by 500+ Businesses</p>
                            <p className="text-sm font-medium">Since 1978, Bhopal</p>
                        </motion.div>
                    </motion.div>

                    {/* Center content */}
                    <div className="lg:col-span-6 flex flex-col items-center justify-center text-center py-8 lg:py-16">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 md:mb-8"
                        >
                            B2B Corporate Uniform Solutions — Since 1978
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
                            className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-tight mb-8 md:mb-12"
                        >
                            Uniforms that <br />
                            Define <br />
                            Your Brand{' '}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                        >
                            <AnimatedButton href="/catalogue/corporate-uniforms">Explore Catalogue</AnimatedButton>
                        </motion.div>
                    </div>

                    {/* Right image column */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                            className="aspect-[4/5] overflow-hidden"
                        >
                            <img
                                src={heroImages.img2}
                                alt="Fashion editorial"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                            className="aspect-[4/3] overflow-hidden"
                        >
                            <img
                                src={heroImages.img3}
                                alt="Fashion boutique"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating overlay image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="hidden xl:block absolute top-1/2 right-[20%] -translate-y-1/2 w-48 h-60 z-10 pointer-events-none"
            >
                <img
                    src={heroImages.overlay}
                    alt="Fashion detail"
                    className="w-full h-full object-cover opacity-80"
                />
            </motion.div>
        </section>
    );
}
