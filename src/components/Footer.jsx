function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__top container">

        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">✦</span>
            <span>Hotel Gold</span>
          </div>
          <p className="footer__tagline">
            Where luxury meets legacy.<br />
            Your story begins here.
          </p>
          <div className="footer__socials">
            {['F', 'I', 'T', 'L'].map((s) => (
              <a key={s} href="#" className="footer__social">{s}</a>
            ))}
          </div>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Navigation</h4>
          <ul>
            {['home', 'about', 'rooms', 'contact'].map((item) => (
              <li key={item}>
                <button className="footer__nav-link" onClick={() => scrollTo(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Services</h4>
          <ul>
            {['Fine Dining', 'Spa & Wellness', 'Concierge', 'Event Halls', 'Airport Transfer'].map((s) => (
              <li key={s}><span className="footer__nav-link">{s}</span></li>
            ))}
          </ul>
        </div>

        <div className="footer__newsletter">
          <h4 className="footer__nav-title">Newsletter</h4>
          <p>Subscribe for exclusive offers and updates.</p>
          <div className="footer__newsletter-form">
            <input type="email" placeholder="Your email" />
            <button className="btn--gold-sm">✦</button>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="footer__divider-line" />
        <p>© 2026 Hotel Gold. All Rights Reserved.</p>
        <p className="footer__credits">Crafted with elegance</p>
      </div>
    </footer>
  )
}

export default Footer
