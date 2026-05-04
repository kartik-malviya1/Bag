//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import SectionHeader from './SectionHeader';

export default function SustainableBanner() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                    >
                        <SectionHeader subtitle="Our Process" title="From Fabric to Finished Uniform" />
                        <p className="text-muted-foreground text-base leading-relaxed mb-8 text-center lg:text-left max-w-md mx-auto lg:mx-0">
                            Every uniform begins with fabric consultation and custom sampling, moves through skilled tailoring and logo integration, and ends with a quality-checked, brand-ready garment delivered to your team.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <AnimatedButton href="/contact" variant="outline">
                                Get a Free Quote
                            </AnimatedButton>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="aspect-[21/9] overflow-hidden"
                    >
                        <img
                            src="https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/da65fda68_generated_image.png"
                            alt="Uniform manufacturing process"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
