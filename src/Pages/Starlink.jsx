import React, { useState, useEffect } from 'react';
import TechnicalSupportService from '../services/TechnicalSupportService';

const starlinkKits = [
    {
        id: 1,
        title: 'Starlink V2',
        description: 'Perfect for homes and small offices with standard internet needs.',
        image: 'img/starlinkV2.jpg',
        features: [
            'High-Performance Satellite Dish',
            'Wi-Fi Router',
            'Power Supply',
            'Mounting Tripod',
            'All Required Cables'
        ],
        whatsappLink: 'https://wa.me/250788601280?text=I%20am%20interested%20in%20the%20Starlink%20Standard%20Kit'
    },
    {
        id: 2,
        title: 'Starlink V3',
        description: 'Designed for businesses requiring higher bandwidth and reliability.',
        image: 'img/starlinkV3.jpg',
        features: [
            'High-Performance Business Dish',
            'Enterprise-Grade Router',
            'Advanced Mounting System',
            'Premium Support',
            'Extended Warranty'
        ],
        whatsappLink: 'https://wa.me/250788601280?text=I%20am%20interested%20in%20Starlink%20V3'
    },
    {
        id: 3,
        title: 'Starlink Mini',
        description: 'Mobile solution for travelers and remote workers.',
        image: 'img/starlinkMini.jpg',
        features: [
            'Portable Satellite Dish',
            'Travel Router',
            'Mobile Mounting System',
            'Carrying Case',
            'Flexible Service Pause'
        ],
        whatsappLink: 'https://wa.me/250788601280?text=I%20am%20interested%20in%20the%20Starlink%20RV%20Kit'
    }
];

const starlinkAccessories = [
    {
        id: 1,
        title: 'Starlink Cable 25m',
        description: 'Standard length cable for most installations',
        image: 'img/starlinkcable25m.jpg',
        features: [
            '25 Meter Length',
            'Weather-Resistant',
            'High-Speed Data Transfer',
            'UV Protected'
        ],
        whatsappLink: 'https://wa.me/250788601280?text=I%20am%20interested%20in%20the%20Starlink%2025m%20Cable'
    },
    {
        id: 2,
        title: 'Ethernet Adapter',
        description: 'Connect devices via ethernet cable',
        image: 'img/starlinkEthernetAdapter.jpg',
        features: [
            'Gigabit Speed',
            'Plug-and-Play',
            'Weather-Sealed'
        ],
        whatsappLink: 'https://wa.me/250788601280?text=I%20am%20interested%20in%20the%20Starlink%20Ethernet%20Adapter'
    },
    {
        id: 3,
        title: 'Mesh WiFi Router',
        description: 'Extend your Starlink WiFi coverage',
        image: 'img/starlinkRouter.png',
        features: [
            'Wide Coverage',
            'Easy Setup',
            'Dual-Band'
        ],
        whatsappLink: 'https://wa.me/250788601280?text=I%20am%20interested%20in%20the%20Starlink%20Mesh%20WiFi%20Router'
    },
    {
        id: 4,
        title: 'Starlink Cable 45m',
        description: 'Extended length cable for flexible installation options',
        image: 'img/starlinkcable45m.jpg',
        features: [
            '45 Meter Length',
            'Weather-Resistant',
            'High-Speed Data Transfer',
            'UV Protected'
        ],
        whatsappLink: 'https://wa.me/250788601280?text=I%20am%20interested%20in%20the%20Starlink%2045m%20Cable'
    }
];

const subscriptionPackages = [
    {
        id: 1,
        name: 'Standard Business',
        features: [
            'Data Limit: Unlimited Standard Data',
            'Download Speed: 220 Mbps',
            'Recommended users: 60',
            'Latency: 25-60ms',
            'Customer Support: 24/7'
        ]
    },
    {
        id: 2,
        name: 'Business Plus',
        features: [
            'Data Limit: Unlimited Standard Data',
            '1 TB Priority Data',
            'Download Speed: 220 Mbps',
            'Recommended users: 60',
            'Latency: 25-60ms',
            'Customer Support: 24/7'
        ]
    },
    {
        id: 3,
        name: 'Business Pro',
        features: [
            'Data Limit: Unlimited Standard Data',
            '2 TB Priority Data',
            'Download Speed: 220 Mbps',
            'Recommended users: 100',
            'Latency: 25-60ms',
            'Customer Support: 24/7'
        ]
    },
    {
        id: 4,
        name: 'Business Elite',
        features: [
            'Data Limit: Unlimited Standard Data',
            '6 TB Priority Data',
            'Download Speed: 220 Mbps',
            'Recommended users: 150',
            'Latency: 25-60ms',
            'Customer Support: 24/7'
        ]
    }
];

