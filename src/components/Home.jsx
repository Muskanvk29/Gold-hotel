import { useEffect, useState } from 'react'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80',
    alt: 'Hotel Lobby',
  },
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
    alt: 'Hotel Pool',
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80',
    alt: 'Hotel Room',
  },
  {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80',
    alt: 'Hotel Entrance',
  },
]

function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="home">

      {/* Background sliding images */}
      <div className="home__slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`home__slide ${i === current ? 'home__slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.url})` }}
          />
        ))}
        <div className="home__overlay" />
      </div>

      {/* Center text content */}
      <div className="home__content">
        <p className="home__eyebrow">✦ &nbsp; Premier Luxury Experience &nbsp; ✦</p>
        <h1 className="home__heading">
          Welcome to<br />
          <span className="home__heading-gold">Gold Hotel</span>
        </h1>
        <p className="home__sub">Experience comfort and luxury</p>
        <button className="btn btn--gold" onClick={scrollToRooms}>
          Explore Rooms &nbsp; →
        </button>
      </div>

      {/* Dot indicators at bottom */}
      <div className="home__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`home__dot ${i === current ? 'home__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {/* Scroll hint on right side */}
      <div className="home__scroll-hint">
        <span>Scroll</span>
        <div className="home__scroll-line" />
      </div>

    </section>
  )
}

export default Home
