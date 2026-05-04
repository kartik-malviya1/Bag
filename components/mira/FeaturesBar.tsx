//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Globe, Maximize } from 'lucide-react';

const features = [
    {
        icon: Gem,
        title: 'Custom Design & Branding',
        description: 'Every uniform is custom-designed with your logo, colours, and brand identity embedded in each piece.',
    },
    {
        icon: Globe,
        title: 'Pan-India Delivery',
        description: 'Serving businesses across India — from Bhopal to metros — with reliable bulk supply and repeat orders.',
    },
    {
        icon: Maximize,
        title: 'All Industries Covered',
        description: 'From corporate offices to hospitals, hotels to factories — comprehensive uniform solutions for every sector.',
    },
];

export default function FeaturesBar() {
    return (
        <section className="py-16 md:py-24 border-y border-border">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="text-center"
                        >
                            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-secondary">
                                <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.2} />
                            </div>
                            <h3 className="font-heading text-xl font-medium mb-3">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
