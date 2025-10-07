import './Services.css'
import { Link } from 'react-router-dom'
import logoImage from './assets/logo.png'
import footerLogoImage from './assets/footerlogo.png'
import contactImage from './assets/contact.png'
import shapingSpaceImage from './assets/shaping space.png'
import bgmImage from './assets/bgm.png'
import s1Image from './assets/s1.png'
import s2Image from './assets/s2.png'
import s3Image from './assets/s3.png'
import s4Image from './assets/s4.png'
import s5Image from './assets/s5.png'
import s6Image from './assets/s6.png'
import s7Image from './assets/s7.png'
import s8Image from './assets/s8.png'
import s9Image from './assets/s9.png'

function Services() {
  const serviceCards = [
    { id: 1, image: s1Image, alt: 'Modular Furniture' },
    { id: 2, image: s2Image, alt: 'Wardrobes' },
    { id: 3, image: s3Image, alt: 'Turnkey Renovation' },
    { id: 4, image: s4Image, alt: 'Carpentry & Woodwork' },
    { id: 5, image: s5Image, alt: 'Windows & Doors' },
    { id: 6, image: s6Image, alt: 'Flooring Solutions' },
    { id: 7, image: s7Image, alt: 'Home Automation & Lighting' },
    { id: 8, image: s8Image, alt: 'Curtains, Blinds & Wallpapers' },
    { id: 9, image: s9Image, alt: 'Additional Services' }
  ]

  return (
    <div className="services-page">
      {/* Navigation Bar Only */}
      <nav className="navbar-header pill">
        <Link to="/" className="nav-item nav-item-link">ABOUT US</Link>
        <Link to="/services" className="nav-item nav-item-link">SERVICES</Link>
        <div className="nav-item">PROFILE</div>
        <div className="nav-item">CONTACTS</div>
      </nav>

      {/* Services Section */}
      <section className="services-content">
        <div className="services-intro">
          <h1 className="services-title">
            Our <img src={shapingSpaceImage} alt="" className="shaping-space-icon" /> Services
          </h1>
          <p className="services-description">
            A creative team crafting interiors that blend beauty and function. From kitchens to full renovations, we design spaces that reflect your lifestyle with elegance and ease.
          </p>
          <a href="mailto:info@truedo.com" className="contact-button-link">
            <img src={contactImage} alt="Contact Us" className="contact-button-image" />
          </a>
        </div>

        <div className="services-grid">
          {serviceCards.map((card) => (
            <div key={card.id} className="service-card">
              <img src={card.image} alt={card.alt} className="service-card-image" />
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="services-cta">
        <div className="cta-outline">
          <span className="cta-text">Let's bring your dream space to life</span>
        </div>
        <a className="cta-button" href="mailto:info@truedo.com?subject=Callback%20Request&body=Please%20call%20me%20back.">
          Request a Call Back
        </a>
      </section>

      {/* Footer */}
      <footer className="services-footer">
        <div className="footer-content">
          {/* Left Section - Branding and Contact */}
          <div className="footer-left">
            <div className="footer-logo-section">
              <div className="footer-logo-container">
                <img src={footerLogoImage} alt="TRUEDO Footer Logo" className="footer-logo" />
              </div>
            </div>

            <div className="footer-address">
              <p className="address-text">594/1, Kodigehalli - Thindlu Main Road, Bengaluru- 560092.</p>
            </div>

            <a className="contact-image-link" href="mailto:info@truedo.com" aria-label="Contact Us">
              <img src={contactImage} alt="Contact Us" className="contact-image" />
            </a>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="footer-right">
            <div className="social-links">
              <a href="#" className="social-link">Instagram <span className="arrow-icon">↗</span></a>
              <a href="#" className="social-link">Facebook <span className="arrow-icon">↗</span></a>
              <a href="#" className="social-link">WhatsApp <span className="arrow-icon">↗</span></a>
              <a href="#" className="social-link">Email <span className="arrow-icon">↗</span></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section - Copyright and Back to Top */}
        <div className="footer-bottom">
          <p className="copyright">Copyright © 2025 Truedo. All rights reserved</p>
          <button className="back-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back To Top
            <span className="arrow-icon">↑</span>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Services

