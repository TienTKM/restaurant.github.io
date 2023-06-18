import React from 'react';

import './OnlineOrder.css';

const OnlineOrder = () => (
  <div className="online_order_section">
    <h2 className="online_order_title">Online Order</h2>
    <div className="online_order_links">
      <a
        className="online_order_link"
        href="https://www.ubereats.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Uber Eats
      </a>
      <a
        className="online_order_link"
        href="https://www.deliveroo.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Deliveroo
      </a>
      {/* Add more online order links here */}
    </div>
  </div>
);

export default OnlineOrder;
