//@ts-nocheck
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
        >
            <Link href="/products" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.sale && (
                        <div className="absolute top-4 left-4 bg-foreground text-primary-foreground text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium">
                            Sale
                        </div>
                    )}
                </div>
                <h3 className="font-body text-sm font-medium tracking-wide mb-2 group-hover:text-muted-foreground transition-colors duration-300">
                    {product.name}
                </h3>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">
                        $ {product.price.toFixed(2)} USD
                    </span>
                    {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                            $ {product.originalPrice.toFixed(2)} USD
                        </span>
                    )}
                </div>
            </Link>
        </motion.div>
    );
}
