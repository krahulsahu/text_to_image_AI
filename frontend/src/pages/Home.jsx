import React from 'react'
import Header from '../components/Header';
import Description from '../components/Description';
import Review from '../components/Review';
import GenerateButton from '../components/GenerateButton';

const Home = () => {
  return (
      <div>
          <Header/>
          <Description/>
          <Review />
          <GenerateButton/>
    </div>
  );
}

export default Home
