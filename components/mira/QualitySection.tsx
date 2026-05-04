//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { Check } from 'lucide-react';

export default function QualitySection() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="aspect-[4/5] overflow-hidden"
                    >
                        <img
                            src="https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/da65fda68_generated_image.png"
                            alt="Quality uniform manufacturing"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                            Premium Quality &<br />Sustainable Workwear
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
                            With a textile legacy rooted in Bhopal since 1978, Corporate Uniforms By B.A.G Group brings decades of craftsmanship to every stitch. We don't just manufacture uniforms — we build your brand identity.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 flex items-center justify-center bg-secondary flex-shrink-0 mt-0.5">
                                    <Check className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wide mb-1">Custom Design & Branding</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        From concept to delivery — custom uniform design with logo embroidery and fabric consultation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 flex items-center justify-center bg-secondary flex-shrink-0 mt-0.5">
                                    <Check className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wide mb-1">Scalable Bulk Supply</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Reliable repeat-order supply for growing organisations — hospitality, healthcare, and beyond.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AnimatedButton href="/catalogue/corporate-uniforms" variant="outline">
                            Explore Catalogue
                        </AnimatedButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
