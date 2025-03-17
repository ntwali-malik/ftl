import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Network Infrastructure",
            description: "High-Speed Network Setup for Corporate Offices.",
            icon: "fas fa-network-wired",
            image: "img/netw.jpg",
            link: "/network",
            color: "#4e73df" // Blue
        },
        {
            id: 2,
            title: "Digital Security",
            description: "Comprehensive Digital Security Solutions.",
            icon: "fas fa-shield-alt",
            image: "img/Biometric-Technologies.jpg",
            link: "/digitalSecurity",
            color: "#1cc88a" // Green
        },
        {
            id: 3,
            title: "Starlink Installation",
            description: "Professional Starlink setup and configuration for high-speed internet anywhere.",
            icon: "fas fa-satellite",
            image: "img/starlink.jpg",
            link: "/starlink",
            color: "#36b9cc" // Cyan
        },
        {
            id: 4,
            title: "Software Development",
            description: "Bespoke ERP System for Small Businesses.",
            icon: "fas fa-code",
            image: "img/software.jpeg",
            link: "/softwareDevelopment",
            color: "#f6c23e" // Yellow
        },
        {
            id: 5,
            title: "Canal+ & DStv Services",
            description: "Installation & Subscription Services for Canal+ and DStv.",
            icon: "fas fa-tv",
            image: "img/Canal+andDstv.jpg",
            link: "/canalDstv",
            color: "#e74a3b" // Red
        },
        {
            id: 6,
            title: "Internships & Short Courses",
            description: "Gain Practical Experience with Our Internship Programs.",
            icon: "fas fa-graduation-cap",
            image: "img/internship.jpg",
            link: "/internship",
            color: "#858796" // Gray
        }
    ];

    const containerStyle = {
        padding: '5rem 1rem',
        backgroundColor: '#f8f9fa'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
    };

    const cardStyle = {
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
    };

    const imageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    };

    const contentStyle = {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        justifyContent: 'space-between'
    };

    const iconContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        margin: '-35px auto 1.5rem',
        position: 'relative',
        top: '15px'
    };

    return (
        <div style={containerStyle}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                <h4 className="display-4 mb-4 wow fadeInDown" 
                    data-wow-delay="0.1s"
                    style={{
                        display: 'inline-block',
                        color: 'sky-blue',
                        marginBottom: '1rem'
                    }}>
                    Our Services
                </h4>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    color: '#2c3e50'
                }}>
                    Providing Expert IT Solutions
                </h1>
                <p style={{
                    fontSize: '1.1rem',
                    color: '#6c757d'
                }}>
                    We offer top-notch solutions tailored to your business needs.
                </p>
            </div>

            <div style={gridStyle}>
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        style={cardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <img 
                            src={service.image} 
                            alt={service.title}
                            style={imageStyle}
                        />
                        <div style={contentStyle}>
                            <div>
                                <div 
                                    style={{
                                        ...iconContainerStyle,
                                        backgroundColor: `${service.color}20`
                                    }}
                                >
                                    <i 
                                        className={`${service.icon} fa-2x`}
                                        style={{color: service.color}}
                                    />
                                </div>
                                <h3 style={{
                                    textAlign: 'center',
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    color: '#2c3e50'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    textAlign: 'center',
                                    color: '#6c757d',
                                    marginBottom: '1.5rem'
                                }}>
                                    {service.description}
                                </p>
                            </div>
                            <div style={{textAlign: 'center', marginTop: 'auto'}}>
                                <a 
                                    href={service.link}
                                    style={{
                                        backgroundColor: service.color,
                                        color: 'white',
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'opacity 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                >
                                    Read More
                                    <i className="fas fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
