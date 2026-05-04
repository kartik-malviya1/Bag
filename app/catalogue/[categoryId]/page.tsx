//@ts-nocheck
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/mira/Navbar';
import Footer from '@/components/mira/Footer';
import AnimatedButton from '@/components/mira/AnimatedButton';
import SectionHeader from '@/components/mira/SectionHeader';
import { catalogueCategories } from '@/lib/catalogueData';
import { ArrowRight } from 'lucide-react';

function SubcategoryCard({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
            className="group"
        >
            <Link href="/contact" className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                </div>
                <h3 className="font-body text-sm font-semibold tracking-wide mb-2 group-hover:text-muted-foreground transition-colors duration-300">
                    {item.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                <span className="text-xs tracking-[0.1em] uppercase font-medium flex items-center gap-1.5 text-foreground group-hover:gap-3 transition-all duration-300">
                    Get Quote <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
            </Link>
        </motion.div>
    );
}

export default function CataloguePage() {
    const { categoryId } = useParams();
    const category = catalogueCategories.find((c) => c.id === categoryId);

    if (!category) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <div className="pt-40 pb-24 text-center">
                    <h1 className="font-heading text-3xl">Category not found</h1>
                    <Link href="/" className="text-muted-foreground text-sm mt-4 block hover:text-foreground">Return Home</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <div className="relative pt-20 h-[55vh] min-h-[380px] overflow-hidden">
                <img
                    src={category.image}
                    alt={category.label}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-xs tracking-[0.25em] uppercase text-primary-foreground/70 mb-4"
                    >
                        Catalogue
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground tracking-tight mb-6"
                    >
                        {category.label}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-sm text-primary-foreground/80 max-w-xl leading-relaxed"
                    >
                        {category.description}
                    </motion.p>
                </div>
            </div>

            {/* Other categories nav */}
            <div className="border-b border-border bg-secondary">
                <div className="max-w-[120rem] mx-auto px-6 md:px-12 overflow-x-auto">
                    <div className="flex gap-1 py-2 whitespace-nowrap">
                        {catalogueCategories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={cat.path}
                                className={`px-4 py-2 text-xs tracking-[0.1em] uppercase font-medium transition-colors duration-200 ${cat.id === categoryId
                                        ? 'bg-foreground text-primary-foreground'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subcategories grid */}
            <div className="py-16 md:py-24">
                <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                    <SectionHeader subtitle={category.label} title="Our Products" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mb-16">
                        {category.subcategories.map((item, i) => (
                            <SubcategoryCard key={item.name} item={item} index={i} />
                        ))}
                    </div>

                    {/* CTA section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="border border-border p-10 md:p-16 text-center bg-secondary"
                    >
                        <h3 className="font-heading text-2xl md:text-4xl font-medium mb-4">
                            Need a Custom {category.label} Solution?
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg mx-auto">
                            Corporate Uniforms By B.A.G Group provides end-to-end uniform manufacturing — from design consultation to bulk delivery. Get a free quote for your organisation today.
                        </p>
                        <AnimatedButton href="/contact">Get a Free Quote</AnimatedButton>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
