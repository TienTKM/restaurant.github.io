import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery05,
    images.gallery06,
    images.gallery07,
    images.gallery08,
    images.gallery09,
    images.gallery10,
    images.gallery11,
    images.gallery12
  ];

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="p__beautiful" style={{fontSize:'75px'}}>Photo Gallery</h1>
        <p className="p__avenirnext" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery__image-container">
              <img className="gallery__image" src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button type="button" className="custom__button" style={{fontFamily:'Beautiful Day, sans-serif', fontSize:'25px'}}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
