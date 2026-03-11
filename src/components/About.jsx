import { useState, useEffect } from 'react'

const aboutSlides = [
  {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    alt: 'Hotel Lobby',
  },
  {
    url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
    alt: 'Hotel Pool',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    alt: 'Hotel Restaurant',
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    alt: 'Hotel Spa',
  },
]

function About() {
  const [current, setCurrent] = useState(0)

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutSlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="about">
      <div className="about__inner container">

        {/* Left side - sliding images */}
        <div className="about__image-wrap">

          {/* Sliding image */}
          <div className="about__img-slider">
            {aboutSlides.map((slide, i) => (
              <img
                key={i}
                src={slide.url}
                alt={slide.alt}
                className={`about__img ${i === current ? 'about__img--active' : ''}`}
              />
            ))}
          </div>

          {/* Dot indicators */}
          <div className="about__img-dots">
            {aboutSlides.map((_, i) => (
              <button
                key={i}
                className={`about__img-dot ${i === current ? 'about__img-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          {/* Gold badge */}
          <div className="about__image-badge">
            <span className="about__badge-num">25</span>
            <span className="about__badge-text">Years of<br />Excellence</span>
          </div>

        </div>

        {/* Right side - text content */}
        <div className="about__content">
          <p className="about__eyebrow">✦ &nbsp; About Us</p>
          <h2 className="about__heading">About Gold Hotel</h2>
          <div className="about__divider" />
          <p className="about__text">
            Gold Hotel offers luxurious rooms, excellent hospitality, and a relaxing
            atmosphere for travelers and families. Our goal is to provide comfort,
            elegance, and memorable experiences for every guest.
          </p>
          <p className="about__text">
            Nestled in the heart of the city, our hotel blends timeless grandeur
            with modern amenities — ensuring every stay feels like a masterpiece
            of relaxation and indulgence.
          </p>

          <div className="about__stats">
            {[
              { num: '200+', label: 'Luxury Rooms' },
              { num: '50+', label: 'Awards Won' },
              { num: '98%', label: 'Guest Satisfaction' },
            ].map(({ num, label }) => (
              <div className="about__stat" key={label}>
                <span className="about__stat-num">{num}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
