import React from 'react';

import { AboutUs, Chef, FindUs, Footer, GridGallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <div className='App'>
      <Header />
      <AboutUs />
      <SpecialMenu />
      {/* <Laurels /> */}
      <GridGallery />
      <FindUs />
      <Footer />
    </div>
  </div>
);

export default App;
