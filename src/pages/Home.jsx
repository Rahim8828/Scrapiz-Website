import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ImpactTrustSection from '@/components/ImpactTrustSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import AppPromotionSection from '@/components/AppPromotionSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import CoverageAreaSection from '@/components/CoverageAreaSection';
import GreenImpactSection from '@/components/GreenImpactSection';
import ScrapCategoriesSection from '@/components/ScrapCategoriesSection';
import PriceEstimatorSection from '@/components/PriceEstimatorSection';

const Home = ({ openModal }) => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Scrapiz",
    "url": "https://www.scrapiz.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.scrapiz.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Scrapiz GreenTech Pvt. Ltd.",
    "image": "https://www.scrapiz.in/scrapiz-facility.webp",
    "@id": "https://www.scrapiz.in",
    "url": "https://www.scrapiz.in",
    "telephone": "+91-8828700630",
    "email": "support@scrapiz.in",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 08, A K Compound, Jogeshwari West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400102",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.1388,
      "longitude": 72.8517
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/scrapiz",
      "https://www.instagram.com/scrapiz.in/",
      "https://www.linkedin.com/company/scrapiz/",
      "https://twitter.com/scrapiz"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Mumbai"
      }
    ],
    "serviceType": "Scrap Collection and Recycling Services",
    "description": "Scrapiz provides doorstep scrap collection services in Mumbai. We buy all types of scrap including metal, plastic, paper, e-waste at best market rates with instant payment."
  };

  return (
    <>
      <Helmet>
        <title>Scrapiz - Sell Your Scrap Online Easily | Best Rates & Instant Pickup</title>
        <meta name="description" content="Sell your scrap online with Scrapiz. Get instant pickup, best rates, and hassle-free process. Metal, plastic, e-waste, paper scrap - we buy everything at competitive prices." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scrapiz.in/" />
        <meta property="og:title" content="Scrapiz - Sell Your Scrap Online Easily | Best Rates & Instant Pickup" />
        <meta property="og:description" content="Sell your scrap online with Scrapiz. Get instant pickup, best rates, and hassle-free process. Metal, plastic, e-waste, paper scrap - we buy everything at competitive prices." />
        <meta property="og:image" content="https://www.scrapiz.in/scrapiz-facility.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Scrapiz" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@scrapiz" />
        <meta name="twitter:title" content="Scrapiz - Sell Your Scrap Online Easily | Best Rates & Instant Pickup" />
        <meta name="twitter:description" content="Sell your scrap online with Scrapiz. Get instant pickup, best rates, and hassle-free process. Metal, plastic, e-waste, paper scrap - we buy everything at competitive prices." />
        <meta name="twitter:image" content="https://www.scrapiz.in/scrapiz-facility.webp" />
        <meta name="twitter:creator" content="@scrapiz" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="scrap selling, online scrap, metal scrap, plastic scrap, e-waste, paper scrap, scrap collection, recycling, best scrap rates, Mumbai scrap buyer, doorstep scrap pickup" />
        <meta name="author" content="Scrapiz GreenTech Pvt. Ltd." />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        <link rel="canonical" href="https://www.scrapiz.in/" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <main className="overflow-x-hidden">
        <HeroSection />
        <ScrapCategoriesSection />
        <HowItWorksSection />
        <PriceEstimatorSection />
        <ServicesSection />
        <TestimonialsSection />
        <ImpactTrustSection />
        <WhyChooseSection />
        <AppPromotionSection />
        <GreenImpactSection />
        <FAQSection />
        <CTASection openModal={openModal} />
      </main>
    </>
  );
};

export default Home;
