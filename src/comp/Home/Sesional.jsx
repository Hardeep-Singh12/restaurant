import  { useState } from 'react'
import style from './Sesional.module.css'

function Sesional() {

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  const seasonalEvents = {
    0: [ // January
      {
        date: '15',
        title: 'Winter Truffle Tasting',
        type: 'special-menu',
        description: 'Five-course tasting featuring black winter truffles',
        price: '$125 per person'
      },
      {
        date: '28',
        title: 'Burns Night Celebration',
        type: 'event',
        description: 'Traditional Scottish dinner with whisky pairings',
        price: '$95 per person'
      }
    ],
    1: [ // February
      {
        date: '14',
        title: "Valentine's Romance Menu",
        type: 'special-menu',
        description: 'Intimate dining experience with aphrodisiac ingredients',
        price: '$150 per couple'
      },
      {
        date: '22',
        title: 'Wine Maker Dinner',
        type: 'event',
        description: 'Meet the vintner behind our featured wines',
        price: '$110 per person'
      }
    ],
    2: [ // March
      {
        date: '17',
        title: 'Spring Awakening Menu',
        type: 'special-menu',
        description: 'Fresh spring vegetables and herbs celebration',
        price: '$85 per person'
      },
      {
        date: '25',
        title: 'Foraging Workshop',
        type: 'event',
        description: 'Learn to identify and cook with wild ingredients',
        price: '$75 per person'
      }
    ],
    3: [ // April
      {
        date: '8',
        title: 'Easter Brunch Spectacular',
        type: 'special-menu',
        description: 'Elevated brunch with seasonal spring flavors',
        price: '$65 per person'
      },
      {
        date: '20',
        title: 'Pasta Making Class',
        type: 'event',
        description: 'Hands-on workshop with our Italian chef',
        price: '$80 per person'
      }
    ],
    4: [ // May
      {
        date: '12',
        title: "Mother's Day Garden Menu",
        type: 'special-menu',
        description: 'Fresh herbs and edible flowers celebration',
        price: '$90 per person'
      }
    ],
    5: [ // June
      {
        date: '21',
        title: 'Summer Solstice Feast',
        type: 'special-menu',
        description: 'Longest day celebration with grilled specialties',
        price: '$100 per person'
      }
    ],
    6: [ // July
      {
        date: '4',
        title: 'Independence BBQ Elevated',
        type: 'event',
        description: 'Gourmet barbecue with craft cocktails',
        price: '$70 per person'
      }
    ],
    7: [ // August
      {
        date: '15',
        title: 'Harvest Preview Dinner',
        type: 'special-menu',
        description: 'Early harvest vegetables and fruits showcase',
        price: '$95 per person'
      }
    ],
    8: [ // September
      {
        date: '22',
        title: 'Autumn Equinox Menu',
        type: 'special-menu',
        description: 'Seasonal transition with warming spices',
        price: '$105 per person'
      }
    ],
    9: [ // October
      {
        date: '31',
        title: 'Halloween Harvest Feast',
        type: 'event',
        description: 'Spooky elegant dinner with seasonal ingredients',
        price: '$85 per person'
      }
    ],
    10: [ // November
      {
        date: '23',
        title: 'Thanksgiving Reimagined',
        type: 'special-menu',
        description: 'Traditional flavors with modern techniques',
        price: '$120 per person'
      }
    ],
    11: [ // December
      {
        date: '24',
        title: 'Christmas Eve Celebration',
        type: 'special-menu',
        description: 'Elegant holiday dinner with festive touches',
        price: '$140 per person'
      },
      {
        date: '31',
        title: "New Year's Eve Gala",
        type: 'event',
        description: 'Five-course dinner with champagne toast',
        price: '$175 per person'
      }
    ]

  };

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  function handleClick(month) {
    setSelectedMonth(month)
  }


  return (
 <div className={style.container}>

      <h1 className={style.heading}>Seasonal Calendar</h1>
       <p className={style.subheading}>Discover our special menus and culinary events throughout the year</p>

      <div className={style.monthsContainer}>
      {months.map((month, index) => (

        <button key={month} onClick={() => handleClick(index)}
          style={{
             margin: "12px",
            color: selectedMonth === index ? 'white' : 'rgb(97, 89, 86)',
            backgroundColor: selectedMonth === index ? 'rgb(248, 79, 17)' : 'transparent',
          }}
        >
          {month}
        </button>
      ))}
           </div>
   

      <h1 style={{ color: 'rgb(248, 79, 17)' }}>{months[selectedMonth]}  Events</h1>
      <p>Special dining experiences and culinary celebrations</p>
      {(seasonalEvents[selectedMonth] || []).map((event, index) => (
        <div key={index} className={style.eventCard}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <h6>{event.price}</h6>
          <button
            className={style.reserveButton}
            onClick={() =>
              alert(`Your table for the "${event.title}" event has been booked. We'll send a receipt to your email.`)
            }
          >
            Reserve
          </button>
        </div>
      ))}
   
      <div className={style.subscribeContainer}>
        <p>Want to be notified about upcoming events and special menus?</p>
        <button className={style.subscribeButton}>Subscribe to Updates</button>
      </div>
    </div>
  )
}

export default Sesional 