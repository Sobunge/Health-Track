import React from 'react';
import IndexAppBar from '../components/IndexAppBar';
import Footer from '../components/Footer';
import HeroComponent from '../components/HeroComponent';
import FeaturesOverview from '../components/FeaturesOverview';

function Index() {

  return (
    <div>
      <IndexAppBar />
        <HeroComponent />
        <FeaturesOverview />
      <Footer footerColor='white'/>
    </div>
  );
}

export default Index;
