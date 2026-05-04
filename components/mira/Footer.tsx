//@ts-nocheck
import React from 'react';
import Link from 'next/link';

const footerLinks = {
    'Quick Links': [
        { label: 'Home', path: '/' },
        { label: 'Catalogue', path: '/catalogue/corporate-uniforms' },
        { label: 'Our Story', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ],
    'Catalogue': [
        { label: 'Corporate Uniforms', path: '/catalogue/corporate-uniforms' },
        { label: 'Hospital Uniforms', path: '/catalogue/hospital-uniforms' },
        { label: 'Industrial Uniforms', path: '/catalogue/industrial-uniforms' },
        { label: 'Hotel Uniforms', path: '/catalogue/hotel-uniforms' },
        { label: 'Other Uniforms', path: '/catalogue/other-uniforms' },
    ],
    'Support': [
        { label: 'Get a Quote', path: '/contact' },
        { label: 'Bulk Orders', path: '/contact' },
        { label: 'Size Guide', path: '/contact' },
        { label: 'FAQ', path: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-foreground text-primary-foreground">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <span className="font-heading text-xl tracking-[0.2em] font-semibold block text-primary-foreground">CORPORATE</span>
                            <span className="text-xs tracking-[0.3em] font-normal text-primary-foreground/50 block">UNIFORM BY B.A.G GROUP</span>
                        </div>
                        <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm mb-8">
                            Bhopal-based B2B corporate apparel and uniform design business with a textile legacy dating back to 1978. Custom workwear for hospitality, healthcare, and corporate environments.
                        </p>
                        <div className="flex gap-6">
                            {['Instagram', 'Twitter', 'Facebook', 'Pinterest'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-xs tracking-[0.1em] text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-6 text-primary-foreground/80">
                                {title}
                            </h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.path}
                                            className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-primary-foreground/40">
                        © 2024 Corporate Uniforms By B.A.G Group. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
