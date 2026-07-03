import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import CommitmentBand from '../components/sections/CommitmentBand';
import CompanyStory from '../components/sections/CompanyStory';
import Strengths from '../components/sections/Strengths';
import ProcessSection from '../components/sections/ProcessSection';
import WhyChooseZenex from '../components/sections/WhyChooseZenex';
import AwardsCarousel from '../components/sections/AwardsCarousel';
import Testimonials from '../components/sections/Testimonials';
import BlogPreview from '../components/sections/BlogPreview';

const Home = () => (
  <>
    <Hero />
    <ServicesSection />
    <CommitmentBand />
    <CompanyStory />
    <Strengths />
    <ProcessSection />
    <WhyChooseZenex />
    <AwardsCarousel />
    <Testimonials />
    <BlogPreview />
  </>
);

export default Home;
