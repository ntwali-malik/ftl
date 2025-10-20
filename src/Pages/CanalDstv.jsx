import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import decoderOrderService from '../services/decoderOrderService';
import TechnicalSupportService from '../services/TechnicalSupportService';

function CanalDstv() {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('mtn'); // 'mtn' or 'airtel'
    const [paymentDetails, setPaymentDetails] = useState({
        smartCard: '',
        phone: '',
        email: '',
        name: ''
    });
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [subscriptionHistory, setSubscriptionHistory] = useState([]);
    const [showDecoderPaymentModal, setShowDecoderPaymentModal] = useState(false);
    const [decoderOrderDetails, setDecoderOrderDetails] = useState({
        decoderType: '',
        installationType: '',
        name: '',
        phone: '',
        email: '',
        location: '',
    });
    const [technicalSupportForm, setTechnicalSupportForm] = useState({
        serviceProvider: '',
        issueType: '',
        smartCardNumber: '',
        issueDescription: '',
        name: '',
        phoneNumber: '',
        email: ''
    });
    const [selectedPackageType, setSelectedPackageType] = useState('dstv');

    // Enhanced styles with animations and responsive design
    const styles = {
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050,
            padding: '1rem'
        },
        modalDialog: {
            width: '900px',
            maxWidth: '95%',
            margin: '20px auto',
            position: 'relative'
        },
        modalContent: {
            display: 'flex',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        },
        modalSidebar: {
            width: '300px',
            background: 'linear-gradient(135deg, #0d6efd, #0a58ca)',
            padding: '2rem',
            color: '#fff'
        },
        modalMain: {
            flex: 1,
            padding: '2rem',
            backgroundColor: '#fff'
        },
        paymentMethods: {
            display: 'flex',
            gap: '15px',
            marginBottom: '25px'
        },
        paymentMethodCard: {
            flex: 1,
            padding: '15px',
            border: '2px solid #dee2e6',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease'
        },
        selectedPaymentMethod: {
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13, 110, 253, 0.05)'
        },
        formGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px'
        },
        inputGroup: {
            marginBottom: '15px'
        },
        input: {
            width: '100%',
            padding: '12px',
            border: '2px solid #dee2e6',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
        },
        payButton: {
            width: '100%',
            padding: '14px',
            backgroundColor: '#0d6efd',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        },
        spinner: {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            borderTopColor: 'white',
            animation: 'spin 1s ease-in-out infinite'
        },
        packageCard: {
            transition: 'transform 0.3s, box-shadow 0.3s',
            borderRadius: '15px',
            overflow: 'hidden',
            border: 'none'
        },
        popularBadge: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'linear-gradient(45deg, #ff6b6b, #ff8787)',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '500',
            boxShadow: '0 4px 15px rgba(255, 107, 107, 0.35)'
        }
    };

    // Create a separate constant for CSS animations
    const cssAnimations = `
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .bg-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
        }

        .package-card {
            border: none;
        }

        .package-card:hover {
            transform: translateY(-10px);
            transition: all 0.3s ease;
        }

        .feature-list li {
            font-size: 0.95rem;
            color: #6c757d;
        }

        .feature-list li i {
            font-size: 1.1rem;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2);
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        .features-container::-webkit-scrollbar {
            width: 6px;
        }

        .features-container::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
        }

        .features-container::-webkit-scrollbar-thumb {
            background: #0d6efd;
            border-radius: 3px;
        }

        .features-container::-webkit-scrollbar-thumb:hover {
            background: #0043a8;
        }

        .package-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        @keyframes pulse {
            0% {
                transform: rotate(-45deg) scale(1);
            }
            50% {
                transform: rotate(-45deg) scale(1.05);
            }
            100% {
                transform: rotate(-45deg) scale(1);
            }
        }

        .popular-ribbon {
            animation: pulse 2s infinite;
        }
    `;

    // Add keyframe animations
    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { 
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }

            @media (max-width: 768px) {
                .modal-dialog {
                    margin: 0.5rem;
                }
                
                .form-control {
                    font-size: 16px; /* Prevents zoom on mobile */
                }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    useEffect(() => {
        document.body.style.overflow = showPaymentModal ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showPaymentModal]);

    const canalPackages = [
        {
            id: 'c1',
            name: 'IKAZE',
            price: 5000,
            channels: '70+ channels',
            features: [
                'Local channels (RTV, Rwanda TV)',
                'News channels (France 24, BBC World)',
                'Kids channels (Gulli Africa)',
                'Entertainment channels',
                'Religious channels',
                'Music channels (Trace Africa)',
                'Educational content',
                'African series and movies'
            ],
            provider: 'Canal+'
        },
        {
            id: 'c2',
            name: 'ZAMUKA',
            price: 10000,
            channels: '100+ channels',
            features: [
                'All IKAZE features',
                'Premium entertainment channels',
                'Extended news coverage',
                'More kids channels',
                'Documentary channels',
                'Fashion TV',
                'Lifestyle channels',
                'African premium content',
                'Extended music selection',
                'More movie channels'
            ],
            provider: 'Canal+'
        },
        {
            id: 'c3',
            name: 'ZAMUKA NA SIPORO',
            price: 20000,
            channels: '150+ channels',
            features: [
                'All ZAMUKA features',
                'Sports channels (Canal+ Sport)',
                'Live football matches',
                'International sports coverage',
                'Premium movie channels',
                'Extended entertainment package',
                'HD channels available',
                'Premium series channels',
                'International entertainment',
                'Enhanced documentary selection'
            ],
            provider: 'Canal+'
        },
        {
            id: 'c4',
            name: 'UBUKI',
            price: 30000,
            channels: 'FULL BOUQUET',
            features: [
                'All ZAMUKA NA SIPORO features',
                'Complete sports package',
                'All premium movie channels',
                'Exclusive international content',
                'All entertainment channels',
                'Complete documentary selection',
                'Full HD channels',
                'Premium series and shows',
                'Priority customer service',
                'Multi-device streaming',
                'First access to new content',
                'Video on demand service'
            ],
            provider: 'Canal+'
        }
    ];

    const dstvPackages = [
        {
            id: 'd1',
            name: 'DSTV Isange',
            price: 5000,
            channels: '80+ channels',
            features: [
                'DSTV Now',
                '40 DMX Audio Channels',
                'Local & International Novelas',
                'Local & International News',
                'French Channels'
            ],
            provider: 'DStv'
        },
        {
            id: 'd2',
            name: 'DSTV Iwacu',
            price: 10000,
            channels: '100+ channels',
            features: [
                'Local & International Novelas',
                'Local & International News',
                'Kid\'s Channels',
                'Dedicated Home-Grown Channels',
                'Supersport 7 & 8',
                'DSTV Now',
                'French Channels'
            ],
            provider: 'DStv'
        },
        {
            id: 'd3',
            name: 'DSTV Inganji',
            price: 20000,
            channels: '120+ channels',
            features: [
                'Live Coverage of the best Football Leagues',
                'Local & International Novelas',
                'Local & International News',
                'Kid\'s Channels',
                'Dedicated Home-Grown Channels',
                'Hand-Picked channels',
                'DSTV Now',
                'French Channels'
            ],
            provider: 'DStv'
        },
        {
            id: 'd4',
            name: 'DSTV Ishema',
            price: 30000,
            channels: '130+ channels',
            features: [
                'International Series',
                'Local & International Movies',
                'Local & International News',
                'Kid\'s Channels',
                'DSTV Now',
                'Dedicated Home-Grown Channels',
                'Best LifeStyle Channels',
                'Live European Football',
                'Best Local Drama & Documentaries'
            ],
            provider: 'DStv'
        },
        {
            id: 'd5',
            name: 'DSTV Premium',
            price: 100000,
            channels: '140+ channels',
            features: [
                'All Sports & All European Football',
                'Local & International Novelas',
                'All Our Kid Channels',
                'DSTV Now',
                'Dedicated Home-Grown Content',
                'Best Local Drama & Documentaries',
                'The Movies & Series Destination',
                'Surprise Pop Up & More HD Channels',
                'Watch It First Express From the US'
            ],
            provider: 'DStv'
        }
    ];

    const handlePackageSelect = (pkg) => {
        setSelectedPackage(pkg);
        setShowPaymentModal(true);
        resetForm();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prev => ({
            ...prev,
            [name]: value
        }));
        if (validationErrors[name]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        
        if (!paymentDetails.smartCard) {
            errors.smartCard = 'Smart card number is required';
        } else if (!/^\d{10,12}$/.test(paymentDetails.smartCard)) {
            errors.smartCard = 'Invalid smart card number (10-12 digits)';
        }

        if (!paymentDetails.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^07[8,2,3,9]\d{7}$/.test(paymentDetails.phone)) {
            errors.phone = 'Invalid Rwanda phone number';
        }

        if (!paymentDetails.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(paymentDetails.email)) {
            errors.email = 'Invalid email address';
        }

        if (!paymentDetails.name) {
            errors.name = 'Full name is required';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            const newSubscription = {
                id: Date.now(),
                package: selectedPackage.name,
                date: new Date().toISOString(),
                status: 'pending',
                amount: selectedPackage.price,
                paymentMethod: paymentMethod,
                smartCard: paymentDetails.smartCard
            };
            setSubscriptionHistory(prev => [newSubscription, ...prev]);

            toast.success(`Payment request sent! Please check your ${paymentMethod.toUpperCase()} to confirm payment.`);
            setShowPaymentModal(false);
            resetForm();
        } catch (error) {
            toast.error('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setPaymentDetails({
            smartCard: '',
            phone: '',
            email: '',
            name: ''
        });
        setValidationErrors({});
    };

    const handleDecoderOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Get values from the form
            const orderData = {
                decoderType: decoderOrderDetails.decoderType,
                installationType: decoderOrderDetails.installationType,
                name: decoderOrderDetails.name,
                phone: decoderOrderDetails.phone, // Note: using 'phone' to match the form data
                email: decoderOrderDetails.email,
                location: decoderOrderDetails.location
            };

            // Call the service to submit the order
            const result = await decoderOrderService.createDecoderOrder(orderData);

            if (result.success) {
                toast.success('Order submitted successfully! Please check your email for confirmation.');
                
                // Reset the form
                setDecoderOrderDetails({
                    decoderType: '',
                    installationType: '',
                    name: '',
                    phone: '',
                    email: '',
                    location: '',
                });
            } else {
                toast.error(result.message || 'Failed to submit order. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting decoder order:', error);
            toast.error('An error occurred while submitting your order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleTechnicalSupportSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await TechnicalSupportService.createTechnicalSupport(technicalSupportForm);
            toast.success('Technical support request submitted successfully! Check your email for confirmation.');
            
            // Reset form
            setTechnicalSupportForm({
                serviceProvider: '',
                issueType: '',
                smartCardNumber: '',
                issueDescription: '',
                name: '',
                phoneNumber: '',
                email: ''
            });
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleTechnicalSupportInputChange = (e) => {
        const { name, value } = e.target;
        setTechnicalSupportForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const renderDecoderPaymentModal = () => (
        <div style={styles.modalOverlay}>
            <div style={styles.modalDialog}>
                <div style={styles.modalContent}>
                    <div style={styles.modalSidebar}>
                        <h4 className="text-white mb-4">Order Summary</h4>
                        <div className="package-details">
                            <div className="mb-4">
                                <small className="text-light-50">Decoder Type</small>
                                <h3 className="text-white">{decoderOrderDetails.decoderType === 'canal' ? 'Canal+' : 'DStv'}</h3>
                            </div>
                            <div className="mb-4">
                                <small className="text-light-50">Installation Type</small>
                                <h4 className="text-white">{decoderOrderDetails.installationType === 'new' ? 'New Installation' : 'Replacement'}</h4>
                            </div>
                            <div className="mb-4">
                                <small className="text-light-50">Price</small>
                                <h4 className="text-white">
                                    {decoderOrderDetails.decoderType === 'canal' ? '25,000' : '30,000'} RWF
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div style={styles.modalMain}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="mb-0">Payment Details</h4>
                            <button 
                                type="button" 
                                className="btn-close"
                                onClick={() => setShowDecoderPaymentModal(false)}
                            ></button>
                        </div>

                        <form onSubmit={handleDecoderPayment}>
                            <div className="payment-methods mb-4">
                                <label className="mb-3">Select Payment Method</label>
                                <div className="d-flex gap-3">
                                    <div 
                                        className={`payment-option ${paymentMethod === 'mtn' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('mtn')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src="/img/mtn-logo.png" alt="MTN" height="30" />
                                            <span className="ms-2">MTN Mobile Money</span>
                                        </div>
                                    </div>
                                    <div 
                                        className={`payment-option ${paymentMethod === 'airtel' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('airtel')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src="/img/airtel-logo.png" alt="Airtel" height="30" />
                                            <span className="ms-2">Airtel Money</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="paymentPhone"
                                    placeholder="Enter phone number"
                                    value={decoderOrderDetails.phone}
                                    readOnly
                                />
                                <label htmlFor="paymentPhone">Phone Number</label>
                            </div>

                            <div className="mt-4 d-flex justify-content-end gap-2">
                                <button 
                                    type="button" 
                                    className="btn btn-light"
                                    onClick={() => setShowDecoderPaymentModal(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Processing...
                                        </>
                                    ) : (
                                        `Pay ${decoderOrderDetails.decoderType === 'canal' ? '25,000' : '30,000'} RWF`
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    const handleDecoderPayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 2000));
            toast.success('Payment successful! Our team will contact you soon for installation.');
            setShowDecoderPaymentModal(false);
            setDecoderOrderDetails({
                decoderType: '',
                installationType: '',
                name: '',
                phone: '',
                email: '',
                location: '',
            });
        } catch (error) {
            toast.error('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const renderPaymentModal = () => (
        <div style={styles.modalOverlay}>
            <div style={styles.modalDialog}>
                <div style={styles.modalContent}>
                    <div style={styles.modalSidebar}>
                        <h4 className="text-white mb-4">Package Summary</h4>
                        <div className="package-details">
                            <div className="mb-4">
                                <small className="text-light-50">Selected Package</small>
                                <h3 className="text-white">{selectedPackage?.name}</h3>
                            </div>
                            <div className="mb-4">
                                <small className="text-light-50">Monthly Fee</small>
                                <h4 className="text-white">{selectedPackage?.price.toLocaleString()} RWF</h4>
                            </div>
                            <div className="features">
                                <small className="text-light-50 d-block mb-3">Package Features:</small>
                                {selectedPackage?.features.map((feature, index) => (
                                    <div key={index} className="d-flex align-items-center mb-2">
                                        <i className="fas fa-check text-white me-2"></i>
                                        <span className="text-white-50">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={styles.modalMain}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="mb-0">Payment Details</h4>
                            <button 
                                type="button" 
                                className="btn-close"
                                onClick={() => setShowPaymentModal(false)}
                            ></button>
                        </div>

                        <form onSubmit={handlePayment}>
                            <div className="payment-methods mb-4">
                                <label className="mb-3">Select Payment Method</label>
                                <div className="d-flex gap-3">
                                    <div 
                                        className={`payment-option ${paymentMethod === 'mtn' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('mtn')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src="/img/mtn-logo.png" alt="MTN" height="30" />
                                            <span className="ms-2">MTN Mobile Money</span>
                                        </div>
                                    </div>
                                    <div 
                                        className={`payment-option ${paymentMethod === 'airtel' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('airtel')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src="/img/airtel-logo.png" alt="Airtel" height="30" />
                                            <span className="ms-2">Airtel Money</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className={`form-control ${validationErrors.smartCard ? 'is-invalid' : ''}`}
                                            id="smartCard"
                                            name="smartCard"
                                            placeholder="Enter smart card number"
                                            value={paymentDetails.smartCard}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="smartCard">Smart Card Number</label>
                                        {validationErrors.smartCard && (
                                            <div className="invalid-feedback">{validationErrors.smartCard}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={paymentDetails.name}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="name">Full Name</label>
                                        {validationErrors.name && (
                                            <div className="invalid-feedback">{validationErrors.name}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="tel"
                                            className={`form-control ${validationErrors.phone ? 'is-invalid' : ''}`}
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter phone number"
                                            value={paymentDetails.phone}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="phone">Phone Number</label>
                                        {validationErrors.phone && (
                                            <div className="invalid-feedback">{validationErrors.phone}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            name="email"
                                            placeholder="Enter email"
                                            value={paymentDetails.email}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="email">Email Address</label>
                                        {validationErrors.email && (
                                            <div className="invalid-feedback">{validationErrors.email}</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 d-flex justify-content-end gap-2">
                                <button 
                                    type="button" 
                                    className="btn btn-light"
                                    onClick={() => setShowPaymentModal(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Processing...
                                        </>
                                    ) : (
                                        `Pay ${selectedPackage?.price.toLocaleString()} RWF`
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSupportSection = () => (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="text-primary">Support & Orders</h4>
                    <h1 className="display-5 mb-4">Need a New Decoder or Technical Support?</h1>
                </div>
                
                <div className="row g-4">
                    {/* Decoder Order Card */}
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="mb-4">
                                    <h4 className="card-title text-primary">Order New Decoder</h4>
                                    <p className="text-muted">Get your new Canal+ or DStv decoder with professional installation</p>
                                </div>
                                <form onSubmit={handleDecoderOrder}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <select 
                                                className="form-select py-3" 
                                                required
                                                value={decoderOrderDetails.decoderType}
                                                onChange={(e) => setDecoderOrderDetails(prev => ({
                                                    ...prev,
                                                    decoderType: e.target.value
                                                }))}
                                            >
                                                <option value="">Select Decoder Type</option>
                                                <option value="canal">Canal+ Decoder</option>
                                                <option value="dstv">DStv Decoder</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <select 
                                                className="form-select py-3" 
                                                required
                                                value={decoderOrderDetails.installationType}
                                                onChange={(e) => setDecoderOrderDetails(prev => ({
                                                    ...prev,
                                                    installationType: e.target.value
                                                }))}
                                            >
                                                <option value="">Installation Type</option>
                                                <option value="new">New Installation</option>
                                                <option value="replacement">Replacement</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <input 
                                                type="text" 
                                                className="form-control py-3" 
                                                placeholder="Your Name" 
                                                required
                                                value={decoderOrderDetails.name}
                                                onChange={(e) => setDecoderOrderDetails(prev => ({
                                                    ...prev,
                                                    name: e.target.value
                                                }))}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input 
                                                type="tel" 
                                                className="form-control py-3" 
                                                placeholder="Phone Number" 
                                                required
                                                value={decoderOrderDetails.phone}
                                                onChange={(e) => setDecoderOrderDetails(prev => ({
                                                    ...prev,
                                                    phone: e.target.value
                                                }))}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input 
                                                type="email" 
                                                className="form-control py-3" 
                                                placeholder="Email Address"
                                                value={decoderOrderDetails.email}
                                                onChange={(e) => setDecoderOrderDetails(prev => ({
                                                    ...prev,
                                                    email: e.target.value
                                                }))}
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input 
                                                type="text" 
                                                className="form-control py-3" 
                                                placeholder="Your Location" 
                                                required
                                                value={decoderOrderDetails.location}
                                                onChange={(e) => setDecoderOrderDetails(prev => ({
                                                    ...prev,
                                                    location: e.target.value
                                                }))}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button 
                                                className="btn btn-primary w-100 py-3" 
                                                type="submit"
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Submitting Order...
                                                    </>
                                                ) : (
                                                    'Order Decoder'
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Technical Support Card */}
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="mb-4">
                                    <h4 className="card-title text-primary">Technical Support</h4>
                                    <p className="text-muted">Having issues with your decoder? Let us help you</p>
                                </div>
                                <form onSubmit={handleTechnicalSupportSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <select 
                                                className="form-select py-3" 
                                                name="serviceProvider"
                                                value={technicalSupportForm.serviceProvider}
                                                onChange={handleTechnicalSupportInputChange}
                                                required
                                            >
                                                <option value="">Service Provider</option>
                                                <option value="canal">Canal+</option>
                                                <option value="dstv">DStv</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <select 
                                                className="form-select py-3" 
                                                name="issueType"
                                                value={technicalSupportForm.issueType}
                                                onChange={handleTechnicalSupportInputChange}
                                                required
                                            >
                                                <option value="">Issue Type</option>
                                                <option value="signal">Signal Problems</option>
                                                <option value="activation">Activation Issues</option>
                                                <option value="hardware">Hardware Problems</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <input 
                                                type="text" 
                                                className="form-control py-3" 
                                                placeholder="Smart Card Number (if applicable)"
                                                name="smartCardNumber"
                                                value={technicalSupportForm.smartCardNumber}
                                                onChange={handleTechnicalSupportInputChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea 
                                                className="form-control py-3" 
                                                rows="3" 
                                                placeholder="Describe your issue"
                                                name="issueDescription"
                                                value={technicalSupportForm.issueDescription}
                                                onChange={handleTechnicalSupportInputChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <input 
                                                type="text" 
                                                className="form-control py-3" 
                                                placeholder="Your Name"
                                                name="name"
                                                value={technicalSupportForm.name}
                                                onChange={handleTechnicalSupportInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input 
                                                type="tel" 
                                                className="form-control py-3" 
                                                placeholder="Phone Number"
                                                name="phoneNumber"
                                                value={technicalSupportForm.phoneNumber}
                                                onChange={handleTechnicalSupportInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input 
                                                type="email" 
                                                className="form-control py-3" 
                                                placeholder="Email Address"
                                                name="email"
                                                value={technicalSupportForm.email}
                                                onChange={handleTechnicalSupportInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button 
                                                className="btn btn-primary w-100 py-3" 
                                                type="submit"
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    'Submit Support Request'
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
        </div>
    );

    const renderPackage = (pkg) => (
        <div key={pkg.id} className="col-lg-4 col-md-6 mb-4">
            <div className="package-card h-100 position-relative d-flex flex-column"
                 style={{
                     background: 'white',
                     borderRadius: '20px',
                     overflow: 'hidden',
                     border: pkg.name === 'DSTV Premium' ? 
                         '2px solid rgba(255, 215, 0, 0.5)' : 
                         '1px solid rgba(0,0,0,0.08)',
                     transition: 'all 0.4s ease',
                     boxShadow: pkg.name === 'DSTV Premium' ? 
                         '0 0 20px rgba(255, 215, 0, 0.2)' : 
                         'none'
                 }}>
                
                {/* Price Tag */}
                <div className="price-banner position-absolute end-0 top-0 px-3 py-2"
                     style={{
                         background: pkg.name === 'DSTV Premium' ? 
                             'linear-gradient(135deg, #FFD700, #FFA500)' : 
                             'linear-gradient(135deg, #0d6efd, #0043a8)',
                         borderBottomLeftRadius: '15px',
                         color: 'white',
                         boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                         minWidth: '140px',
                         zIndex: 1
                     }}>
                    <h4 className="mb-0 fw-bold" style={{ fontSize: '1.2rem' }}>{pkg.price.toLocaleString()} RWF</h4>
                    <small className="text-white opacity-75">per month</small>
                </div>

                {/* Package Content */}
                <div className="p-4 d-flex flex-column h-100">
                    {/* Package Header */}
                    <div className="mb-4" style={{ maxWidth: 'calc(100% - 150px)' }}>
                        <h3 className="fw-bold text-primary mb-2">{pkg.name}</h3>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-light text-primary px-3 py-2 rounded-pill">
                                {pkg.channels}
                            </span>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="features-container px-2 mb-4 flex-grow-1" 
                         style={{
                             maxHeight: '300px', 
                             overflowY: 'auto'
                         }}>
                        {pkg.features.map((feature, index) => (
                            <div key={index} 
                                 className="feature-item d-flex align-items-center mb-3 p-2 rounded"
                                 style={{
                                     background: 'rgba(13, 110, 253, 0.05)',
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
                                <div className="feature-icon me-3"
                                     style={{
                                         minWidth: '30px',
                                         height: '30px',
                                         borderRadius: '50%',
                                         background: 'white',
                                         display: 'flex',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                                     }}>
                                    <i className="fas fa-check text-primary" style={{fontSize: '12px'}}></i>
                                </div>
                                <span style={{fontSize: '0.9rem'}}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Subscribe Button - Now positioned at bottom */}
                    <div className="mt-auto">
                        <a href={`https://wa.me/250787850294?text=I'm interested in subscribing to ${pkg.name} package for ${pkg.price.toLocaleString()} RWF`}
                           className="subscribe-btn d-inline-flex align-items-center justify-content-center gap-2 w-100"
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{
                               background: pkg.name === 'DSTV Premium' ? 
                                   'linear-gradient(45deg, #FFD700, #FFA500)' : 
                                   'linear-gradient(45deg, #0d6efd, #0043a8)',
                               color: 'white',
                               padding: '12px 30px',
                               borderRadius: '50px',
                               textDecoration: 'none',
                               fontWeight: '500',
                               transition: 'all 0.3s ease',
                               border: 'none',
                               boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                           }}
                           onMouseEnter={(e) => {
                               e.currentTarget.style.transform = 'translateY(-3px)';
                               e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                           }}
                           onMouseLeave={(e) => {
                               e.currentTarget.style.transform = 'translateY(0)';
                               e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                           }}>
                            <i className="fab fa-whatsapp" style={{fontSize: '1.2rem'}}></i>
                            <span>Subscribe Now</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = cssAnimations;
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
                    <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                                <a href= "mailto:info@fabritech.rw" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.rw</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></a>
                                <a href="https://www.instagram.com/fabritech_ltd/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></a>
                                <a href="https://www.linkedin.com/in/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-linkedin-in text-white"></i></a>
                                <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech&amp;phone=+250788601280" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
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
                            <img src="img/F_logo.png" alt="Logo" style={{ height: '40px' }} />
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
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Installation</h4>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="/service">Service</a></li>
                        <li className="breadcrumb-item active text-primary">Canal + and Dstv</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}
            {/* <!-- Canal+ & DStv Services Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-5 mb-4">Premium Entertainment at Your Fingertips</h1>
                            <p className="mb-4">Experience world-class entertainment with professional Canal+ and DStv installation services from Fabritech. We ensure crystal-clear reception and seamless setup for your ultimate viewing pleasure.</p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>Professional Installation</h6>
                                            <span>Expert technicians for perfect signal reception</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>Quick Service</h6>
                                            <span>Same-day installation and activation</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>24/7 Support</h6>
                                            <span>Round-the-clock technical assistance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative overflow-hidden rounded">
                                <img src="img/dstv.jpg" className="w-100" alt="DStv Installation" />
                                <div className="position-absolute" style={{
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(11, 33, 84, 0.1)'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Canal+ & DStv Services End --> */}

            {/* Services Section */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Our Services</h4>
                        <h1 className="display-5 mb-4">Complete Satellite TV Solutions</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/canal+.jpg"
                                    alt="Canal+"
                                    style={{
                                        height: '250px',
                                        objectFit: 'cover',
                                        padding: '15px'
                                    }} />
                                <div className="card-body text-center">
                                    <h3 className="card-title h5 text-primary">Canal+ Services</h3>
                                    <p className="card-text">Complete Canal+ installation and subscription services.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>New Installations</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Subscription Renewal</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Technical Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/dstv.jpg"
                                    alt="DStv"
                                    style={{
                                        height: '250px',
                                        objectFit: 'contain',
                                        padding: '15px'
                                    }} />
                                <div className="card-body text-center">
                                    <h3 className="card-title h5 text-primary">DStv Solutions</h3>
                                    <p className="card-text">Professional DStv installation and maintenance services.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Full Installation</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Package Upgrades</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Signal Optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Why Choose Us</h4>
                        <h1 className="display-5 mb-4">Your Trusted Installation Partner</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-white text-center rounded p-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-tools text-white fs-5"></i>
                                </div>
                                <h4 className="mb-3">Expert Installation</h4>
                                <p className="mb-4">Professional technicians with years of experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-white text-center rounded p-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-headset text-white fs-5"></i>
                                </div>
                                <h4 className="mb-3">24/7 Support</h4>
                                <p className="mb-4">Always available to assist with any issues</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-white text-center rounded p-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-check text-white fs-5"></i>
                                </div>
                                <h4 className="mb-3">Quality Service</h4>
                                <p className="mb-4">Guaranteed satisfaction with our service</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item bg-white text-center rounded p-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-dollar-sign text-white fs-5"></i>
                                </div>
                                <h4 className="mb-3">Competitive Pricing</h4>
                                <p className="mb-4">Best value for professional installation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subscription Packages Section */}
            <div className="container-fluid py-5 bg-light">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h4 className="text-primary">Our Packages</h4>
                        <h1 className="display-5 mb-3">Choose Your Package</h1>
                        <p className="text-muted mb-0">Select from our range of premium entertainment packages</p>
                    </div>

                    {/* Package Type Selector */}
                    <div className="text-center mb-4">
                        <div className="btn-group" role="group" aria-label="Package type selector">
                            <button 
                                type="button" 
                                className={`btn ${selectedPackageType === 'dstv' ? 'btn-primary' : 'btn-outline-primary'} px-4 py-2`}
                                onClick={() => setSelectedPackageType('dstv')}
                            >
                                DStv Packages
                            </button>
                            <button 
                                type="button" 
                                className={`btn ${selectedPackageType === 'canal' ? 'btn-primary' : 'btn-outline-primary'} px-4 py-2`}
                                onClick={() => setSelectedPackageType('canal')}
                            >
                                Canal+ Packages
                            </button>
                        </div>
                    </div>

                    {/* Packages Grid */}
                    <div className="row g-4">
                        {selectedPackageType === 'dstv' ? (
                            // DSTV Packages
                            dstvPackages.map(pkg => renderPackage(pkg))
                        ) : (
                            // Canal+ Packages
                            canalPackages.map(pkg => renderPackage(pkg))
                        )}
                    </div>
                </div>
            </div>

            {showPaymentModal && renderPaymentModal()}
            {showDecoderPaymentModal && renderDecoderPaymentModal()}
            
            {/* {renderSubscriptionHistory()} */}
            
            {renderSupportSection()}
            
            {/* Contact Section */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 className="text-primary">Contact Us</h4>
                            <h1 className="display-5 mb-4">Need Installation or Support?</h1>
                            <p className="mb-4">Contact us today for professional Canal+ and DStv installation services. Our team is ready to assist you!</p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-phone-alt"></i>
                                        </div>
                                        <div className="ms-3">
                                            <h6>Call Us</h6>
                                            <span>+250788601280</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="ms-3">
                                            <h6>Mail Us</h6>
                                            <span>info@fabritech.rw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="bg-white rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
                                <img src="img/Canal+andDstv.jpg" alt="Canal+ and DStv" className="img-fluid rounded" />
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
                                    <img src="img/F_logo.png" alt="Company Logo" style={{ width: "150px", height: "auto" }} className="mb-4" />

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
        </div>
    )
}

export default CanalDstv