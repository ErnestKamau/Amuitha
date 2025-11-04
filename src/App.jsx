import './App.css'

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            <i className="bi bi-heart-pulse-fill brand-icon me-2"></i>
            AMUITHA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item ms-3">
                <a href="#contact" className="btn btn-gradient btn-sm">Get In Touch</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>

      {/* Main Content */}
      <main>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background-overlay"></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-12 text-center">
              <div className="hero-badge mb-4">
                <i className="bi bi-star-fill me-2"></i>
                Trusted Healthcare & Beauty Solutions
              </div>
              <h1 className="hero-heading mb-4">
                <span className="text-white">Where Health</span>{' '}
                <span className="gradient-text">Meets Beauty</span>
              </h1>
              <p className="hero-tagline text-white mb-4">
                Confidence Starts With Care
              </p>
              <p className="hero-description text-white mb-5">
                Empowering healthy & confident living through trusted health and beauty products
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
                <a href="#services" className="btn btn-gradient btn-lg">
                  Explore Our Services
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg">
                  Contact Us
                </a>
              </div>
              
              {/* Stats Section */}
              <div className="row g-4 stats-section">
                <div className="col-6 col-md-3">
                  <div className="stat-card">
                    <i className="bi bi-person-fill stat-icon mb-2"></i>
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card">
                    <i className="bi bi-shield-check stat-icon mb-2"></i>
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Quality Assured</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card">
                    <i className="bi bi-shield-check-fill stat-icon mb-2"></i>
                    <div className="stat-number">5★</div>
                    <div className="stat-label">Trusted Brand</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-card">
                    <i className="bi bi-heart-fill stat-icon mb-2"></i>
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Years of Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="bi bi-mouse"></i>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <div className="section-badge mb-3">Our Services</div>
              <h2 className="display-4 fw-bold mb-4">Comprehensive Care Solutions</h2>
              <p className="lead text-muted">
                From home nursing to beauty products, we provide holistic solutions for your health and confidence
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="service-card-large">
                <div className="service-card-image service-card-image-1"></div>
                <div className="service-card-overlay">
                  <div className="service-card-icon">
                    <i className="bi bi-heart-pulse-fill"></i>
                  </div>
                  <h3 className="service-card-title">Home-Based Nursing & Rehabilitation</h3>
                  <p className="service-card-description">
                    Professional medical care in the comfort of your home. Our qualified nurses provide personalized rehabilitation and recovery support.
                  </p>
                  <div className="service-feature">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    24/7 Home Care
                  </div>
                  <div className="service-feature">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Post-Surgery Recovery
                  </div>
                  <div className="service-feature">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Elderly Care
                  </div>
                  <div className="service-feature">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Physical Therapy
                  </div>
                  <a href="#contact" className="btn btn-light mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-card-small mb-4">
                <div className="service-card-image service-card-image-2"></div>
                <div className="service-card-overlay-small">
                  <div className="service-card-icon-small">
                    <i className="bi bi-capsule"></i>
                  </div>
                  <h4 className="service-card-title-small">Medical & Nutritional Supplements</h4>
                  <p className="service-card-description-small">
                    Premium quality supplements for optimal health and wellness.
                  </p>
                  <a href="#contact" className="btn btn-dark btn-sm">
                    View Products
                  </a>
                </div>
              </div>
              <div className="service-card-small">
                <div className="service-card-image service-card-image-3"></div>
                <div className="service-card-overlay-beauty">
                  <div className="service-card-icon-beauty">
                    <i className="bi bi-emoji-smile"></i>
                  </div>
                  <h4 className="service-card-title-beauty">Beauty & Wellness Products</h4>
                  <p className="service-card-description-beauty">
                    Premium wigs, skincare, and beauty essentials to boost your confidence.
                  </p>
                  <a href="#contact" className="btn btn-dark btn-sm">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="why-us" className="testimonials-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-4 fw-bold mb-4 text-dark">Why Families in Meru Trust Us</h2>
              <p className="lead text-muted mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
                At Meru Home-Based Nursing Care, we deliver compassionate, professional, and culturally sensitive care for adults, seniors, and children across Meru County. Every service we offer is designed to bring comfort, dignity, and peace of mind to your family.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-info-card">
                <div className="service-info-icon service-info-icon-teal mb-3">
                  <i className="bi bi-heart-pulse-fill"></i>
                </div>
                <h4 className="service-info-title">Home Health Care</h4>
                <p className="service-info-description">
                  Rehabilitative and therapeutic support after illness, injury, or hospital stay, all from the comfort of home.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-info-card">
                <div className="service-info-icon service-info-icon-blue mb-3">
                  <i className="bi bi-person-hearts"></i>
                </div>
                <h4 className="service-info-title">Personal Care & Companionship</h4>
                <p className="service-info-description">
                  Gentle assistance with grooming, meals, mobility, and daily living, offered with kindness and respect.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-info-card">
                <div className="service-info-icon service-info-icon-purple mb-3">
                  <i className="bi bi-house-heart-fill"></i>
                </div>
                <h4 className="service-info-title">Private Duty Nursing</h4>
                <p className="service-info-description">
                  Dedicated nursing care for adults and seniors living with chronic illnesses, disabilities, or recovery needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-badge-teal mb-3">About Amuitha</div>
              <h2 className="display-4 fw-bold mb-4">Your Partner in Health & Beauty</h2>
              
              <div className="about-item mb-4">
                <div className="about-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="about-content">
                  <h4 className="fw-bold mb-2">Our Mission</h4>
                  <p className="text-muted">
                    Empowering healthy & confident living through trusted health and beauty products
                  </p>
                </div>
              </div>

              <div className="about-item mb-4">
                <div className="about-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="about-content">
                  <h4 className="fw-bold mb-2">Our Vision</h4>
                  <p className="text-muted">
                    To become the most trusted wellness and beauty brand in Meru and beyond
                  </p>
                </div>
              </div>

              <div className="about-item mb-4">
                <div className="about-icon-purple">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="about-content">
                  <h4 className="fw-bold mb-2">Our Promise</h4>
                  <p className="text-muted">
                    Quality products, professional care, and personalized service for every client
                  </p>
                </div>
              </div>

              <a href="#contact" className="btn btn-gradient btn-lg mt-3">
                Book Assessment
                <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="about-image-wrapper">
                <div className="about-image-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-5 contact-info-panel">
              <div className="contact-info-content">
                <div className="section-badge-dark mb-4">Get In Touch</div>
                <h2 className="text-white mb-4">Ready to Start Your Wellness Journey?</h2>
                <p className="text-white mb-5">
                  Contact us today for personalized care and product recommendations
                </p>
                
                <div className="contact-item mb-4">
                  <i className="bi bi-telephone-fill contact-icon"></i>
                  <div>
                    <div className="contact-label text-white">Phone</div>
                    <div className="contact-value text-white-50">+254 XXX XXX XXX</div>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <i className="bi bi-envelope-fill contact-icon"></i>
                  <div>
                    <div className="contact-label text-white">Email</div>
                    <div className="contact-value text-white-50">info@amuithaproducts.com</div>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="bi bi-geo-alt-fill contact-icon"></i>
                  <div>
                    <div className="contact-label text-white">Location</div>
                    <div className="contact-value text-white-50">Meru, Kenya</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 contact-form-panel">
              <div className="contact-form-wrapper">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="contactName" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="contactName" placeholder="John Doe" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactEmail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="contactEmail" placeholder="john@example.com" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="serviceInterest" className="form-label">Service Interest</label>
                    <select className="form-select" id="serviceInterest">
                      <option>Home Nursing Care</option>
                      <option>Rehabilitation</option>
                      <option>Medical Supplements</option>
                      <option>Beauty Products</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="contactMessage" className="form-label">Message</label>
                    <textarea className="form-control" id="contactMessage" rows="5" placeholder="Tell us how we can help you..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn-gradient btn-lg w-100">
                    Send Message
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="footer-brand mb-3">
                <i className="bi bi-heart-pulse-fill footer-icon me-2"></i>
                <strong className="text-white">AMUITHA PRODUCTS</strong>
              </div>
              <p className="text-white-50 mb-2">
                Where health meets beauty. Confidence starts with care.
              </p>
              <p className="text-white-50">
                Empowering healthy & confident living through trusted health and beauty products.
              </p>
            </div>
            <div className="col-lg-2 mb-4 mb-lg-0">
              <h5 className="text-white mb-3">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3 mb-4 mb-lg-0">
              <h5 className="text-white mb-3">Services</h5>
              <ul className="footer-links">
                <li><a href="#services">Home Nursing Care</a></li>
                <li><a href="#services">Rehabilitation</a></li>
                <li><a href="#services">Medical Supplements</a></li>
                <li><a href="#services">Beauty Products</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="text-white-50 mb-0">
                Made with ❤️ in Meru
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="text-white-50 text-center mb-0">
                © 2025 Amuitha Products. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

