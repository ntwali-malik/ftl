import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTheme, themes } from '../context/ThemeContext';
import { useMediaQuery } from 'react-responsive';
import Confetti from 'react-confetti';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InternshipService from '../services/InternshipService';

// Enhanced styled components with theme support
const PageContainer = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.background};
    padding: 3rem 0;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        padding: 1rem 0;
    }
`;

const FormContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
`;

const FormCard = styled(motion.div)`
    background: ${({ theme }) => theme.card};
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    backdrop-filter: blur(10px);

    @media (max-width: 768px) {
        padding: 1.5rem;
        margin: 0 1rem;
    }
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    h1 {
        color: #2d3436;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    p {
        color: #636e72;
        font-size: 1.1rem;
    }
`;

const StepIndicator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
`;

const Step = styled.div`
    display: flex;
    align-items: center;
    margin: 0 1rem;

    .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${props => props.active ? '#0984e3' : '#dfe6e9'};
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .step-label {
        margin-left: 1rem;
        color: ${props => props.active ? '#0984e3' : '#b2bec3'};
        font-weight: ${props => props.active ? '600' : '400'};
    }

    &:not(:last-child)::after {
        content: '';
        height: 2px;
        width: 60px;
        background: ${props => props.completed ? '#0984e3' : '#dfe6e9'};
        margin: 0 1rem;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 2rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: #2d3436;
        font-weight: 500;
    }

    input, select {
        width: 100%;
        padding: 1rem;
        border: 2px solid #dfe6e9;
        border-radius: 10px;
        font-size: 1rem;
        transition: all 0.3s ease;

        &:focus {
            border-color: #0984e3;
            box-shadow: 0 0 0 4px rgba(9, 132, 227, 0.1);
            outline: none;
        }
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
`;

const Button = styled.button`
    padding: 1rem 2rem;
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;

    &.primary {
        background: #0984e3;
        color: white;

        &:hover {
            background: #0873c4;
            transform: translateY(-2px);
        }
    }

    &.secondary {
        background: #dfe6e9;
        color: #2d3436;

        &:hover {
            background: #c8d6e5;
        }
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

// Enhanced success popup styling
const SuccessPopup = styled(motion.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 500px;
    width: 90%;
`;

const SuccessIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #00b894;
    color: white;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
`;

// New interactive elements
const ThemeSelector = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 1000;

    @media (max-width: 768px) {
        position: static;
        justify-content: center;
        margin-bottom: 1rem;
    }
`;

const ThemeButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    &.active {
        transform: scale(1.2);
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
`;

// Progress indicator
const ProgressBar = styled(motion.div)`
    height: 4px;
    background: ${({ theme }) => theme.primary};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform-origin: 0%;
    z-index: 1000;
`;

function InternshipRegistration() {
    const { theme, currentTheme, setCurrentTheme } = useTheme();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        program: '',
        education: '',
        startDate: '',
        paymentMethod: '',
        paymentProof: null
    });
    const [loading, setLoading] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [step, setStep] = useState(1);
    const totalSteps = 2;

    // Calculate form progress
    useEffect(() => {
        const filledFields = Object.values(formData).filter(Boolean).length;
        const totalFields = Object.keys(formData).length;
        setProgress((filledFields / totalFields) * 100);
    }, [formData]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await InternshipService.registerIntern(formData);
            setShowSuccessPopup(true);
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                program: '',
                education: '',
                startDate: '',
                paymentMethod: '',
                paymentProof: null
            });
            setStep(1);
        } catch (error) {
            // Updated toast error handling
            toast.error(error?.response?.data?.message || 'An error occurred during registration', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                onClose: () => {} // Add empty onClose handler
            });
            console.error('Registration error:', error);
        } finally {
            setLoading(false);
        }
    };

    const nextStep = () => {
        // Validate required fields for step 1
        if (step === 1) {
            if (!formData.fullName || !formData.email || !formData.phone) {
                toast.error('Please fill in all required fields before proceeding', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    onClick: () => {},
                    onClose: () => {}
                });
                return;
            }
        }
        setStep(prev => Math.min(prev + 1, totalSteps));
    };

    const prevStep = () => {
        setStep(prev => Math.max(prev - 1, 1));
    };

    // Add file handling function
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            paymentProof: file
        }));
    };

    return (
        <PageContainer theme={theme}>
            <ProgressBar
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.3 }}
                theme={theme}
            />

            <ThemeSelector>
                {Object.keys(themes).map(themeName => (
                    <ThemeButton
                        key={themeName}
                        style={{ background: themes[themeName].primary }}
                        className={currentTheme === themeName ? 'active' : ''}
                        onClick={() => setCurrentTheme(themeName)}
                    />
                ))}
            </ThemeSelector>

            <FormContainer>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Header>
                        <motion.h1 variants={itemVariants}>
                            Join Our Internship Program
                        </motion.h1>
                        <motion.p variants={itemVariants}>
                            Take the first step towards your professional career
                        </motion.p>
                    </Header>

                    <FormCard>
                        <StepIndicator>
                            {[
                                { number: 1, label: 'Personal Info' },
                                { number: 2, label: 'Program Details' }
                            ].map((stepItem, index) => (
                                <Step 
                                    key={index}
                                    active={step >= stepItem.number}
                                    completed={step > stepItem.number}
                                >
                                    <div className="step-number">{stepItem.number}</div>
                                    <span className="step-label">{stepItem.label}</span>
                                </Step>
                            ))}
                        </StepIndicator>

                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                >
                                    <FormGroup>
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter your full name"
                                        />
                                    </FormGroup>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <FormGroup>
                                                <label>Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="your.email@example.com"
                                                />
                                            </FormGroup>
                                        </div>
                                        <div className="col-md-6">
                                            <FormGroup>
                                                <label>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="+250 7XX XXX XXX"
                                                />
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <ButtonGroup>
                                        <Button 
                                            type="button"
                                            className="primary"
                                            onClick={nextStep}
                                            style={{ marginLeft: 'auto' }}
                                        >
                                            Next →
                                        </Button>
                                    </ButtonGroup>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                >
                                    <form onSubmit={handleSubmit}>
                                        <FormGroup>
                                            <label>Select Program</label>
                                            <select
                                                name="program"
                                                value={formData.program}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Choose your program</option>
                                                <option value="biometric">Biometric System Engineering</option>
                                                <option value="cctv">CCTV Installation & Configuration</option>
                                                <option value="satellite">Satellite Engineering</option>
                                                <option value="networking">Network Engineering</option>
                                                <option value="web">Web Development</option>
                                            </select>
                                        </FormGroup>
                                        <FormGroup>
                                            <label>Educational Background</label>
                                            <input
                                                type="text"
                                                name="education"
                                                value={formData.education}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Your current education level and field"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <label>Preferred Start Date</label>
                                            <input
                                                type="date"
                                                name="startDate"
                                                value={formData.startDate}
                                                onChange={handleInputChange}
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <label>Payment Method</label>
                                            <select
                                                name="paymentMethod"
                                                value={formData.paymentMethod}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select Payment Method</option>
                                                <option value="momo">MoMo Pay</option>
                                                <option value="bank">Bank Transfer</option>
                                            </select>
                                        </FormGroup>

                                        {formData.paymentMethod && (
                                            <FormGroup>
                                                <label>Payment Information</label>
                                                <div style={{ padding: '15px', background: '#f5f6fa', borderRadius: '10px', marginBottom: '15px' }}>
                                                    {formData.paymentMethod === 'momo' ? (
                                                        <div>
                                                            <p><strong>MoMo Pay Code:</strong> *182*8*1*025927# Fabritech</p>
                                                            <p>Please make the payment and upload the screenshot/proof below.</p>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <p><strong>Bank Account Number:</strong> 1002410106976002 ACCESS BANK</p>
                                                            <p>Please make the transfer and upload the receipt below.</p>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                <label>Upload Payment Proof</label>
                                                <input
                                                    type="file"
                                                    accept="image/*,.pdf"
                                                    onChange={handleFileChange}
                                                    required
                                                    style={{
                                                        border: '2px dashed #dfe6e9',
                                                        padding: '20px',
                                                        textAlign: 'center',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            </FormGroup>
                                        )}

                                        <ButtonGroup>
                                            <Button 
                                                type="button" 
                                                className="secondary"
                                                onClick={prevStep}
                                            >
                                                ← Previous
                                            </Button>
                                            <Button 
                                                type="submit" 
                                                className="primary"
                                                disabled={loading}
                                                style={{ marginLeft: 'auto' }}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    'Submit Application'
                                                )}
                                            </Button>
                                        </ButtonGroup>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </FormCard>
                </motion.div>
            </FormContainer>

            <AnimatePresence>
                {showSuccessPopup && (
                    <>
                        <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                            recycle={false}
                            numberOfPieces={200}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 999
                            }}
                            onClick={() => setShowSuccessPopup(false)}
                        />
                        <SuccessPopup
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                        >
                            <SuccessIcon>
                                <i className="fas fa-check"></i>
                            </SuccessIcon>
                            <h2 style={{ color: '#2d3436', marginBottom: '1rem' }}>
                                Application Submitted!
                            </h2>
                            <p style={{ color: '#636e72', marginBottom: '2rem' }}>
                                Thank you for applying to our internship program. We have sent a confirmation 
                                email to your registered email address with all the details.
                            </p>
                            <Button 
                                className="primary"
                                onClick={() => setShowSuccessPopup(false)}
                            >
                                Got it!
                            </Button>
                        </SuccessPopup>
                    </>
                )}
            </AnimatePresence>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </PageContainer>
    );
}

export default InternshipRegistration; 