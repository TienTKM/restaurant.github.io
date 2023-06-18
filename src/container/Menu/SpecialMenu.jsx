import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMouseEnter = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleMouseLeave = () => {
    setSelectedMenuItem(null);
  };

  return (
    <div className="special-menu" id="menu">
      <div className="p__beautiful" style={{ fontSize: '75px', textAlign: 'center', marginBottom: '2rem' }}>
        Explore our menu~
      </div>
      <div className="special-menu__menu-img">
        <img src={images.menu2} alt="Menu 2" />
        {data.menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="hover-area"
            style={{ left: `${menuItem.position.x}%`, top: `${menuItem.position.y}%` }}
            onMouseEnter={() => handleMouseEnter(menuItem)}
            onMouseLeave={handleMouseLeave}
          >
            {selectedMenuItem === menuItem && (
              <div className="dropdown">
                <div className="menu-item">
                  <MenuItem
                    title={menuItem.name}
                    price={menuItem.price}
                    tags={menuItem.description}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 15, display: 'flex', justifyContent: 'center' }}>
        <button type="button" className="custom__button" style={{ fontFamily: 'Avenir Next Cyr, sans-serif' }}>
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;

        {/* {showOverlay && (
          <div className="overlay">
            {data.menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(menuItem)}
            onMouseLeave={handleMouseLeave}
          >
            <MenuItem
              title={menuItem.name}
              price={menuItem.price}
              tags={menuItem.description}
            />
          </div>
        ))}
          </div>
        )} */}