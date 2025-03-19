import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import CarouselComponent from '../Components/CarouselComponent ';
import Services from '../Components/Services';
import './home.css'

function Home() {
  // Function to show notification about internship registration
  const notify = () => {
    toast.info(
        <div>
            📢 Internship registration is ongoing! Check it out! 
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__V71hO1UQVpMRlRFMU5LQk5TU0RYWDlVOUMxM1hLQS4u" style={{ color: 'blue', textDecoration: 'underline' }}> Register here</a>
        </div>, 
        {
            position: "top-right",
            autoClose: false, // Notification will close after 5 seconds
        }
    );
  };

  // Show notification on component mount
  useEffect(() => {
    // Always show the notification on component mount
    notify();
    // Optionally, you can set a timeout to remove the notification after a certain period
    const timer = setTimeout(() => {
        localStorage.removeItem('hasNotified'); // Remove the flag after a certain time
    }, 5000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div>
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Topbar Start --> */}
        <div className="container-fluid topbar px-0 d-none d-lg-block">
            <div className="container px-0">
                <div className="row gx-0 align-items-center" style={{height: '45px'}}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <a className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                            <a href="mailto:info@fabritech.rw" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.rw</a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex align-items-center justify-content-end">
                            <a href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></a>
                            <a href="https://www.instagram.com/fabritech_ltd/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></a>
                            <a href="https://www.linkedin.com/in/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-linkedin-in text-white"></i></a>
                            <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech.rw!&amp;phone=+250788601280
" className="btn btn-primary btn-square rounded-circle nav-fill me-0">
  <i className="fab fa-whatsapp text-white"></i>
</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}

        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-fluid sticky-top px-0">
            <div className="position-absolute bg-dark" style={{ left: 0, top: 0, width: '100%', height: '100%' }}>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
                    <a href="index.html" className="navbar-brand p-0">
                        {/* <!-- <h1 classNameName="text-primary m-0"><i classNameName="fas fa-donate me-3"></i>Investa</h1> --> */}
                        <img src="img/logoF.jpg.png" alt="Logo" style={{height: '40px'}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <a href="/service" className="nav-item nav-link">Services</a>
                            <a href="/gallery" className="nav-item nav-link">Gallery</a>
                            <a href="/contact" className="nav-item nav-link">Contact</a>
                        </div>
                       
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Carousel Start --> */}
        <CarouselComponent />
        {/* <!-- Carousel End --> */}

        {/* <!-- About Start --> */}
        <div className="container-fluid about bg-light py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="about-img">
                            <img src="img/abt1.jpg" className="img-fluid w-100 rounded-top bg-white" alt="Image" />
                            <img src="img/abt2.jpg" className="img-fluid w-100 rounded-bottom" alt="Image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
                        <h4 className="text-primary">About Us</h4>
                        <h1 className="display-5 mb-4">Innovative Technology & Security Solutions</h1>
                        <p className="text ps-4 mb-4">
                            Fabritech is a leading provider of advanced digital security and IT services. We specialize in network infrastructure, CCTV installation, and customized software solutions designed to secure and optimize your business. With a commitment to delivering the best technology, we ensure your systems are reliable and future-ready.
                        </p>
                        <div className="row g-4 justify-content-between mb-5">
                            <div className="col-lg-6 col-xl-5">
                                <p className="text-dark"><i className="fas fa-check-circle text-primary me-1"></i> Network Infrastructure</p>
                                <p class="text-dark mb-0"><i className="fas fa-check-circle text-primary me-1"></i> CCTV Installation</p>
                            </div>
                            <div className="col-lg-6 col-xl-7">
                                <p className="text-dark"><i className="fas fa-check-circle text-primary me-1"></i> IT Consulting</p>
                                <p className="text-dark mb-0"><i className="fas fa-check-circle text-primary me-1"></i> Software Development</p>
                            </div>
                        </div>
                        
                        <div className="row g-4 text-center align-items-center justify-content-center">
                            <div className="col-sm-4">
                                <div className="bg-primary rounded p-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="counter-value fs-1 fw-bold text-dark" data-toggle="counter-up">50</span>
                                        <h4 className="text-dark fs-1 mb-0" style={{fontWeight: '600', fontSize: '25px'}}>+</h4>
                                    </div>
                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                        <p className="text-white mb-0">Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="bg-dark rounded p-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="counter-value fs-1 fw-bold text-white" data-toggle="counter-up">15</span>
                                        <h4 className="text-white fs-1 mb-0" style={{fontWeight: '600', fontSize: '25px'}}>+</h4>
                                    </div>
                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                        <p className="mb-0">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="bg-primary rounded p-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="counter-value fs-1 fw-bold text-dark" data-toggle="counter-up">15</span>
                                        <h4 className="text-dark fs-1 mb-0" style={{fontWeight: '600', fontSize: '25px'}}>+</h4>
                                    </div>
                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                        <p className="text-white mb-0">Team Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Services Start --> */}
        <div style={{padding: '20px'}}>
            
        </div>
        {/* <!-- Services End --> */}
        {/* <!-- Services Start --> */}
        <Services />
        {/* <!-- Services End --> */}

        {/* <!-- Contact Start --> */}
        <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="contact-item">
              <div className="pb-5">
                <h4 className="text-primary">Contact Us</h4>
                <h1 className="display-4 mb-4">Get In Touch With Us</h1>
                <p className="mb-0">
                  Do you have questions about our services, or are you looking for more information on networking, CCTV installations, Canal+ & DStv subscriptions, internships, or short courses? We are here to help. Reach out to us for expert solutions, and we'll respond as soon as possible. For immediate assistance, give us a call or drop us an email.
                </p>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-4">
                  <i className="fa fa-home text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Addresses</h4>
                  <p className="mb-0">YYUSSA Plaza Kisimenti, Remera</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-2">
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Mobile</h4>
                  <p className="mb-0">+250788601280</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-2">
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Email</h4>
                  <p className="mb-0">fabrice.sugira@fabritech.rw</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <form>
              <div className="row g-3">
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded h-100">
              <iframe
                className="rounded-top w-100"
                style={{ height: '500px', marginBottom: '-6px' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.501118752185!2d30.098000976572315!3d-1.9528280316110447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6fa3f67d331%3A0x82ee40e2e1df794d!2sKG%20220%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1726056048491!5m2!1sen!2srw"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="d-flex align-items-center justify-content-center bg-primary rounded-bottom p-4">
                
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        {/* <!-- Contact End --> */}

        {/* <!-- Footer Start --> */}
        <div className="container-fluid footer py-1 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* First Column - Logo and Description */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                {/* Company logo */}
                                <img src="img/logoF.jpg.png" alt="Company Logo" style={{ width: "150px", height: "auto" }} className="mb-4" />
                                
                                {/* Company description */}
                                <p className="mb-3">
                                    At Fabritech, we are dedicated to providing top-notch IT solutions and services. From networking to surveillance, 
                                    we ensure high standards in every project.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Column - Explore Links */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Explore</h4>
                            <a href="/"><i className="fas fa-angle-right me-2"></i> Home</a>
                            <a href="/service"><i className="fas fa-angle-right me-2"></i> Services</a>
                            <a href="/about"><i className="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="/contact"><i className="fas fa-angle-right me-2"></i> Contact Us</a>
                            <a href="/gallery"><i className="fas fa-angle-right me-2"></i> Gallery</a>
                        </div>
                    </div>

                    {/* Third Column - Contact Info */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <a href="https://maps.app.goo.gl/GMRDwb39xqjckVDD9"><i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza, Kisimenti, Remera</a>
                            <a href="mailto:info@fabritech.rw"><i className="fas fa-envelope me-2"></i> info@fabritech.rw</a>
                            <a href="tel:+250788601280"><i className="fas fa-phone me-2"></i> +250788601280</a>
                            {/* Social media icons */}
                            <div className="d-flex align-items-center">
                                <a className="btn btn-light btn-md-square me-2" href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-md-square me-2" href="https://www.instagram.com/fabritech_ltd/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-light btn-md-square me-2" href="https://www.linkedin.com/in/fabritech_ltd"><i className="fab fa-linkedin-in"></i></a>
                                <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech&amp;phone=+250788601280" className="btn btn-light btn-md-square me-2">
  <i className="fab fa-whatsapp text-white"></i>
</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}

        {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-body">
                            Fabritech, <i className="fas fa-copyright text-light me-2"></i>All rights reserved 2025.
                        </span>
                    </div>
                    <div className="col-md-6 text-center text-md-end mb-md-0">
                        <span className="text-body">
                            Developed by <a href="YOUR_PORTFOLIO_LINK" target="_blank" rel="noopener noreferrer">Maliki NTWALI</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" className="btn btn-primary btn-lg-square back-to-top">
            <i className="fa fa-arrow-up"></i>
        </a>
        {/* <!-- Copyright End --> */}

        {/* Add ToastContainer for notifications */}
        <ToastContainer />
    </div>
  )
}

export default Home
