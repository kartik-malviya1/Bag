//@ts-nocheck
import React from 'react';
import Navbar from '@/components/mira/Navbar';
import Hero from '@/components/mira/Hero';
import CategoryGrid from '@/components/mira/CategoryGrid';
import FeaturedProducts from '@/components/mira/FeaturedProducts';
import QualitySection from '@/components/mira/QualitySection';
import VisionSection from '@/components/mira/VisionSection';
import SustainableBanner from '@/components/mira/SustainableBanner';
import LatestProducts from '@/components/mira/LatestProducts';
import FeaturesBar from '@/components/mira/FeaturesBar';
import StoreLocator from '@/components/mira/StoreLocator';
import Marquee from '@/components/mira/Marquee';
import Newsletter from '@/components/mira/Newsletter';
import Footer from '@/components/mira/Footer';
import Reviews from './reviews/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <QualitySection />
      <Marquee />
      <VisionSection />
      <SustainableBanner />
      <LatestProducts />
      <FeaturesBar />
      <Reviews />
      <StoreLocator />
      <Newsletter />
      <Footer />
    </div>
  );
}
