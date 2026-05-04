//@ts-nocheck
import React from 'react';

export default function Marquee() {
    const text = 'CORPORATE UNIFORMS — B.A.G GROUP — BHOPAL — CUSTOM WORKWEAR — HOSPITALITY — HEALTHCARE — INDUSTRIAL — PREMIUM — ';
    return (
        <div className="overflow-hidden py-6 border-y border-border bg-background">
            <div className="flex animate-marquee whitespace-nowrap">
                {Array(4).fill(null).map((_, i) => (
                    <span
                        key={i}
                        className="text-6xl md:text-8xl font-heading font-medium text-foreground/5 mx-4 select-none"
                    >
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
}
