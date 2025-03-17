import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container-fluid py-5" style={{minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
            <div className="container text-center py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="fas fa-exclamation-triangle display-1 text-primary mb-4"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We're sorry, the page you're looking for might be under construction or doesn't exist.</p>
                        <p className="mb-4">Meanwhile, you can:</p>
                        <div className="mb-5">
                            <a href="https://www.linkedin.com/company/fabritech-ltd" 
                               className="btn btn-primary rounded-pill py-3 px-5 me-3"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in me-2"></i>
                                Visit Our LinkedIn
                            </a>
                            <Link to="/" className="btn btn-outline-primary rounded-pill py-3 px-5">
                                Go Back Home
                            </Link>
                        </div>
                        <div className="mt-4">
                            <p>Connect with us on our social media:</p>
                            <div className="d-flex justify-content-center">
                                <a href="https://www.facebook.com/fabritech" 
                                   className="btn btn-primary btn-square rounded-circle mx-2"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/fabritech" 
                                   className="btn btn-primary btn-square rounded-circle mx-2"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/fabritech" 
                                   className="btn btn-primary btn-square rounded-circle mx-2"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound; 