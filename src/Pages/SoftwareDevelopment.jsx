import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

// Styled Components
const TechItem = styled.div`
    transition: transform 0.3s ease;
    margin: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    height: 100%;
    
    &:hover {
        transform: translateY(-5px);
    } 
`;

const StyledSlider = styled(Slider)`
    .slick-prev, .slick-next {
        width: 40px;
        height: 40px;
        background: #0B2154;
        border-radius: 50%;
        z-index: 1;

        &:hover {
            background: #0B2154;
        }

        &:before {
            color: white;
        }
    }

    .slick-prev {
        left: -50px;
    }

    .slick-next {
        right: -50px;
    }

    .slick-dots li button:before {
        font-size: 12px;
        color: #0B2154;
    }

    .slick-dots li.slick-active button:before {
        color: #0B2154;
    }
`;

function SoftwareDevelopment() {
    const techStackSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const technologies = [
        { name: 'React', image: 'img/react.png' },
        { name: 'Node.js', image: 'img/node.png' },
        { name: 'Spring Boot', image: 'img/spring.png' },
        { name: 'Angular', image: 'img/angular.png' },
        { name: 'Python', image: 'img/python.png' },
        { name: 'Java', image: 'img/java.png' },
        { name: 'MongoDB', image: 'img/mongoDB.png' },
        { name: 'MySQL', image: 'img/mysql.png' }
    ];

    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar px-0 d-none d-lg-block">
                <div className="container px-0">
                    <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                                <a href='mailto:info@fabritech.rw' className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.rw</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></a>
                                <a href="https://www.instagram.com/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></a>
                                <a href="https://www.linkedin.com/in/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-linkedin-in text-white"></i></a>
                                <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech.rw!&amp;phone=+250788601280" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
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
                            <img src="img/logoF.jpg.png" alt="Logo" style={{ height: '40px' }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="/" className="nav-item nav-link ">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/service" className="nav-item nav-link active">Services</a>
                                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                <a href="/contact" className="nav-item nav-link ">Contact</a>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar & Hero End --> */}

            {/* <!-- Header Start --> */}
            <div className="container-fluid bg-breadcrumb">
                <div className="bg-breadcrumb-single"></div>
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Development</h4>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="/service">Service</a></li>
                        <li className="breadcrumb-item active text-primary">Software Development</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}

            {/* <!-- Software Development Introduction Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-5 mb-4">Custom Software Solutions for Your Business Growth</h1>
                            <p className="mb-4">At Fabritech, we transform your ideas into powerful software solutions. Our expert team delivers cutting-edge applications that drive innovation and efficiency in your business operations.</p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>Tailored Solutions</h6>
                                            <span>Custom software designed specifically for your business needs</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>Modern Technologies</h6>
                                            <span>Using latest technologies and development practices</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>Ongoing Support</h6>
                                            <span>Continuous maintenance and technical support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6">
                                    <div className="wow fadeIn" data-wow-delay="0.3s">
                                        <img className="img-fluid rounded" src="img/software-dev-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wow fadeIn" data-wow-delay="0.5s">
                                        <img className="img-fluid rounded" src="img/software-dev-2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Our Development Process --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Our Process</h4>
                        <h1 className="display-5 mb-4">How We Bring Your Ideas to Life</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="btn btn-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-lightbulb fa-2x text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Discovery</h4>
                                    <p>Understanding your requirements and business objectives</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="btn btn-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-pencil-ruler fa-2x text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Design</h4>
                                    <p>Creating intuitive and user-friendly solutions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="btn btn-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-code fa-2x text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Development</h4>
                                    <p>Building robust and scalable applications</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="btn btn-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-rocket fa-2x text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Deployment</h4>
                                    <p>Launching and maintaining your solution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Our Services Section --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Our Services</h4>
                        <h1 className="display-5 mb-4">Software Development Solutions</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/webDevelopment.jpg"
                                    alt="Web Development"
                                    style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Web Development</h3>
                                    <p className="card-text">Custom web applications tailored to your business needs.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Responsive Design</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>E-commerce Solutions</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>CMS Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/mobileDevelopment.jpg"
                                    alt="Mobile Development"
                                    style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Mobile Development</h3>
                                    <p className="card-text">Native and cross-platform mobile applications.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>iOS Development</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Android Development</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Cross-Platform Apps</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/enterpriseSolution.jpg"
                                    alt="Enterprise Solutions"
                                    style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Enterprise Solutions</h3>
                                    <p className="card-text">Comprehensive enterprise software solutions.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>ERP Systems</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>CRM Solutions</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Business Intelligence</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Technologies We Use --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Technologies</h4>
                        <h1 className="display-5 mb-4">Our Tech Stack</h1>
                    </div>
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <StyledSlider {...techStackSettings}>
                            {technologies.map((tech, index) => (
                                <div key={index} className="text-center px-3">
                                    <TechItem>
                                        <img 
                                            src={tech.image} 
                                            alt={tech.name} 
                                            className="img-fluid mb-3" 
                                            style={{ 
                                                height: '80px', 
                                                objectFit: 'contain',
                                                margin: '0 auto'
                                            }} 
                                        />
                                        <h5 className="mt-2">{tech.name}</h5>
                                    </TechItem>
                                </div>
                            ))}
                        </StyledSlider>
                    </div>
                </div>
            </div>

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
                                <a href="#"><i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza, Kisimenti, Remera</a>
                                <a href="mailto:info@fabritech.rw"><i className="fas fa-envelope me-2"></i>info@fabritech.rw</a>
                                <a href="tel:+250788601280"><i className="fas fa-phone me-2"></i> +250788601280</a>
                                {/* Social media icons */}
                                <div className="d-flex align-items-center">
                                    <a className="btn btn-light btn-md-square me-2" href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-light btn-md-square me-2" href="https://www.instagram.com/fabritech_ltd"><i className="fab fa-instagram"></i></a>
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
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-primary btn-lg-square back-to-top">
                <i className="fa fa-arrow-up"></i>
            </a>
            {/* <!-- Copyright End --> */}

        </div>
    )
}

export default SoftwareDevelopment