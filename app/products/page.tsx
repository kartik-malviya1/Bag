//@ts-nocheck
'use client';

import React from 'react';
import Navbar from '@/components/mira/Navbar';
import Footer from '@/components/mira/Footer';
import ProductCard from '@/components/mira/ProductCard';
import SectionHeader from '@/components/mira/SectionHeader';
import { motion } from 'framer-motion';

const allProducts = [
    { name: 'Vanguard Performance Shirt', price: 890.00, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/eef6bda67_generated_bfcacfc5.png' },
    { name: 'Trekker Expandable Travel Tote', price: 460.30, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/3f4f83ab9_generated_34037b78.png' },
    { name: 'Phoenix Leather Zip Wallet', price: 330.90, originalPrice: 550.00, sale: true, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/4b75ba7de_generated_092fcae1.png' },
    { name: 'High-Waisted Summer Shorts', price: 650.70, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/ee17dd692_generated_b1a75794.png' },
    { name: 'Summit Merino Wool Sweater', price: 630.00, originalPrice: 780.00, sale: true, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/4ca318d16_generated_17d26994.png' },
    { name: 'Jetsetter Rolling Duffel Bag', price: 956.40, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d0d656c96_generated_506de9a3.png' },
    { name: 'Ember Embroidered Scarf', price: 280.00, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/ad3ad5eb0_generated_bb84c737.png' },
    { name: 'Jade Jacquard Midi Skirt', price: 490.30, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d91c50705_generated_f3d216c3.png' },
    { name: 'Heritage Wool Blend Blazer', price: 510.00, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/f695e18f0_generated_f8817664.png' },
    { name: 'Explorer Expandable Suitcase', price: 450.20, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/f2dd2a5f2_generated_b494ddf2.png' },
    { name: 'Aurora Crystal Hair Pins', price: 890.00, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/9a9a99705_generated_66d73cb6.png' },
    { name: 'Classic Chloe Denim Jeans', price: 460.30, image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/fe01149fc_generated_5da887f1.png' },
];

export default function Products() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-16 md:pb-24">
                <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-16"
                    >
                        <SectionHeader subtitle="All Uniforms" title="Full Product Catalogue" />
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {allProducts.map((product, i) => (
                            <ProductCard key={product.name} product={product} index={i} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
