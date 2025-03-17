import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import './carousel.css'; // Import your custom CSS for arrows and positioning

const CarouselComponent = () => {
  return (
    <div className="header-carousel">
      <OwlCarousel
        className="owl-theme"
        items={1}
        loop
        autoplay
        autoplayTimeout={5000}
        autoplayHoverPause
        nav
        dots={false}
        smartSpeed={1000}
        navText={['<span class="custom-prev-arrow">‹</span>', '<span class="custom-next-arrow">›</span>']} // Custom arrow text
        animateOut="fadeOut"
        animateIn="fadeIn"
      >
        {/* First Carousel Item */}
        <div className="header-carousel-item">
          <div className="header-carousel-item-img-1">
            <img src="img/carou1.jpg" className="img-fluid w-100" alt="Image" style={{ height: '770px' }} />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-start p-3">
              <h1
                className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.3s"
                style={{ animationDelay: '1.3s' }}
              >
                FabriTech Ltd
              </h1>
              <p
                className="mb-5 fs-5 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{ animationDelay: '1.5s' }}
              >
                Your trusted partner in Networking, Security, and IT Solutions. We’re here to elevate your technology experience.
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{ animationDelay: '1.7s' }}
                href="/about"
              >
                About Us
              </a>
              <a
                className="btn btn-dark rounded-pill py-3 px-5 mb-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{ animationDelay: '1.7s' }}
                href="/service"
              >
                Services
              </a>
            </div>
          </div>
        </div>

        {/* Second Carousel Item */}
        <div className="header-carousel-item mx-auto">
          <div className="header-carousel-item-img-2">
            <img src="img/carou2.jpg" className="img-fluid w-100" alt="Image" style={{ height: '770px' }} />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-start p-3">
              <h1 className="display-1 text-capitalize text-white mb-4">Expert Networking Solutions</h1>
              <p className="mb-5 fs-5">
                Seamless, secure, and scalable networking services to keep your business connected and growing.
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" href="/about">
                About Us
              </a>
              <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="/service">
                Services
              </a>
            </div>
          </div>
        </div>

        {/* Third Carousel Item */}
        <div className="header-carousel-item">
          <div className="header-carousel-item-img-3">
            <img src="img/carou3.jpg" className="img-fluid w-100" alt="Image" style={{ height: '770px' }} />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-start p-3">
              <h1 className="display-1 text-capitalize text-white mb-4">Digital Security Solutions</h1>
              <p className="mb-5 fs-5">
                Ensure the safety of your property with our state-of-the-art CCTV camera installations, providing reliable security day and night.
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" href="/about">
                About Us
              </a>
              <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="/service">
                Services
              </a>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default CarouselComponent;
