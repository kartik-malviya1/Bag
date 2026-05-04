//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

function AnimatedStat({ value, label, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <p className="font-heading text-4xl md:text-5xl font-medium mb-1">{value}</p>
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{label}</p>
        </motion.div>
    );
}

export default function VisionSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="order-2 lg:order-1"
                    >
                        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                            Complete Uniform Solutions for Every Business
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-lg">
                            Under Bharat Gyanchandani, the B.A.G Group expanded into corporate uniforms in 2016 — initially serving local hotels, hospitals, and spas. Today, we serve organisations nationwide with premium, custom-manufactured workwear that becomes a visible part of your brand.
                        </p>

                        <AnimatedButton to="/catalogue/corporate-uniforms" className="mb-12">View Catalogue</AnimatedButton>

                        <div className="flex gap-16 mt-10">
                            <AnimatedStat value="45+" label="Years of Textile Heritage" delay={0.2} />
                            <AnimatedStat value="500+" label="Businesses Served" delay={0.4} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="order-1 lg:order-2 aspect-[4/5] overflow-hidden"
                    >
                        <img
                            src="https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/46938c7e2_generated_image.png"
                            alt="Corporate uniforms vision"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