const personalSubscriptionPackages = [
    {
        id: 1,
        name: 'Standard',
        price: 157000,
        features: [
            'Data Limit: Unlimited Standard Data',
            'Download Speed: 100-200 Mbps',
            'Recommended users: 4-6',
            'Latency: 25-50ms',
            'Customer Support: 24/7'
        ]
    },
    {
        id: 2,
        name: 'Premium',
        price: 257000,
        features: [
            'Data Limit: Unlimited Standard Data',
            'Priority Data: 500GB',
            'Download Speed: 150-250 Mbps',
            'Recommended users: 6-8',
            'Latency: 20-40ms',
            'Customer Support: 24/7 Priority'
        ]
    }
];

function Starlink() {
    const [formData, setFormData] = useState({
        serviceProvider: 'Starlink',
        name: '',
        email: '',
        phoneNumber: '',
        issueType: '',
        smartCardNumber: 'N/A',
        issueDescription: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [activePlan, setActivePlan] = useState('personal');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await TechnicalSupportService.createTechnicalSupport(formData);
            setSuccess(true);
            setFormData({
                serviceProvider: 'Starlink',
                name: '',
                email: '',
                phoneNumber: '',
                issueType: '',
                smartCardNumber: '',
                issueDescription: ''
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Starlink Kits Section
    const renderStarlinkKit = (kit) => (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="kit-card h-100 position-relative"
                 style={{
                     background: 'white',
                     borderRadius: '20px',
                     overflow: 'hidden',
                     border: '1px solid rgba(0,0,0,0.08)',
                     transition: 'all 0.4s ease',
                     boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                 }}>
                
                {/* Image Container */}
                <div className="position-relative" style={{ height: '250px' }}>
                    <img 
                        src={kit.image} 
                        alt={kit.title}
                        className="w-100 h-100"
                        style={{
                            objectFit: 'contain',
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px'
                        }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3"
                         style={{
                             background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                             color: 'white'
                         }}>
                        <h3 className="h5 mb-0">{kit.title}</h3>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <p className="text-muted mb-4">{kit.description}</p>
                    
                    <ul className="list-unstyled mb-4">
                        {kit.features.map((feature, index) => (
                            <li key={index} className="d-flex align-items-center mb-2">
                                <div className="feature-icon me-3"
                                     style={{
                                         minWidth: '24px',
                                         height: '24px',
                                         borderRadius: '50%',
                                         background: 'rgba(13, 110, 253, 0.1)',
                                         display: 'flex',
                                         alignItems: 'center',
                                         justifyContent: 'center'
                                     }}>
                                    <i className="fas fa-check text-primary" style={{fontSize: '12px'}}></i>
                                </div>
                                <span style={{fontSize: '0.9rem'}}>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <a href={kit.whatsappLink}
                       className="btn w-100 position-relative overflow-hidden"
                       target="_blank"
                       rel="noopener noreferrer"
                       style={{
                           background: 'linear-gradient(45deg, #25D366, #128C7E)',
                           color: 'white',
                           border: 'none',
                           padding: '12px',
                           borderRadius: '10px',
                           transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-3px)';
                           e.currentTarget.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';
                       }}
                       onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.boxShadow = 'none';
                       }}>
                        <i className="fab fa-whatsapp me-2"></i>
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );

    // Accessories Card Design
    const renderAccessory = (accessory) => (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="accessory-card h-100 position-relative"
                 style={{
                     background: 'white',
                     borderRadius: '20px',
                     overflow: 'hidden',
                     border: '1px solid rgba(0,0,0,0.08)',
                     transition: 'all 0.4s ease',
                     boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                 }}>
                
                {/* Image Container */}
                <div className="position-relative" style={{ height: '250px' }}>
                    <img 
                        src={accessory.image} 
                        alt={accessory.title}
                        className="w-100 h-100"
                        style={{
                            objectFit: 'contain',
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px'
                        }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3"
                         style={{
                             background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                             color: 'white'
                         }}>
                        <h3 className="h5 mb-0">{accessory.title}</h3>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <p className="text-muted mb-4">{accessory.description}</p>
                    
                    <ul className="list-unstyled mb-4">
                        {accessory.features.map((feature, index) => (
                            <li key={index} className="d-flex align-items-center mb-2">
                                <div className="feature-icon me-3"
                                     style={{
                                         minWidth: '24px',
                                         height: '24px',
                                         borderRadius: '50%',
                                         background: 'rgba(13, 110, 253, 0.1)',
                                         display: 'flex',
                                         alignItems: 'center',
                                         justifyContent: 'center'
                                     }}>
                                    <i className="fas fa-check text-primary" style={{fontSize: '12px'}}></i>
                                </div>
                                <span style={{fontSize: '0.9rem'}}>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <a href={accessory.whatsappLink}
                       className="btn w-100 position-relative overflow-hidden"
                       target="_blank"
                       rel="noopener noreferrer"
                       style={{
                           background: 'linear-gradient(45deg, #25D366, #128C7E)',
                           color: 'white',
                           border: 'none',
                           padding: '12px',
                           borderRadius: '10px',
                           transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-3px)';
                           e.currentTarget.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';
                       }}
                       onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.boxShadow = 'none';
                       }}>
                        <i className="fab fa-whatsapp me-2"></i>
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );

    const renderSubscriptionPackage = (pkg) => (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`0.${pkg.id}s`}>
            <div className="subscription-card h-100 position-relative"
                 style={{
                     background: 'white',
                     borderRadius: '20px',
                     overflow: 'hidden',
                     border: '1px solid rgba(0,0,0,0.08)',
                     transition: 'all 0.4s ease',
                     boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                 }}>
                
                {/* Package Header */}
                <div className="text-center p-4"
                     style={{
                         background: `linear-gradient(135deg, 
                             ${pkg.id === 4 ? '#FFD700, #FFA500' : 
                               pkg.id === 3 ? '#9733EE, #DA22FF' :
                               pkg.id === 2 ? '#2193b0, #6dd5ed' :
                               '#0d6efd, #0043a8'})`
                     }}>
                    <h3 className="text-white mb-3">{pkg.name}</h3>
                </div>

                {/* Features List */}
                <div className="p-4">
                    <ul className="list-unstyled mb-4">
                        {pkg.features.map((feature, index) => (
                            <li key={index} 
                                className="mb-3 d-flex align-items-center"
                                style={{
                                    padding: '10px',
                                    background: 'rgba(13, 110, 253, 0.05)',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateX(10px)';
                                    e.currentTarget.style.background = 'rgba(13, 110, 253, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateX(0)';
                                    e.currentTarget.style.background = 'rgba(13, 110, 253, 0.05)';
                                }}>
                                <i className="fas fa-check-circle text-primary me-2"></i>
                                <span style={{fontSize: '0.9rem'}}>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Subscribe Button */}
                    <a href={`https://wa.me/250788601280?text=I'm interested in the ${pkg.name} Starlink subscription package`}
                       className="btn w-100"
                       target="_blank"
                       rel="noopener noreferrer"
                       style={{
                           background: pkg.id === 4 ? 'linear-gradient(45deg, #FFD700, #FFA500)' :
                                     pkg.id === 3 ? 'linear-gradient(45deg, #9733EE, #DA22FF)' :
                                     pkg.id === 2 ? 'linear-gradient(45deg, #2193b0, #6dd5ed)' :
                                     'linear-gradient(45deg, #0d6efd, #0043a8)',
                           color: 'white',
                           border: 'none',
                           padding: '12px',
                           borderRadius: '10px',
                           transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-3px)';
                           e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                       }}
                       onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.boxShadow = 'none';
                       }}>
                        <i className="fab fa-whatsapp me-2"></i>
                        Subscribe Now
                    </a>
                </div>
            </div>
        </div>
    );

    const cssAnimations = `
        .kit-card:hover, .accessory-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .feature-icon {
            transition: all 0.3s ease;
        }

        .feature-icon:hover {
            transform: scale(1.1);
            background: rgba(13, 110, 253, 0.2);
        }
    `;

    const subscriptionStyles = `
        .subscription-card {
            transform: translateY(0);
            transition: all 0.3s ease;
        }

        .subscription-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
    `;

    const subscriptionToggleStyles = `
        .subscription-toggle {
            background: rgba(13, 110, 253, 0.08);
            padding: 4px;
            border-radius: 50px;
            display: inline-flex;
            position: relative;
            margin: 20px 0;
            transition: all 0.3s ease;
            min-width: 300px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .subscription-toggle button {
            position: relative;
            padding: 12px 30px;
            border-radius: 50px;
            border: none;
            font-weight: 600;
            letter-spacing: 0.5px;
            z-index: 1;
            transition: all 0.4s ease;
            font-size: 15px;
            width: 50%;
        }

        .subscription-toggle button:not(.active) {
            background: transparent;
            color: #555;
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
        }

        .subscription-toggle button.active {
            color: white;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .subscription-toggle button i {
            font-size: 14px;
            transition: transform 0.3s ease;
        }

        .subscription-toggle button:hover i {
            transform: scale(1.2);
        }

        .subscription-toggle .slider {
            position: absolute;
            top: 4px;
            left: 4px;
            bottom: 4px;
            width: calc(50% - 4px);
            background: linear-gradient(135deg, #4CAF50, #45a049);
            border-radius: 50px;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            box-shadow: 0 2px 15px rgba(76, 175, 80, 0.3);
        }

        .subscription-toggle[data-active='business'] .slider {
            left: calc(50% + 0px);
            background: linear-gradient(135deg, #2196F3, #1976D2);
            box-shadow: 0 2px 15px rgba(33, 150, 243, 0.3);
        }

        .subscription-toggle button:hover:not(.active) {
            color: #333;
            transform: translateY(-1px);
        }

        .subscription-toggle:hover {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
        }

        @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
            100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }

        .subscription-toggle[data-active='business'] {
            @keyframes pulseGlow {
                0% { box-shadow: 0 0 0 0 rgba(33, 150, 243, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(33, 150, 243, 0); }
                100% { box-shadow: 0 0 0 0 rgba(33, 150, 243, 0); }
            }
        }

        .subscription-toggle:after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 50px;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            opacity: 0;
            z-index: -1;
            transition: all 0.3s ease;
        }

        .subscription-toggle[data-active='business']:after {
            background: linear-gradient(135deg, #2196F3, #1976D2);
        }

        .subscription-toggle:hover:after {
            opacity: 0.1;
            animation: pulseGlow 2s infinite;
        }

        /* Custom animations for icons */
        .subscription-toggle button.active i {
            animation: iconPop 0.3s ease-out;
        }

        @keyframes iconPop {
            0% { transform: scale(1); }
            50% { transform: scale(1.4); }
            100% { transform: scale(1); }
        }

        /* Responsive design */
        @media (max-width: 576px) {
            .subscription-toggle {
                min-width: 280px;
            }
            
            .subscription-toggle button {
                padding: 10px 20px;
                font-size: 14px;
            }
        }
    `;

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = cssAnimations;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = subscriptionStyles;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = subscriptionToggleStyles;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar px-0 d-none d-lg-block">
                <div className="container px-0">
                    <div className="row gx-0 align-items-center" style={{height: '45px'}}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                                <a href='mailto:info@fabritech.rw' className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.rw</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></a>
                                <a href="https://www.instagram.com/fabritech_ltd/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></a>
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
                            <img src="img/logoF.jpg.png" alt="Logo" style={{height: '40px'}} />
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
                <div className="bg-breadcrumb-single"></div>
                <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Installation</h4>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="/service">Service</a></li>
                        <li className="breadcrumb-item active text-primary">Starlink Internet</li>
                    </ol>    
                </div>
            </div>
            {/* <!-- Header End --> */}

            {/* <!-- Starlink Services Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary text-uppercase">Our Services</h4>
                        <h1 className="display-4 mb-3">Experience Next-Generation Internet with Starlink</h1>
                        <p className="mb-4" style={{maxWidth: '600px', margin: '0 auto', color: '#666'}}>
                            Join the future of internet connectivity with Starlink's revolutionary satellite network, 
                            professionally installed and supported by Fabritech's expert team.
                        </p>
                    </div>

                    <div className="row g-5">
                        {/* Left Column - Features */}
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="position-relative h-100">
                                {/* Speed Feature */}
                                <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="d-flex align-items-center justify-content-center rounded-circle" 
                                             style={{width: '60px', height: '60px', backgroundColor: 'rgba(78, 115, 223, 0.1)'}}>
                                            <i className="fas fa-rocket fa-2x text-primary"></i>
                                        </div>
                                        <div className="ms-3">
                                            <h5 className="mb-1">High-Speed Internet</h5>
                                            <span>100-200+ Mbps Download Speed</span>
                                        </div>
                                    </div>
                                    <p className="mb-0">
                                        Experience lightning-fast internet speeds that enable seamless streaming, 
                                        gaming, and video conferencing anywhere in the world.
                                    </p>
                                </div>

                                {/* Latency Feature */}
                                <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="d-flex align-items-center justify-content-center rounded-circle" 
                                             style={{width: '60px', height: '60px', backgroundColor: 'rgba(78, 115, 223, 0.1)'}}>
                                            <i className="fas fa-bolt fa-2x text-primary"></i>
                                        </div>
                                        <div className="ms-3">
                                            <h5 className="mb-1">Low Latency</h5>
                                            <span>20-40ms Response Time</span>
                                        </div>
                                    </div>
                                    <p className="mb-0">
                                        Enjoy minimal delay in your online activities with Starlink's 
                                        low-latency satellite network, perfect for real-time applications.
                                    </p>
                                </div>

                                {/* Support Feature */}
                                <div className="bg-white rounded p-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="d-flex align-items-center justify-content-center rounded-circle" 
                                             style={{width: '60px', height: '60px', backgroundColor: 'rgba(78, 115, 223, 0.1)'}}>
                                            <i className="fas fa-headset fa-2x text-primary"></i>
                                        </div>
                                        <div className="ms-3">
                                            <h5 className="mb-1">24/7 Support</h5>
                                            <span>Expert Technical Assistance</span>
                                        </div>
                                    </div>
                                    <p className="mb-0">
                                        Our dedicated support team is always ready to help with any technical 
                                        issues or questions about your Starlink service.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Image and Benefits */}
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.5s">
                            <div className="position-relative h-100">
                                <div className="position-relative">
                                    <img className="img-fluid rounded w-100 mb-5" 
                                         src="img/starlink.jpg" 
                                         alt="Starlink Installation"
                                         style={{objectFit: 'cover', height: '400px'}} />
                                    <div className="position-relative mt-4" 
                                         style={{
                                             background: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))',
                                             borderRadius: '10px',
                                             boxShadow: '0 0 30px rgba(0,0,0,0.1)'
                                         }}>
                                        <div className="p-4">
                                            <h4 className="text-primary mb-4 text-center">Why Choose Fabritech for Starlink?</h4>
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <div className="d-flex align-items-center bg-light rounded p-2">
                                                        <i className="fas fa-check-circle text-primary me-3 fa-lg"></i>
                                                        <span style={{
                                                            fontSize: '0.95rem',
                                                            fontWeight: '500',
                                                            color: '#333'
                                                        }}>Professional Installation</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="d-flex align-items-center bg-light rounded p-2">
                                                        <i className="fas fa-check-circle text-primary me-3 fa-lg"></i>
                                                        <span style={{
                                                            fontSize: '0.95rem',
                                                            fontWeight: '500',
                                                            color: '#333'
                                                        }}>Expert Configuration</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="d-flex align-items-center bg-light rounded p-2">
                                                        <i className="fas fa-check-circle text-primary me-3 fa-lg"></i>
                                                        <span style={{
                                                            fontSize: '0.95rem',
                                                            fontWeight: '500',
                                                            color: '#333'
                                                        }}>Site Survey Included</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="d-flex align-items-center bg-light rounded p-2">
                                                        <i className="fas fa-check-circle text-primary me-3 fa-lg"></i>
                                                        <span style={{
                                                            fontSize: '0.95rem',
                                                            fontWeight: '500',
                                                            color: '#333'
                                                        }}>Ongoing Support</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Starlink Services End --> */}

            {/* <!-- Starlink Products Start --> */}
            <div className="container-fluid py-5 bg-light">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h4 className="text-primary">Our Products</h4>
                        <h1 className="display-5 mb-4">Starlink Equipment & Accessories</h1>
                    </div>
                    
                    {/* Starlink Kits Section */}
                    <h2 className="text-center mb-4">Starlink Kits</h2>
                    <div className="row g-4 mb-5">
                        {starlinkKits.map(kit => renderStarlinkKit(kit))}
                    </div>

                    {/* Accessories Section */}
                    <h2 className="text-center mb-4">Accessories</h2>
                    <div className="row g-4">
                        {starlinkAccessories.map(accessory => renderAccessory(accessory))}
                    </div>
                </div>
            </div>
            {/* <!-- Starlink Products End --> */}

            {/* <!-- Speed Comparison Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Internet Speed</h4>
                        <h1 className="display-5 mb-3">Experience Lightning-Fast Internet</h1>
                        <p className="mb-0">Compare Starlink's performance with traditional internet options</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative rounded p-4 bg-white" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <div className="d-flex align-items-center justify-content-center rounded-circle bg-light" 
                                     style={{width: '80px', height: '80px', marginBottom: '20px'}}>
                                    <i className="fas fa-satellite-dish fa-2x text-primary"></i>
                                </div>
                                <h4>Starlink</h4>
                                <h2 className="display-6 text-primary mb-3">100-200+ Mbps</h2>
                                <p>Download speeds that enable seamless 4K streaming and online gaming</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="position-relative rounded p-4 bg-white" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <div className="d-flex align-items-center justify-content-center rounded-circle bg-light" 
                                     style={{width: '80px', height: '80px', marginBottom: '20px'}}>
                                    <i className="fas fa-wifi fa-2x text-primary"></i>
                                </div>
                                <h4>4G/LTE</h4>
                                <h2 className="display-6 text-primary mb-3">35-50 Mbps</h2>
                                <p>Standard mobile internet speeds with varying reliability</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative rounded p-4 bg-white" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <div className="d-flex align-items-center justify-content-center rounded-circle bg-light" 
                                     style={{width: '80px', height: '80px', marginBottom: '20px'}}>
                                    <i className="fas fa-broadcast-tower fa-2x text-primary"></i>
                                </div>
                                <h4>Traditional Satellite</h4>
                                <h2 className="display-6 text-primary mb-3">15-25 Mbps</h2>
                                <p>Conventional satellite internet with higher latency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Speed Comparison End --> */}

            {/* <!-- Installation Process Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Installation Process</h4>
                        <h1 className="display-5 mb-3">How We Install Your Starlink</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="process-item text-center p-4">
                                <div className="process-icon mb-4">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                                         style={{width: '90px', height: '90px'}}>
                                        <i className="fas fa-search fa-3x text-primary"></i>
                                    </div>
                                </div>
                                <h5>Site Survey</h5>
                                <p>We assess your location for optimal placement and signal strength</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="process-item text-center p-4">
                                <div className="process-icon mb-4">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                                         style={{width: '90px', height: '90px'}}>
                                        <i className="fas fa-tools fa-3x text-primary"></i>
                                    </div>
                                </div>
                                <h5>Professional Installation</h5>
                                <p>Expert mounting and setup by our certified technicians</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="process-item text-center p-4">
                                <div className="process-icon mb-4">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                                         style={{width: '90px', height: '90px'}}>
                                        <i className="fas fa-cog fa-3x text-primary"></i>
                                    </div>
                                </div>
                                <h5>Configuration</h5>
                                <p>Optimal setup and testing of your Starlink system</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="process-item text-center p-4">
                                <div className="process-icon mb-4">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                                         style={{width: '90px', height: '90px'}}>
                                        <i className="fas fa-check-circle fa-3x text-primary"></i>
                                    </div>
                                </div>
                                <h5>Final Testing</h5>
                                <p>Comprehensive speed and connection quality verification</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Installation Process End --> */}

            {/* <!-- FAQ Section Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">FAQ</h4>
                        <h1 className="display-5 mb-3">Frequently Asked Questions</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <h5>What speeds can I expect from Starlink?</h5>
                                <p className="mb-0">Users typically experience download speeds between 100-200+ Mbps, with some areas receiving even faster connections.</p>
                            </div>
                            <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <h5>Is professional installation necessary?</h5>
                                <p className="mb-0">While self-installation is possible, professional installation ensures optimal placement and performance of your Starlink system.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <h5>How long does installation take?</h5>
                                <p className="mb-0">A typical professional installation takes 2-3 hours, including setup and testing.</p>
                            </div>
                            <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <h5>What affects Starlink performance?</h5>
                                <p className="mb-0">Performance can be affected by weather conditions, obstructions like trees or buildings, and satellite coverage in your area.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FAQ Section End --> */}

            {/* <!-- Subscription Renewal Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Subscription</h4>
                        <h1 className="display-5 mb-3">Renew Your Starlink Subscription</h1>
                        
                        <div 
                            className="subscription-toggle" 
                            data-active={activePlan}
                            role="group" 
                            aria-label="Subscription type"
                        >
                            <div className="slider"></div>
                            <button 
                                type="button" 
                                className={activePlan === 'personal' ? 'active' : ''}
                                onClick={() => setActivePlan('personal')}
                            >
                                <i className="fas fa-user me-2"></i>
                                Personal
                            </button>
                            <button 
                                type="button" 
                                className={activePlan === 'business' ? 'active' : ''}
                                onClick={() => setActivePlan('business')}
                            >
                                <i className="fas fa-building me-2"></i>
                                Business
                            </button>
                        </div>
                    </div>
                    <div className="row g-4">
                        {activePlan === 'personal' 
                            ? personalSubscriptionPackages.map(pkg => renderSubscriptionPackage(pkg))
                            : subscriptionPackages.map(pkg => renderSubscriptionPackage(pkg))
                        }
                    </div>
                </div>
            </div>
            {/* <!-- Subscription Renewal End --> */}

            {/* <!-- Support Form Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Support</h4>
                        <h1 className="display-5 mb-3">Need Help with Starlink?</h1>
                        <p className="mb-0">Fill out the form below and our team will get back to you shortly</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white rounded p-5" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                {success && (
                                    <div className="alert alert-success" role="alert">
                                        Your support request has been submitted successfully! Check your email for confirmation.
                                    </div>
                                )}

                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="name" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Your Name"
                                                    required 
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    id="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Your Email"
                                                    required 
                                                />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="phoneNumber" 
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handleInputChange}
                                                    placeholder="Phone Number"
                                                    required 
                                                />
                                                <label htmlFor="phoneNumber">Phone Number</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <select 
                                                    className="form-select" 
                                                    id="issueType"
                                                    name="issueType"
                                                    value={formData.issueType}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="">Select Issue Type</option>
                                                    <option value="Installation Support">Installation Support</option>
                                                    <option value="Technical Support">Technical Support</option>
                                                    <option value="Billing Inquiry">Billing Inquiry</option>
                                                    <option value="Product Information">Product Information</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <label htmlFor="issueType">Type of Issue</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea 
                                                    className="form-control" 
                                                    placeholder="Leave a message here" 
                                                    id="issueDescription" 
                                                    name="issueDescription"
                                                    value={formData.issueDescription}
                                                    onChange={handleInputChange}
                                                    style={{height: '150px'}}
                                                    required
                                                ></textarea>
                                                <label htmlFor="issueDescription">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button 
                                                className="btn btn-primary py-3 px-5" 
                                                type="submit"
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <span>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <span>
                                                        <i className="fas fa-paper-plane me-2"></i>Send Message
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Support Form End --> */}

            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer py-1 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* First Column - Logo and Description */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <div className="footer-item">
                                    <img src="img/logoF.jpg.png" alt="Company Logo" style={{ width: "150px", height: "auto" }} className="mb-4" />
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

export default Starlink 