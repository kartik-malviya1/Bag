//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/mira/Navbar';
import Footer from '@/components/mira/Footer';
import FeaturesBar from '@/components/mira/FeaturesBar';
import AnimatedButton from '@/components/mira/AnimatedButton';
import { Check } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-16 md:pb-24">
                <div className="max-w-[120rem] mx-auto px-6 md:px-12">

                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
                    >
                        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">Our Story</p>
                        <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight mb-6">
                            Corporate Uniforms<br /><span className="italic">By B.A.G Group</span>
                        </h1>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            A Bhopal-based B2B corporate apparel and uniform design business with a textile legacy that began in 1978. We combine decades of craftsmanship with modern manufacturing to build stronger, more professional team identities.
                        </p>
                    </motion.div>

                    {/* Founding story */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="aspect-[4/5] overflow-hidden"
                        >
                            <img
                                src="https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/da65fda68_generated_image.png"
                                alt="B.A.G Group manufacturing heritage"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight mb-6">
                                A Legacy Rooted in Bhopal Since 1978
                            </h2>
                            <p className="text-muted-foreground text-base leading-relaxed mb-6">
                                Founder Ashok Gyanchandani began by selling cut pieces in Bhopal's flea markets, steadily building a broader textile retail presence in the city. That grassroots foundation instilled a deep understanding of fabric quality and the value of craftsmanship.
                            </p>
                            <p className="text-muted-foreground text-base leading-relaxed mb-8">
                                Under Bharat Gyanchandani, the family business expanded into corporate uniforms in 2016 — initially serving local hotels, hospitals, and spas — before growing into a comprehensive B2B uniform manufacturing partner for organisations nationwide.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Custom uniform design & branding integration',
                                    'Premium fabric consultation & sampling',
                                    'Scalable bulk manufacturing with quality checks',
                                    'Repeat-order supply for growing organisations',
                                    'Sustainable material options available',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-6 h-6 flex items-center justify-center bg-secondary flex-shrink-0">
                                            <Check className="w-3 h-3" strokeWidth={2} />
                                        </div>
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Industries served */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-24"
                    >
                        <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight text-center mb-12">Industries We Serve</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { label: 'Corporate Offices', icon: '🏢' },
                                { label: 'Hospitality', icon: '🏨' },
                                { label: 'Healthcare', icon: '🏥' },
                                { label: 'Spas & Wellness', icon: '✨' },
                                { label: 'Service Teams', icon: '👥' },
                                { label: 'Industrial', icon: '⚙️' },
                            ].map((ind) => (
                                <div key={ind.label} className="border border-border p-6 text-center bg-card">
                                    <div className="text-3xl mb-3">{ind.icon}</div>
                                    <p className="text-xs tracking-[0.1em] uppercase font-medium">{ind.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24"
                    >
                        {[
                            { value: '1978', label: 'Year Founded' },
                            { value: '2016', label: 'Corporate Division Launch' },
                            { value: '500+', label: 'Businesses Served' },
                            { value: '6+', label: 'Industries Covered' },
                        ].map((stat) => (
                            <div key={stat.label} className="border border-border p-8">
                                <p className="font-heading text-3xl md:text-4xl font-medium mb-2">{stat.value}</p>
                                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    <div className="flex justify-center">
                        <AnimatedButton href="/contact">Get a Free Quote</AnimatedButton>
                    </div>
                </div>
            </div>
            <FeaturesBar />
            <Footer />
        </div>
    );
}
