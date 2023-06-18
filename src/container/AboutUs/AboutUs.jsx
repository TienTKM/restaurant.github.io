import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="G_overlay" /> */}
    </div>

    <div className="app__aboutus-content flex__center">
      
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.aboutus} alt="about_us" />
      </div>

      <div className="app__aboutus-content_about">
        <h1 className="p__beautiful" style={{ fontSize:'65px', textAlign:'left'}}>Bottom Text</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button" style={{fontFamily:'Beautiful Day, sans-serif', fontSize:'25px'}}>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
