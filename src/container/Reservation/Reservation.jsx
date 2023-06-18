import React from 'react';

import './Reservation.css';

const Reservation = () => (
  <div className="reservation_section">
    <h2 className="reservation_title">Reservation</h2>
    <div className="reservation_form">
      <form>
        <div className="form_group">
          <label htmlFor="customer_name">Customer Name</label>
          <input type="text" id="customer_name" name="customer_name" placeholder="Enter your name" />
        </div>
        <div className="form_group">
          <label htmlFor="customer_email">Email Address</label>
          <input type="email" id="customer_email" name="customer_email" placeholder="Enter your email" />
        </div>
        <div className="form_group">
          <label htmlFor="reservation_date">Date</label>
          <input type="date" id="reservation_date" name="reservation_date" />
        </div>
        <div className="form_group">
          <label htmlFor="reservation_time">Time</label>
          <input type="time" id="reservation_time" name="reservation_time" />
        </div>
        <div className="form_group">
          <label htmlFor="reservation_notes">Additional Notes</label>
          <textarea id="reservation_notes" name="reservation_notes" placeholder="Enter any special requests or additional notes"></textarea>
        </div>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  </div>
);

export default Reservation;
