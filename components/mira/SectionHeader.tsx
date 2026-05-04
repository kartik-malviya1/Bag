//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SectionHeader({ subtitle, title }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-12 md:mb-16"
        >
            {subtitle && (
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                        {subtitle}
                    </span>
                </div>
            )}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
                {title}
            </h2>
        </motion.div>
    );
}
