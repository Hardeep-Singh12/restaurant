import React, { useState } from 'react';
import './sesional.css';

function Sesional() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const seasonalEvents = {
    0: [
      { date: '15', title: 'Winter Truffle Tasting', type: 'special-menu', description: 'Five-course tasting featuring black winter truffles', price: '$125 per person' },
      { date: '28', title: 'Burns Night Celebration', type: 'event', description: 'Traditional Scottish dinner with whisky pairings', price: '$95 per person' }
    ],
    1: [
      { date: '14', title: "Valentine's Romance Menu", type: 'special-menu', description: 'Intimate dining experience with aphrodisiac ingredients', price: '$150 per couple' },
      { date: '22', title: 'Wine Maker Dinner', type: 'event', description: 'Meet the vintner behind our featured wines', price: '$110 per person' }
    ],
    2: [
      { date: '17', title: 'Spring Awakening Menu', type: 'special-menu', description: 'Fresh spring vegetables and herbs celebration', price: '$85 per person' },
      { date: '25', title: 'Foraging Workshop', type: 'event', description: 'Learn to identify and cook with wild ingredients', price: '$75 per person' }
    ],
    3: [
      { date: '8', title: 'Easter Brunch Spectacular', type: 'special-menu', description: 'Elevated brunch with seasonal spring flavors', price: '$65 per person' },
      { date: '20', title: 'Pasta Making Class', type: 'event', description: 'Hands-on workshop with our Italian chef', price: '$80 per person' }
    ],
    4: [
      { date: '12', title: "Mother's Day Garden Menu", type: 'special-menu', description: 'Fresh herbs and edible flowers celebration', price: '$90 per person' }
    ],
    5: [
      { date: '21', title: 'Summer Solstice Feast', type: 'special-menu', description: 'Longest day celebration with grilled specialties', price: '$100 per person' }
    ],
    6: [
      { date: '4', title: 'Independence BBQ Elevated', type: 'event', description: 'Gourmet barbecue with craft cocktails', price: '$70 per person' }
    ],
    7: [
      { date: '15', title: 'Harvest Preview Dinner', type: 'special-menu', description: 'Early harvest vegetables and fruits showcase', price: '$95 per person' }
    ],
    8: [
      { date: '22', title: 'Autumn Equinox Menu', type: 'special-menu', description: 'Seasonal transition with warming spices', price: '$105 per person' }
    ],
    9: [
      { date: '31', title: 'Halloween Harvest Feast', type: 'event', description: 'Spooky elegant dinner with seasonal ingredients', price: '$85 per person' }
    ],
    10: [
      { date: '23', title: 'Thanksgiving Reimagined', type: 'special-menu', description: 'Traditional flavors with modern techniques', price: '$120 per person' }
    ],
    11: [
      { date: '24', title: 'Christmas Eve Celebration', type: 'special-menu', description: 'Elegant holiday dinner with festive touches', price: '$140 per person' },
      { date: '31', title: "New Year's Eve Gala", type: 'event', description: 'Five-course dinner with champagne toast', price: '$175 per person' }
    ]
  };

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  function handleClick(month) {
    setSelectedMonth(month);
  }

  return (
    <div className="sesional-container">
      <h1 className="sesional-title">Seasonal Calendar</h1>
      <p className="sesional-subtitle">Discover our special menus and culinary events throughout the year</p>

      <div className="month-buttons">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => handleClick(index)}
            className={`month-button ${selectedMonth === index ? 'active' : ''}`}
          >
            {month}
          </button>
        ))}
      </div>

      <h2 className="event-heading">{months[selectedMonth]} Events</h2>
      <p className="event-subheading">Special dining experiences and culinary celebrations</p>

      {(seasonalEvents[selectedMonth] || []).map((event, index) => (
        <div key={index} className="event-card">
          <span>
            <span className="event-date">{event.date}</span>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <h6 className="event-price">{event.price}</h6>
            <button
              className="reserve-button"
              onClick={() => alert(`Your table for the specific ${event.title} event has been booked. We will send you a receipt on your email.`)}
            >
              Reserve
            </button>
          </span>
        </div>
      ))}

      <p className="subscribe-text">Want to be notified about upcoming events and special menus?</p>
      <div className="subscribe-button-wrapper">
        <button className="subscribe-button">
          Subscribe to Updates
        </button>
      </div>
    </div>
  );
}

export default Sesional;
