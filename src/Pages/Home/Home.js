import React from 'react';
import Achievement from './Achievement';
import Banner from './Banner';
import Brands from './Brands';
import Capabilities from './Capabilities';
import HomeParts from './HomeParts';
import HomeReviews from './HomeReviews';
import Summary from './Summary';
import WorkingSection from './WorkingSection';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeParts></HomeParts>
      <Summary></Summary>
      <WorkingSection></WorkingSection>
      <Capabilities></Capabilities>
      <HomeReviews></HomeReviews>
      <Achievement></Achievement>
      <Brands></Brands>
    </div>
  );
};

export default Home;