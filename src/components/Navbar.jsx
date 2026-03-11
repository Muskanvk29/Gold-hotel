import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <div className="navbar__logo" onClick={() => scrollTo('home')}>
          <span className="navbar__logo-icon">✦</span>
          <span className="navbar__logo-text">Gold Hotel</span>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {['home', 'about', 'rooms', 'contact'].map((item) => (
            <li key={item}>
              <button className="navbar__link" onClick={() => scrollTo(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
          <li>
            <button className="navbar__cta" onClick={() => scrollTo('rooms')}>
              Book Now
            </button>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
