import React from 'react';
import Sections from './Sections';
import VideoSection from './VideoSection';
import Header from './Header'
import Footer from './Footer'

const Explore = () => (
    <>
    <Header/>
  <div className="max-w-screen-xlg mx-auto p-2">

    {/* <Sections /> */}
    <VideoSection />
  </div>
  <Footer />
  </>
);

export default Explore;