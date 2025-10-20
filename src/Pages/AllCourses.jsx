import React from 'react';
import { trainingData } from '../data/trainingData';

function AllCourses() {
    const { shortCourses } = trainingData;

    return (
        <div>
            {/* <!-- Navbar & Hero Start --> */}
            <div className="container-fluid position-relative p-0">
                <div className="container px-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
                        <a href="index.html" className="navbar-brand p-0">
                            <img src="img/F_logo.png" alt="Logo" style={{ height: '40px' }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="/" className="nav-item nav-link">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/service" className="nav-item nav-link active">Services</a>
                                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                <a href="/contact" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar & Hero End --> */}

            {/* <!-- Header Start --> */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Courses</h4>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/service">Services</a></li>
                        <li className="breadcrumb-item active text-primary">Courses</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}

            {/* <!-- Courses Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h4 className="text-primary">Training Programs</h4>
                        <h1 className="display-5 mb-4">Explore Our Professional Courses</h1>
                    </div>
                    <div className="row g-4">
                        {shortCourses.map(course => (
                            <div key={course.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="course-card bg-white rounded shadow-lg p-4 h-100">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                                            <i className={`${course.icon} text-white fs-3`}></i>
                                        </div>
                                        <h3 className="mb-0">{course.name}</h3>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <i className="fas fa-clock text-primary me-2"></i>
                                                <span>{course.duration}</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <i className="fas fa-calendar text-primary me-2"></i>
                                                <span>{course.schedule}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-4">Comprehensive training program designed to provide practical skills and industry knowledge.</p>
                                    <h5 className="mb-3">What You'll Learn:</h5>
                                    <ul className="list-unstyled mb-4">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="mb-2">
                                                <i className="fas fa-check text-primary me-2"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-center">
                                        <a href="/course-registration" className="btn btn-primary px-4 py-2 rounded-pill">
                                            <i className="fas fa-sign-in-alt me-2"></i>
                                            Enroll Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Courses End --> */}

            {/* <!-- Why Choose Us Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h4 className="text-primary">Why Choose Us</h4>
                        <h1 className="display-5 mb-4">Benefits of Our Training Programs</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-white text-center p-4">
                                <i className="fas fa-chalkboard-teacher fa-3x text-primary mb-4"></i>
                                <h4>Expert Instructors</h4>
                                <p className="mb-0">Learn from industry professionals with years of practical experience</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-white text-center p-4">
                                <i className="fas fa-laptop-code fa-3x text-primary mb-4"></i>
                                <h4>Hands-on Practice</h4>
                                <p className="mb-0">Gain practical experience through real-world projects and exercises</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-white text-center p-4">
                                <i className="fas fa-certificate fa-3x text-primary mb-4"></i>
                                <h4>Certification</h4>
                                <p className="mb-0">Receive industry-recognized certificates upon course completion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Why Choose Us End --> */}

            {/* <!-- Call to Action Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-8">
                            <h1 className="display-5 mb-4">Ready to Start Your Learning Journey?</h1>
                            <p className="mb-4">Contact us today to learn more about our courses and enrollment process.</p>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <a href="/contact" className="btn btn-primary py-3 px-4">Contact Us</a>
                            <a href="/course-registration" className="btn btn-outline-primary py-3 px-4 ms-2">Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Call to Action End --> */}
        </div>
    );
}

export default AllCourses; 