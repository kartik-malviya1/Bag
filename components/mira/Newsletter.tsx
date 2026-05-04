//@ts-nocheck
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8 }}
                        className="aspect-[3/4] max-h-[500px] overflow-hidden"
                    >
                        <img
                            src="https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/09164bfbf_generated_image.png"
                            alt="Corporate uniform consultation"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
                            Ready to Elevate Your Team's Look?
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                            Get a free consultation and quote for your organisation. Subscribe to receive uniform design guides, new catalogue launches, and B2B offers from Corporate Uniforms By B.A.G Group.
                        </p>

                        <div className="flex gap-3 max-w-md">
                            <Input
                                type="email"
                                placeholder="Enter your mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-background border-border h-12 text-sm"
                            />
                            <Button
                                className="h-12 px-6 bg-foreground text-primary-foreground hover:bg-foreground/90 text-xs tracking-[0.1em] uppercase font-medium"
                            >
                                Subscribe
                                <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
