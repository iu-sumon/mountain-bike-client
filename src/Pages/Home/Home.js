import React from 'react';
import Achievement from './Achievement';
import Banner from './Banner';
import Brands from './Brands';
import HomeParts from './HomeParts';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeParts></HomeParts>
      <Achievement></Achievement>
      <Brands></Brands>
    </div>
  );
};

export default Home;