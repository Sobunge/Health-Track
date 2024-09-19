import React from 'react';
import IndexAppBar from '../components/IndexAppBar';
import Footer from '../components/Footer';
import HeroComponent from '../components/HeroComponent';
import FeaturesOverview from '../components/FeaturesOverview';
import HowItWorks from '../components/HowItWorks';
import SuccessStories from '../components/SuccessStories';
import CTABanner from '../components/CTABanner';

function Index() {

  return (
    <div>
      <IndexAppBar />
        <HeroComponent />
        <FeaturesOverview />
        <HowItWorks />
        <SuccessStories />
        <CTABanner />
      <Footer footerColor='white'/>
    </div>
  );
}

export default Index;
