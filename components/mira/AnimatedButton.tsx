//@ts-nocheck
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AnimatedButton({ children, href = '#', variant = 'dark', className = '' }) {
    const base = 'group relative inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.15em] font-medium uppercase overflow-hidden transition-all duration-500';
    const variants = {
        dark: 'bg-foreground text-primary-foreground hover:bg-foreground/90',
        outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground',
        light: 'bg-primary-foreground text-foreground hover:bg-primary-foreground/90',
    };

    return (
        <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
            <span className="relative z-10">{children}</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
        </Link>
    );
}
