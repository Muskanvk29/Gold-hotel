import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">

        {/* Left - contact info */}
        <div className="contact__info">
          <p className="section-label section-label--light">Get In Touch</p>
          <h2 className="contact__heading">Contact Gold Hotel</h2>
          <div className="about__divider" />
          <p className="contact__info-text">
            We'd love to hear from you. Whether you're planning a stay or have a
            question, our team is here 24/7 to assist.
          </p>

          <div className="contact__details">
            {[
              { icon: '📍', label: 'Address', value: '12 Royal Avenue, Mumbai, India' },
              { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
              { icon: '✉️', label: 'Email', value: 'stay@goldhotel.com' },
            ].map(({ icon, label, value }) => (
              <div className="contact__detail" key={label}>
                <span className="contact__detail-icon">{icon}</span>
                <div>
                  <span className="contact__detail-label">{label}</span>
                  <span className="contact__detail-value">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - form */}
        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">✦</span>
              <h3>Message Received!</h3>
              <p>Our concierge team will reach out to you shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell us about your stay requirements..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn--gold btn--full">
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default Contact
