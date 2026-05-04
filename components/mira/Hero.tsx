//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const heroImages = {
    left: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/46938c7e2_generated_image.png',
    right: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d4b1b1b5c_generated_image.png',
    thumb: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/6d8286f36_generated_image.png',
};

// Reveal animation — white overlay slides up to reveal image beneath
function ImageReveal({ children, delay = 0, className = '' }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            {children}
            <motion.div
                className="absolute inset-0 bg-background z-10"
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
            />
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative pt-24 md:pt-28 pb-8 overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                {/* Hero Grid — 3 columns matching Mira: Left Image | Center Content | Right Images */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-6 md:gap-8 items-stretch min-h-[75vh]">

                    {/* ── Left Image Column ── */}
                    <div className="hidden lg:flex flex-col relative">
                        {/* Decorative background block behind image */}
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-[85%] h-[70%] bg-secondary z-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                        />
                        <ImageReveal delay={0.3} className="relative z-10 flex-1">
                            <img
                                src={heroImages.left}
                                alt="Corporate formal uniforms"
                                className="w-full h-full object-cover"
                            />
                        </ImageReveal>
                    </div>

                    {/* ── Center Content ── */}
                    <div className="flex flex-col items-center justify-center text-center py-10 lg:py-20 order-first lg:order-none">
                        <motion.div
                            className="flex items-center gap-2 mb-6 md:mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            <span className="block w-8 h-px bg-muted-foreground" />
                            <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-medium">
                                B2B Corporate Uniform Solutions
                            </span>
                            <span className="block w-8 h-px bg-muted-foreground" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8 md:mb-10"
                        >
                            Uniforms that
                            <br />
                            Define
                            <br />
                            <span className="italic">Your Brand</span>
                        </motion.h1>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center gap-5 mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.0 }}
                        >
                            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                                <span className="font-semibold text-foreground">Since 1978</span> — 500+ businesses trust us for premium corporate uniforms.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.2 }}
                        >
                            <AnimatedButton href="/catalogue/corporate-uniforms">Explore Catalogue</AnimatedButton>
                        </motion.div>
                    </div>

                    {/* ── Right Image Column ── */}
                    <div className="hidden lg:flex flex-col relative gap-4">
                        {/* Main right image */}
                        <ImageReveal delay={0.5} className="flex-[2] min-h-0">
                            <img
                                src={heroImages.right}
                                alt="Healthcare uniforms"
                                className="w-full h-full object-cover"
                            />
                        </ImageReveal>

                        {/* Background block + thumbnail */}
                        <div className="relative flex-1 min-h-0">
                            <motion.div
                                className="absolute -top-4 -right-4 w-[85%] h-[120%] bg-secondary z-0"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                            />
                            <ImageReveal delay={0.8} className="relative z-10 h-full">
                                <img
                                    src={heroImages.thumb}
                                    alt="Hospitality uniforms"
                                    className="w-full h-full object-cover"
                                />
                            </ImageReveal>
                        </div>
                    </div>

                    {/* ── Mobile images (show only on smaller screens) ── */}
                    <div className="grid grid-cols-2 gap-4 lg:hidden">
                        <ImageReveal delay={0.3} className="aspect-[3/4]">
                            <img
                                src={heroImages.left}
                                alt="Corporate uniforms"
                                className="w-full h-full object-cover"
                            />
                        </ImageReveal>
                        <ImageReveal delay={0.5} className="aspect-[3/4]">
                            <img
                                src={heroImages.right}
                                alt="Healthcare uniforms"
                                className="w-full h-full object-cover"
                            />
                        </ImageReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
