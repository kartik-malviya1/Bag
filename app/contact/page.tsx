//@ts-nocheck
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/mira/Navbar';
import Footer from '@/components/mira/Footer';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (field, value) => setForm({ ...form, [field]: value });

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-32 pb-16 md:pb-24">
                <div className="max-w-[120rem] mx-auto px-6 md:px-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
                    >
                        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">Get in Touch</p>
                        <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight mb-6">
                            Contact Us
                        </h1>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Reach out for a free consultation on custom uniform design, bulk orders, or to request a quote for your organisation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="font-heading text-2xl font-medium mb-8">Request a Free Quote</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        className="h-12 bg-transparent border-border text-sm"
                                    />
                                    <Input
                                        type="email"
                                        placeholder="Your Email"
                                        value={form.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="h-12 bg-transparent border-border text-sm"
                                    />
                                </div>
                                <Input
                                    placeholder="Subject"
                                    value={form.subject}
                                    onChange={(e) => handleChange('subject', e.target.value)}
                                    className="h-12 bg-transparent border-border text-sm"
                                />
                                <Textarea
                                    placeholder="Your Message"
                                    value={form.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    className="min-h-[160px] bg-transparent border-border text-sm resize-none"
                                />
                                <Button className="h-12 px-10 bg-foreground text-primary-foreground hover:bg-foreground/90 text-xs tracking-[0.15em] uppercase font-medium">
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h3 className="font-heading text-2xl font-medium mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                {[
                                    { icon: MapPin, label: 'Address', value: 'M.P. Nagar, Near Vespa Showroom, Bhopal, Madhya Pradesh, India' },
                                    { icon: Mail, label: 'Email', value: 'info@corporateuniformm.com' },
                                    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                                    { icon: Clock, label: 'Hours', value: 'Monday - Saturday, 10:00 AM - 7:00 PM' },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center bg-secondary flex-shrink-0">
                                            <item.icon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">{item.label}</p>
                                            <p className="text-sm">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            {/* <div className="mt-10 aspect-[4/3] bg-secondary flex items-center justify-center"> */}
                            {/* <div className="text-center">
                                    <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-3" strokeWidth={1} />
                                    <p className="text-sm text-muted-foreground">Visit us at our flagship store</p>
                                </div> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.022741345544!2d77.43322247463584!3d23.242259508095547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c436c254b7d5f%3A0x73d3fc2e8eb6820b!2sCorporate%20Uniforms%20By%20BAG%20GROUP!5e0!3m2!1sen!2sin!4v1777934011845!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} className=' mt-6' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            {/* </div> */}
                        </motion.div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    );
}
