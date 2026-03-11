import { useState } from 'react'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Elegant comfort with plush queen bed, city views, rainfall shower, and curated minibar. Perfect for discerning solo travelers or couples.',
    price: '₹3,000',
    tag: 'Most Popular',
    features: ['King Bed', 'City View', 'Free Wi-Fi'],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80',
    ],
  },
  {
    id: 2,
    name: 'Luxury Room',
    description: 'Expansive suite with premium king bed, panoramic skyline vistas, soaking tub, and dedicated butler service for an unrivaled stay.',
    price: '₹5,000',
    tag: 'Best Value',
    features: ['King Bed', 'Panoramic View', 'Butler Service'],
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80',
    ],
  },
  {
    id: 3,
    name: 'Suite Room',
    description: 'Our crown jewel — a two-floor penthouse with private terrace, private pool access, Michelin dining, and the ultimate bespoke experience.',
    price: '₹8,000',
    tag: 'Premium',
    features: ['Private Terrace', 'Pool Access', 'Fine Dining'],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
    ],
  },
]

function RoomCard({ room }) {
  const [current, setCurrent] = useState(0)

  // Go to next image
  function nextImage() {
    setCurrent((prev) => (prev + 1) % room.images.length)
  }

  // Go to previous image
  function prevImage() {
    setCurrent((prev) => (prev - 1 + room.images.length) % room.images.length)
  }

  return (
    <div className="room-card">

      {/* Image slider area */}
      <div className="room-card__img-wrap">
        <img
          src={room.images[current]}
          alt={room.name}
          className="room-card__img"
        />

        {/* Previous button */}
        <button className="room-card__arrow room-card__arrow--left" onClick={prevImage}>
          ‹
        </button>

        {/* Next button */}
        <button className="room-card__arrow room-card__arrow--right" onClick={nextImage}>
          ›
        </button>

        {/* Tag badge */}
        <span className="room-card__tag">{room.tag}</span>

        {/* Dot indicators */}
        <div className="room-card__dots">
          {room.images.map((_, i) => (
            <button
              key={i}
              className={`room-card__dot ${i === current ? 'room-card__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

      </div>

      {/* Card text body */}
      <div className="room-card__body">
        <h3 className="room-card__name">{room.name}</h3>
        <p className="room-card__desc">{room.description}</p>

        <ul className="room-card__features">
          {room.features.map((f) => (
            <li key={f} className="room-card__feature">
              <span className="room-card__feature-dot">✦</span> {f}
            </li>
          ))}
        </ul>

        <div className="room-card__footer">
          <div className="room-card__price">
            <span className="room-card__price-amount">{room.price}</span>
            <span className="room-card__price-unit"> / night</span>
          </div>
          <button className="btn btn--gold-outline">
            Book Now →
          </button>
        </div>
      </div>

    </div>
  )
}

function Rooms() {
  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <p className="section-label">Accommodations</p>
        <h2 className="section-heading">Our Rooms</h2>
        <p className="section-sub">Each space crafted to perfection — where opulence meets serenity.</p>
        <div className="rooms__grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
