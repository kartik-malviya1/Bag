//@ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader';

const offices = [
    {
        city: 'Bhopal — Head Office',
        address: 'M.P. Nagar, Near Vespa Showroom, Bhopal, Madhya Pradesh, India',
        email: 'info@corporateuniformm.com',
        phone: '+91 98765 43210',
        hours: 'Monday - Saturday 10:00 AM - 7:00 PM',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/da65fda68_generated_image.png',
    },
    {
        city: 'Hospitality Division',
        address: 'Serving hotels, restaurants & spas across Central India',
        email: 'hospitality@corporateuniformm.com',
        phone: '+91 98765 43211',
        hours: 'Monday - Saturday 10:00 AM - 7:00 PM',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/6d8286f36_generated_image.png',
    },
    {
        city: 'Healthcare Division',
        address: 'Customised uniform solutions for hospitals & clinics nationwide',
        email: 'healthcare@corporateuniformm.com',
        phone: '+91 98765 43212',
        hours: 'Monday - Saturday 10:00 AM - 7:00 PM',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/d4b1b1b5c_generated_image.png',
    },
    {
        city: 'Industrial Division',
        address: 'Safety and industrial workwear for factories & manufacturing units',
        email: 'industrial@corporateuniformm.com',
        phone: '+91 98765 43213',
        hours: 'Monday - Saturday 10:00 AM - 7:00 PM',
        image: 'https://media.base44.com/images/public/69f8ca90c257810149d2b4e6/709d5d509_generated_image.png',
    },
];

function OfficeCard({ store, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-border bg-card"
        >
            <div className="aspect-[16/9] overflow-hidden">
                <img src={store.image} alt={store.city} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-8">
                <h4 className="font-heading text-xl font-medium mb-5">{store.city}</h4>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-sm text-muted-foreground">{store.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
                        <a href={`mailto:${store.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            {store.email}
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
                        <a href={`tel:${store.phone}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            {store.phone}
                        </a>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground mt-5 pt-5 border-t border-border">{store.hours}</p>
            </div>
        </motion.div>
    );
}

export default function StoreLocator() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                <SectionHeader subtitle="Find us" title="Our Divisions" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offices.map((store, i) => (
                        <OfficeCard key={store.city} store={store} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
