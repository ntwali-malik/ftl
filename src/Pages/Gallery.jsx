import React from 'react'

function Gallery() {
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
                                <a href="/service" className="nav-item nav-link">Services</a>
                                <a href="/gallery" className="nav-item nav-link active">Gallery</a>
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
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Gallery</h4>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active text-primary">Gallery</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}

            {/* <!-- Gallery Start --> */}
            <div className="container py-5">
                <div className="row g-4">
                    {/* <!-- Example of gallery items --> */}
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/25.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/25.jpeg" alt="Fabritech Project 1" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/24.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/24.jpeg" alt="Fabritech Project 2" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/23.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/23.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/22.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/22.jpeg" alt="Fabritech Project 1" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/21.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/21.jpeg" alt="Fabritech Project 2" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/20.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/20.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/19.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/19.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/18.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/18.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/17.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/17.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/16.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/16.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/15.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/15.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/13.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/13.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/12.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/12.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/10.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/10.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/9.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/9.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/8.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/8.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/7.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/7.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/6.jpeg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/6.jpeg" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/5.png" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/5.png" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/4.png" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/4.png" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/26.JPG" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/26.JPG" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/3.png" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/3.png" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/29.jpg" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/26.JPG" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/2.png" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/2.png" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/1.png" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/1.png" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/27.JPG" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/27.JPG" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="img/gallery/28.JPG" data-lightbox="gallery" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="img/gallery/28.JPG" alt="Fabritech Project 3" />
                        </a>
                    </div>
                    {/* <!-- Add more gallery items as needed --> */}
                </div>
            </div>
            {/* <!-- Gallery End --> */}

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

export default Gallery