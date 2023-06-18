import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const backgroundImages = [
    images.restaurantBG,
    images.vnfood1,
    images.vnfood2
  ];

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app_header_info">
        <h1 className="p__beautiful"  style={{ fontSize: '75px' }} >Insert Title Here</h1>
        <p className="p__avenirnext" style={{ margin: '2rem 0', fontSize: '20px' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type="button" className="custom__button" style={{ fontFamily:'Beautiful Day, sans-serif', fontSize:'25px'}}>Explore Menu</button>
      </div>
  
      <div className="header_image">
        <Slider dots={true} infinite={true} autoplay={true} autoplaySpeed={5000} slidesToShow={1} slidesToScroll={1}>
          {backgroundImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt="Slider" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
