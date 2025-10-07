import './App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImage from './assets/logo.png'
import footerLogoImage from './assets/footerlogo.png'
import contactImage from './assets/contact.png'
import shapingSpaceImage from './assets/shaping space.png'
import modularKitchenImage from './assets/modularkitchen.png'
import wardrobesImage from './assets/wardrobes1.png'
import turnkeyImage from './assets/turnkey.png'
import paintingImage from './assets/modfur.png'
import materialsImage from './assets/carpentry.png'
import vectorIcon from './assets/vector.png'
// Use new URL to safely import files with spaces in name
const customQuoteImage = new URL('./assets/custom quote.png', import.meta.url).href
import ourServiceImage from './assets/ourservice.png'
import viewAllButtonImage from './assets/viewall.png'
import coreImage from './assets/core.png'
import whyUsIcon from './assets/whyus.png'
import card1Image from './assets/c1.png'
import card2Image from './assets/c2.png'
import card3Image from './assets/c3.png'
import card4Image from './assets/c4.png'

function App() {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)

  const categories = [
    {
      title: "MODULAR KITCHEN",
      description: "Our modular kitchen designs blend style, functionality, and smart space utilization. With sleek layouts, high-quality finishes, and innovative storage solutions, we create kitchens that make cooking and dining a joyful experience. Each design is tailored to your lifestyle, ensuring convenience meets elegance.",
      image: modularKitchenImage
    },
    {
      title: "WARDROBES",
      description: "Maximize your space with our customized wardrobe solutions. From sliding to hinged designs, we offer wardrobes that are both stylish and practical. Crafted with precision and premium materials, our wardrobes enhance organization while adding sophistication to your interiors.",
      image: wardrobesImage
    },
    {
      title: "TURNKEY RENOVATION",
      description: "Transform your home or office with our hassle-free turnkey renovation services. From planning and design to execution and finishing, we manage every detail with care. Our expert team ensures on-time delivery, superior quality, and a smooth renovation journey that brings your vision to life.",
      image: turnkeyImage
    },
    {
      title: "PAINTING",
      description: "Refresh and redefine your spaces with our professional painting services. We use premium paints and expert techniques to deliver flawless finishes, vibrant colors, and long-lasting results. Whether it's a bold new look or subtle elegance, our painting solutions add character and charm to your interiors.",
      image: paintingImage
    },
    {
      title: "MATERIALS",
      description: "We source and provide high-quality materials that form the backbone of every great design. From durable laminates and premium plywood to fittings and finishes, our material selection ensures strength, beauty, and longevity in every project. Quality is at the core of everything we build.",
      image: materialsImage
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const featuredSection = document.querySelector('.featured-products-section')
      if (!featuredSection) return

      const sectionRect = featuredSection.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if the section is in view
      if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
        // Calculate scroll progress within the section
        const sectionTop = sectionRect.top
        const sectionHeight = sectionRect.height

        // Calculate how far we've scrolled into the section
        const scrollIntoSection = Math.max(0, windowHeight - sectionTop)
        const scrollProgress = Math.min(1, scrollIntoSection / (sectionHeight * 0.8)) // 0.8 for smoother transition

        // Map scroll progress to category index
        const categoryIndex = Math.min(
          Math.floor(scrollProgress * categories.length),
          categories.length - 1
        )

        setCurrentCategory(categoryIndex)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial call
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [categories.length])
  return (
    <div className="app">
      {/* Main Header Container */}
      <div className="main-container">
        {/* Navigation Bar */}
        <nav className="navbar pill">
          <div className="nav-item">ABOUT US</div>
          <Link to="/services" className="nav-item nav-item-link">SERVICES</Link>
          <div className="nav-item">PROFILE</div>
          <div className="nav-item">CONTACTS</div>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          {/* Logo Only */}
          <div className="brand-section">
            <div className="logo-container">
              <div className="logo-icon">
                <img src={logoImage} alt="TRUEDO Logo" className="logo-image" />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="tagline-section">
            <h2 className="tagline">
              CRAFTING INTERIORS THAT DEFINE<br />
              MODERN LIVING
            </h2>
          </div>

          {/* Services */}
          <div className="services-section">
            <div className="service-item">MODULAR KITCHENS</div>
            <div className="service-item">HOME INTERIORS</div>
            <div className="service-item">WARDROBES</div>
          </div>
        </div>
      </div>

      {/* Content Below Header */}
      <div className="content-section">
        {/* Left Text Block */}
        <div className="left-content">
          <p className="description-text">
            A creative team crafting interiors that blend beauty and function. From kitchens to full renovations, we design spaces that reflect your lifestyle with elegance and ease.
          </p>
        </div>

        {/* Right Text Block */}
        <div className="right-content">
          <h3 className="right-heading">
            Shaping Spaces &<br />
            <span className="heading-with-image">
              Lifestyles
              <img src={shapingSpaceImage} alt="Shaping Spaces" className="shaping-image" />
            </span>
          </h3>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="featured-products-container">
          <div className="featured-products-card">
            <div className="featured-products-content">
              <div className="featured-products-left">
                <div className="category-indicator">
                  <img src={vectorIcon} alt="Category icon" className="category-vector" />
                  <h2 className="category-title">{categories[currentCategory].title}</h2>
                </div>
                <p className="category-description">
                  {categories[currentCategory].description}
                </p>
                <a className="custom-quote-link" href="mailto:info@truedo.com?subject=Custom%20Quote">
                  <img src={customQuoteImage} alt="Get a custom quote" className="custom-quote-img" />
                </a>
              </div>
              <div className="featured-products-right">
                <div className="product-image-container">
                  {categories.map((category, index) => (
                    <img
                      key={index}
                      src={category.image}
                      alt={category.title}
                      className={`product-image ${index === currentCategory ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-arrow">↑</div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services-section">
        <div className="our-services-container">
          <img src={ourServiceImage} alt="Our Services" className="our-services-image" />
          <button
            className="view-all-overlay"
            onClick={() => setIsServiceModalOpen(true)}
            aria-label="View All Services"
          >
            <img src={viewAllButtonImage} alt="View All" className="view-all-button-img" />
            <img src={coreImage} alt="Core" className="core-hover-image" />
          </button>
        </div>
      </section>

      {/* Service Image Modal */}
      {isServiceModalOpen && (
        <div className="service-modal-overlay" onClick={() => setIsServiceModalOpen(false)}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsServiceModalOpen(false)}>
              ×
            </button>
            <img src={coreImage} alt="Our Services - Full View" className="modal-service-image" />
          </div>
        </div>
      )}

      {/* Why Us Section */}
      <section className="why-us-section">
        <div className="why-us-header">
          <h2 className="why-us-title">
            Why Us
            <img src={whyUsIcon} alt="Why Us Icon" className="why-us-icon" />
          </h2>
          <p className="why-us-description">
            We craft bespoke interiors with premium materials, expert craftsmanship, and end-to-end solutions. Our focus is on elegance, functionality, and creating spaces that truly reflect your lifestyle.
          </p>
        </div>

        <div className="cards-scroll-container">
          <div className="cards-track">
            {/* First set of cards */}
            <div className="card-item">
              <img src={card1Image} alt="Easy EMI" className="card-image" />
            </div>
            <div className="card-item">
              <img src={card2Image} alt="10 Years Warranty" className="card-image" />
            </div>
            <div className="card-item">
              <img src={card3Image} alt="20 Lakh+ Products" className="card-image" />
            </div>
            <div className="card-item">
              <img src={card4Image} alt="Our Service" className="card-image" />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="card-item">
              <img src={card1Image} alt="Easy EMI" className="card-image" />
            </div>
            <div className="card-item">
              <img src={card2Image} alt="10 Years Warranty" className="card-image" />
            </div>
            <div className="card-item">
              <img src={card3Image} alt="20 Lakh+ Products" className="card-image" />
            </div>
            <div className="card-item">
              <img src={card4Image} alt="Our Service" className="card-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action (above footer) */}
      <section className="cta">
        <div className="cta-outline">
          <span className="cta-text">Let’s bring your dream space to life</span>
        </div>
        <a className="cta-button" href="mailto:info@truedo.com?subject=Callback%20Request&body=Please%20call%20me%20back.">Request a Call Back</a>
      </section>

      {/* Footer */}
      <footer className="footer">
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

export default App
