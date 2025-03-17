import React from 'react'

function Networking() {
    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar px-0 d-none d-lg-block">
                <div className="container px-0">
                    <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                                <a href="mailto:info@fabritech.rw" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.rw</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></a>
                                <a href="https://www.instagram.com/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></a>
                                <a href="https://www.linkedin.com/in/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-linkedin-in text-white"></i></a>
                                <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech &amp;phone=+250788601280" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
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
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Network Infrastructure</h4>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="/service">Service</a></li>
                        <li className="breadcrumb-item active text-primary">Networking</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}

            {/* Network Services Introduction Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-5 mb-4">Transform Your Business with Enterprise-Grade Networking Solutions</h1>
                            <p className="mb-4">At Fabritech, we understand that a robust network infrastructure is the backbone of modern business operations. Our comprehensive networking solutions are designed to deliver:</p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>High-Speed Connectivity</h6>
                                            <span>Ensure seamless data transfer and communication across your organization</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>Scalable Infrastructure</h6>
                                            <span>Solutions that grow with your business needs</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>24/7 Technical Support</h6>
                                            <span>Round-the-clock expert assistance for your network needs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6">
                                    <div className="wow fadeIn" data-wow-delay="0.3s">
                                        <img className="img-fluid rounded" src="img/network-hero-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wow fadeIn" data-wow-delay="0.5s">
                                        <img className="img-fluid rounded" src="img/network-hero-2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Why Choose Fabritech</h4>
                        <h1 className="display-5 mb-4">Your Trusted Network Solutions Partner</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-white rounded p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-users fa-2x text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="mb-0">Expert Team</h4>
                                    </div>
                                </div>
                                <p className="mb-0">Certified professionals with years of experience in network design and implementation</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-white rounded p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-shield-alt fa-2x text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="mb-0">Reliable Security</h4>
                                    </div>
                                </div>
                                <p className="mb-0">End-to-end network security solutions to protect your valuable business data</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-white rounded p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        <i className="fas fa-cogs fa-2x text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="mb-0">Custom Solutions</h4>
                                    </div>
                                </div>
                                <p className="mb-0">Tailored networking solutions designed to meet your specific business requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Network Solutions Showcase Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Network Infrastructure</h4>
                        <h1 className="display-5 mb-3">Enterprise Networking Solutions</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/structuredCabling.jpeg"
                                    alt="Structured Cabling"
                                    style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Structured Cabling</h3>
                                    <p className="card-text">Professional cable infrastructure for reliable network connectivity.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Cat6/6A/7 Installation</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Fiber Optic Cabling</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Cable Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/wirelessSolutions.jpg"
                                    alt="Wireless Solutions"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Wireless Solutions</h3>
                                    <p className="card-text">High-performance wireless networking for seamless connectivity.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>WiFi 6 Technology</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Mesh Networks</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Guest Network Setup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/dataProtection.jpg"
                                    alt="Network Security"
                                    style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Network Security</h3>
                                    <p className="card-text">Comprehensive security solutions for network protection.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Firewall Setup</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>VPN Configuration</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Threat Detection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Network Equipment Section */}
            <div className="container-fluid py-5 bg-light">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Network Equipment</h4>
                        <h1 className="display-5 mb-3">Professional Hardware Solutions</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/networkSwitches.png"
                                    alt="Network Switches"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Network Switches</h3>
                                    <p className="card-text">Enterprise-grade switching solutions.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>PoE Support</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>VLAN Management</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>10G Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/router.jpg"
                                    alt="Routers"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Enterprise Routers</h3>
                                    <p className="card-text">Advanced routing and network management.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>SD-WAN Ready</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>QoS Control</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Load Balancing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/accesspoint.png"
                                    alt="Access Points"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Access Points</h3>
                                    <p className="card-text">High-performance wireless access points.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Multi-SSID</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Band Steering</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Cloud Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/networkMonitoring.jpg"
                                    alt="Network Monitoring"
                                    style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Network Monitoring</h3>
                                    <p className="card-text">Complete network visibility and management.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Real-time Monitoring</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Performance Analytics</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Alert System</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                                <a href="https://maps.app.goo.gl/GMRDwb39xqjckVDD9
"><i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza, Kisimenti, Remera</a>
                                <a href="mailto:info@fabritech.rw"><i className="fas fa-envelope me-2"></i>info@fabritech.rw</a>
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

export default Networking