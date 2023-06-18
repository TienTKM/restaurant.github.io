import React from 'react';

import { images } from '../../constants';

const FindUs = () => (
  <div className='row'>
    <div className="app__bg app__wrapper section__padding" id="contact">
      
        <div className="app__wrapper_info" style={{ textAlign: 'right', alignItems: 'flex-end' }}>
          <h1 className="p__beautiful" style={{ marginBottom: '3rem', fontSize: '75px' }}>Find Us</h1>
          <div className="app__wrapper-content">
            <p className="p__avenirnext">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9</p>
            <p className="p__beautiful" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
            <p className="p__avenirnext">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="p__avenirnext">Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <button type="button" className="custom__button" style={{ marginTop: '2rem', fontFamily:'Beautiful Day, sans-serif', fontSize:'25px' }}>Visit Us</button>
        </div>

        <div className="app__wrapper_img">
          <img src={images.findus} alt="findus_img" />
        </div>
      </div>
      <div id="canvas-for-googlemap" style={{ height: '300px', width: '100%', maxWidth: '100%' }}>
            <iframe
              style={{ height: '100%', width: '100%'}}
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Fleur+de+Riz,+46+Rue+d'Antrain,+35000+Rennes,+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              allowFullScreen
            ></iframe>
          </div>
      
  </div>
);

export default FindUs;
