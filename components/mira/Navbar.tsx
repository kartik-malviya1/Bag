//@ts-nocheck
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { catalogueCategories } from '@/lib/catalogueData';
import Link from 'next/link';

const navLinks = [
    // { label: 'SHOP', path: '/products' },
    { label: 'OUR STORY', path: '/about' },
    { label: 'BLOGS', path: '/blog' },
    { label: 'REVIEWS', path: '#reviews' },
    { label: 'CONTACT', path: '/contact' },
];

function CatalogueDropdown({ onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-background border border-border shadow-xl z-50"
        >
            {catalogueCategories.map((cat) => (
                <Link
                    key={cat.id}
                    href={cat.path}
                    onClick={onClose}
                    className="flex items-center gap-3 px-5 py-3.5 text-xs tracking-[0.1em] font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors duration-200 border-b border-border last:border-b-0"
                >
                    <div className="w-8 h-8 overflow-hidden flex-shrink-0">
                        <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
                    </div>
                    {cat.label}
                </Link>
            ))}
        </motion.div>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [catalogueOpen, setCatalogueOpen] = useState(false);
    const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setCatalogueOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-[120rem] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
                    <Link href="/" className="font-heading text-lg md:text-xl tracking-[0.2em] font-semibold text-foreground leading-tight">
                        <span className="block">CORPORATE</span>
                        <span className="block text-xs tracking-[0.35em] font-normal text-muted-foreground">UNIFORM BY B.A.G</span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.path}
                                className="text-xs tracking-[0.15em] font-medium text-foreground/70 hover:text-foreground transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Catalogue dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setCatalogueOpen(!catalogueOpen)}
                                className="flex items-center gap-1.5 text-xs tracking-[0.15em] font-medium text-foreground/70 hover:text-foreground transition-colors duration-300"
                            >
                                CATALOGUE
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${catalogueOpen ? 'rotate-180' : ''}`} strokeWidth={2} />
                            </button>
                            <AnimatePresence>
                                {catalogueOpen && <CatalogueDropdown onClose={() => setCatalogueOpen(false)} />}
                            </AnimatePresence>
                        </div>
                    </nav>

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="w-10 h-10 flex items-center justify-center text-foreground hover:text-foreground/70 transition-colors"
                    >
                        <Menu className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                </div>
            </header>

            {/* Mobile fullscreen menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-foreground flex flex-col overflow-y-auto"
                    >
                        <div className="max-w-[120rem] mx-auto px-6 md:px-12 flex items-center justify-between h-20 w-full flex-shrink-0">
                            <span className="font-heading text-lg tracking-[0.2em] font-semibold text-primary-foreground leading-tight">
                                <span className="block">CORPORATE</span>
                                <span className="block text-xs tracking-[0.3em] font-normal text-primary-foreground/50">UNIFORM BY B.A.G</span>
                            </span>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-10 h-10 flex items-center justify-center text-primary-foreground hover:text-primary-foreground/70 transition-colors"
                            >
                                <X className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-start px-6 md:px-12 max-w-[120rem] mx-auto w-full pb-12">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                                >
                                    <Link
                                        href={link.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-4 md:py-5 border-b border-primary-foreground/10 group"
                                    >
                                        <span className="font-heading text-2xl md:text-4xl font-medium text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300">
                                            {link.label}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile Catalogue accordion */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.06, duration: 0.5, ease: 'easeOut' }}
                            >
                                <button
                                    onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
                                    className="w-full flex items-center justify-between py-4 md:py-5 border-b border-primary-foreground/10"
                                >
                                    <span className="font-heading text-2xl md:text-4xl font-medium text-primary-foreground/80">
                                        CATALOGUE
                                    </span>
                                    <ChevronDown className={`w-6 h-6 text-primary-foreground/60 transition-transform ${mobileAccordionOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                                </button>
                                <AnimatePresence>
                                    {mobileAccordionOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            {catalogueCategories.map((cat) => (
                                                <Link
                                                    key={cat.id}
                                                    href={cat.path}
                                                    onClick={() => setMenuOpen(false)}
                                                    className="block py-3 pl-4 text-sm tracking-[0.1em] text-primary-foreground/60 hover:text-primary-foreground transition-colors border-b border-primary-foreground/5"
                                                >
                                                    {cat.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
