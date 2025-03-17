import React, { useState, useEffect } from 'react';
import TechnicalSupportService from '../services/TechnicalSupportService';
import DecoderOrderService from '../services/decoderOrderService';
import InternshipService from '../services/InternshipService';
import UserService from '../services/UserService';
import SecurityInquiryService from '../services/SecurityInquiryService';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import ExportService from '../services/ExportService';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

// Updated Styled Components
const DashboardContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background: #f8f9fa;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Sidebar = styled.div`
    width: 250px;
    background: white;
    padding: 2rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    height: 100vh;
    position: fixed;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        position: relative;
        transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        display: ${props => props.$isOpen ? 'flex' : 'none'};
        padding: 1rem;
    }
`;

const MainContent = styled.div`
    flex: 1;
    padding: 2rem;
    margin-left: 250px;
    overflow-x: hidden;

    @media (max-width: 768px) {
        margin-left: 0;
        padding: 1rem;
    }
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;

    h1 {
        font-size: 2rem;
        color: #2d3436;
        margin-bottom: 1.5rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    .stats {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;

        @media (max-width: 768px) {
            width: 100%;
            gap: 0.5rem;
        }
    }
`;

const StatCard = styled.div`
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    min-width: 150px;
    text-align: center;

    @media (max-width: 768px) {
        min-width: calc(50% - 0.5rem);
        padding: 0.8rem;
    }

    h4 {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;

        @media (max-width: 768px) {
            font-size: 0.8rem;
        }
    }

    .value {
        color: #2C3E50;
        font-size: 1.8rem;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;

const RequestsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    padding: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const RequestCard = styled.div`
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 1rem;
    position: relative;
    border-left: 4px solid ${props => {
        switch (props.$status) {
            case 'Completed':
                return '#00b894';
            case 'In Progress':
                return '#fdcb6e';
            case 'Rejected':
                return '#d63031';
            default:
                return '#74b9ff';
        }
    }};

    h3 {
        margin: 0 0 1rem 0;
        color: #2d3436;
    }

    p {
        margin: 0.5rem 0;
        color: #636e72;
    }
`;

const MenuToggle = styled.button`
    display: none;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    background: #0984e3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        display: block;
    }
`;

const NavButton = styled.button`
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border: none;
    border-radius: 8px;
    background: ${props => props.$active ? '#0984e3' : 'transparent'};
    color: ${props => props.$active ? 'white' : '#666'};
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background: ${props => props.$active ? '#0984e3' : '#f0f0f0'};
    }

    span {
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        padding: 0.8rem;
        font-size: 0.9rem;
    }
`;

const StatusSelect = styled.select`
    width: 150px;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: white;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
        border-color: #aaa;
    }

    &:focus {
        outline: none;
        border-color: #0984e3;
        box-shadow: 0 0 0 2px rgba(9, 132, 227, 0.1);
    }
`;

const Loading = styled.div`
    text-align: center;
    padding: 3rem;
    font-size: 1.2rem;
    color: #666;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        padding: 2rem;
        font-size: 1rem;
    }

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498DB;
        border-radius: 50%;
        animation: spin 1s linear infinite;

        @media (max-width: 768px) {
            width: 30px;
            height: 30px;
            border-width: 3px;
        }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;

    h2 {
        margin-bottom: 1.5rem;
    }
`;

const FormGroup = styled.div`
    margin-bottom: 1rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const Select = styled.select`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    background: ${props => {
        if (props.className === 'primary') return '#0984e3';
        if (props.className === 'danger') return '#e74c3c';
        return '#f1f2f6';
    }};
    color: ${props => {
        if (props.className === 'primary' || props.className === 'danger') return 'white';
        return '#333';
    }};

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background: ${props => {
            if (props.className === 'primary') return '#0873c4';
            if (props.className === 'danger') return '#c0392b';
            return '#e4e5e7';
        }};
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 768px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
    }
`;

const UserCard = styled.div`
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2rem;
    align-items: center;
    transition: all 0.3s ease;
    border: 1px solid #eee;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.1);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: ${props => props.role === 'ADMIN' ? '#e84393' : '#00b894'};
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 1rem;
        padding: 1.5rem;
    }
`;

const UserAvatar = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6c5ce7, #a363d9);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border: 3px solid white;

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;

const UserInfo = styled.div`
    h3 {
        margin: 0 0 0.8rem 0;
        color: #2d3436;
        font-size: 1.4rem;
    }

    p {
        margin: 0.5rem 0;
        color: #636e72;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;

        svg {
            width: 18px;
            height: 18px;
            color: #0984e3;
        }
    }

    @media (max-width: 768px) {
        p {
            justify-content: center;
        }
    }
`;

const UserActions = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const RoleBadge = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    background: ${props => props.role === 'ADMIN' 
        ? 'rgba(232, 67, 147, 0.1)' 
        : 'rgba(0, 184, 148, 0.1)'};
    color: ${props => props.role === 'ADMIN' ? '#e84393' : '#00b894'};
    margin-top: 0.8rem;
    
    &::before {
        content: '${props => props.role === 'ADMIN' ? '👑' : '👤'}';
        margin-right: 0.5rem;
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h2 {
        margin: 0;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #636e72;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f1f2f6;
    }
`;

const ExportControls = styled.div`
    background: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ExportModal = ({ isOpen, onClose, onExport, startDate, endDate, setStartDate, setEndDate }) => {
    if (!isOpen) return null;

    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <h2>Export Data</h2>
                    <CloseButton onClick={onClose}>✕</CloseButton>
                </ModalHeader>
                <div className="p-4">
                    <FormGroup>
                        <label>Start Date:</label>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            className="form-control"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>End Date:</label>
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            className="form-control"
                        />
                    </FormGroup>
                    <ButtonGroup>
                        <Button 
                            className="primary"
                            onClick={() => onExport('excel')}
                        >
                            Export to Excel
                        </Button>
                        <Button 
                            className="primary"
                            onClick={() => onExport('pdf')}
                        >
                            Export to PDF
                        </Button>
                    </ButtonGroup>
                </div>
            </ModalContent>
        </Modal>
    );
};

const LogoutButton = styled(NavButton)`
    margin-top: auto;
    background: #e74c3c;
    color: white;
    
    &:hover {
        background: #c0392b;
    }

    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

const PaymentProofModal = styled(Modal)`
    img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
    }
`;

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('technical');
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
    const [requests, setRequests] = useState([]);
    const [decoderOrders, setDecoderOrders] = useState([]);
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        roles: 'USER'
    });
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [securityInquiries, setSecurityInquiries] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showExportModal, setShowExportModal] = useState(false);
    const [selectedPaymentProof, setSelectedPaymentProof] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (activeTab === 'technical') {
            fetchTechnicalRequests();
        } else if (activeTab === 'decoder') {
            fetchDecoderOrders();
        } else if (activeTab === 'internships') {
            fetchInternships();
        } else if (activeTab === 'users') {
            fetchUsers();
        } else if (activeTab === 'security') {
            fetchSecurityInquiries();
        } else if (activeTab === 'training') {
            // Fetch training data
        }
    }, [activeTab]);

    const fetchTechnicalRequests = async () => {
        try {
            setLoading(true);
            const data = await TechnicalSupportService.getAllTechnicalSupport();
            setRequests(data);
        } catch (error) {
            console.error('Error fetching technical requests:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchDecoderOrders = async () => {
        try {
            setLoading(true);
            const data = await DecoderOrderService.getAllDecoderOrders();
            setDecoderOrders(data);
        } catch (error) {
            console.error('Error fetching decoder orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchInternships = async () => {
        try {
            setLoading(true);
            const data = await InternshipService.getAllRegistrations();
            setInternships(data);
        } catch (error) {
            console.error('Error fetching internships:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const data = await UserService.getAllUsers();
            setUsers(data);
        } catch (error) {
            toast.error('Failed to fetch users');
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchSecurityInquiries = async () => {
        try {
            setLoading(true);
            const data = await SecurityInquiryService.getAllInquiries();
            setSecurityInquiries(data);
        } catch (error) {
            console.error('Error fetching security inquiries:', error);
            toast.error('Failed to fetch security inquiries');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id, newStatus, type) => {
        try {
            if (type === 'security') {
                await SecurityInquiryService.updateStatus(id, newStatus);
                await fetchSecurityInquiries();
                toast.success('Security inquiry status updated successfully');
            } else if (type === 'technical') {
                await TechnicalSupportService.updateSupportStatus(id, newStatus);
                await fetchTechnicalRequests();
            } else if (type === 'decoder') {
                await DecoderOrderService.updateStatus(id, newStatus);
                await fetchDecoderOrders();
            } else if (type === 'internships') {
                await InternshipService.updateStatus(id, newStatus);
                await fetchInternships();
                toast.success('Internship status updated successfully');
            }
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error('Failed to update status');
        }
    };

    const handleDeleteInternship = async (id) => {
        if (window.confirm('Are you sure you want to delete this internship application?')) {
            try {
                await InternshipService.deleteRegistration(id);
                await fetchInternships();
                toast.success('Internship application deleted successfully');
            } catch (error) {
                console.error('Error deleting internship:', error);
                toast.error('Failed to delete internship application');
            }
        }
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            await UserService.createUser(newUser);
            toast.success('User added successfully');
            setShowAddUserModal(false);
            setNewUser({ 
                name: '', 
                email: '', 
                password: '', 
                city: '', 
                roles: 'USER'
            });
            fetchUsers();
        } catch (error) {
            toast.error('Failed to add user');
            console.error('Error adding user:', error);
        }
    };

    const handleDeleteUser = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await UserService.deleteUser(id);
                toast.success('User deleted successfully');
                fetchUsers();
            } catch (error) {
                toast.error('Failed to delete user');
                console.error('Error deleting user:', error);
            }
        }
    };

    const handleEditUser = async (e) => {
        e.preventDefault();
        try {
            await UserService.updateUser(editingUser.id, editingUser);
            toast.success('User updated successfully');
            setShowEditUserModal(false);
            setEditingUser(null);
            fetchUsers();
        } catch (error) {
            toast.error('Failed to update user');
            console.error('Error updating user:', error);
        }
    };

    const handleExport = (type) => {
        try {
            let data;
            let fileName;

            // Get the appropriate data based on active tab
            switch (activeTab) {
                case 'security':
                    data = securityInquiries;
                    fileName = 'security-inquiries';
                    break;
                case 'technical':
                    data = requests;
                    fileName = 'technical-support';
                    break;
                case 'decoder':
                    data = decoderOrders;
                    fileName = 'decoder-orders';
                    break;
                case 'internships':
                    data = internships;
                    fileName = 'internships';
                    break;
                default:
                    data = [];
                    fileName = 'export';
            }

            // Add console logs for debugging
            console.log('Raw data:', data);
            console.log('Date range:', { startDate, endDate });

            // Filter data by date range
            const filteredData = ExportService.filterByDateRange(data, startDate, endDate);
            console.log('Filtered data:', filteredData);

            if (filteredData.length === 0) {
                toast.warning('No data available for the selected date range');
                return;
            }

            // Export based on selected type
            if (type === 'excel') {
                ExportService.exportToExcel(filteredData, `${fileName}-${startDate.toISOString().split('T')[0]}`);
            } else {
                ExportService.exportToPDF(filteredData, `${fileName}-${startDate.toISOString().split('T')[0]}`);
            }

            setShowExportModal(false);
            toast.success(`Successfully exported to ${type.toUpperCase()}`);
        } catch (error) {
            console.error('Export error:', error);
            toast.error('Failed to export data');
        }
    };

    const handleLogout = () => {
        try {
            // Clear any stored tokens/user data
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            
            // Show success message
            toast.success('Logged out successfully');
            
            // Redirect to login page
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
            toast.error('Failed to logout');
        }
    };

    const renderRequests = () => {
        const items = activeTab === 'technical' ? requests : 
                     activeTab === 'decoder' ? decoderOrders : 
                     activeTab === 'security' ? securityInquiries :
                     internships;
        
        return items.map((item) => (
            <RequestCard key={item.id} $status={item.status}>
                <h3>{item.fullName || item.name}</h3>
                <p>📧 Email: {item.email}</p>
                {activeTab === 'security' ? (
                    <>
                        <p>📞 Phone: {item.phone}</p>
                        <p>🏢 Product: {item.product}</p>
                        <p>🔒 Request Type: {item.requestType}</p>
                        <p>📍 Location: {item.location}</p>
                        {item.requestType === 'site_survey' ? (
                            <p>📅 Preferred Date: {item.preferredDate || 'Not specified'}</p>
                        ) : (
                            <p>🔢 Quantity: {item.quantity || 'Not specified'}</p>
                        )}
                        <p>📝 Message: {item.message || 'No message provided'}</p>
                        <p>⏰ Created: {new Date(item.createdAt).toLocaleString()}</p>
                        <p>🔄 Status: 
                            <StatusSelect
                                value={item.status || 'Pending'}
                                onChange={(e) => handleStatusChange(item.id, e.target.value, 'security')}
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Rejected">Rejected</option>
                            </StatusSelect>
                        </p>
                    </>
                ) : activeTab === 'technical' ? (
                    <>
                        <p>📱 Phone: {item.phoneNumber}</p>
                        <p>🏢 Service Provider: {item.serviceProvider}</p>
                        <p>🔧 Issue Type: {item.issueType}</p>
                        <p>🔧 Smart Card Number: {item.smartCardNumber}</p>
                        <p>📝 Issue Description: {item.issueDescription || 'No description provided'}</p>
                        <p>⏰ Created: {new Date(item.createdAt).toLocaleString()}</p>
                        <p>🔄 Status: 
                            <StatusSelect
                                value={item.status || 'Pending'}
                                onChange={(e) => handleStatusChange(item.id, e.target.value, 'technical')}
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Rejected">Rejected</option>
                            </StatusSelect>
                        </p>
                    </>
                ) : activeTab === 'decoder' ? (
                    <>
                        <p>📱 Phone: {item.phoneNumber}</p>
                        <p>📍 Location: {item.location}</p>
                        <p>📺 Decoder Type: {item.decoderType}</p>
                        <p>🔧 Installation: {item.installationType}</p>
                        <p>⏰ Created: {new Date(item.createdAt).toLocaleString()}</p>
                        <p>🔄 Status: 
                            <StatusSelect
                                value={item.status || 'Pending'}
                                onChange={(e) => handleStatusChange(item.id, e.target.value, 'decoder')}
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Rejected">Rejected</option>
                            </StatusSelect>
                        </p>
                    </>
                ) : (
                    <>
                        <p>📞 Phone: {item.phone}</p>
                        <p>🎓 Education: {item.education}</p>
                        <p>💼 Program: {item.program}</p>
                        <p>📅 Start Date: {new Date(item.startDate).toLocaleDateString()}</p>
                        <p>💳 Payment Method: {item.paymentMethod || 'Not specified'}</p>
                        {item.paymentProof && (
                            <p>
                                🧾 Payment Proof: 
                                <Button
                                    onClick={() => setSelectedPaymentProof(InternshipService.getPaymentProofUrl(item.paymentProof))}
                                    style={{ marginLeft: '10px' }}
                                >
                                    View Proof
                                </Button>
                            </p>
                        )}
                        <p>🔄 Status: 
                            <StatusSelect
                                value={item.status || 'Pending'}
                                onChange={(e) => handleStatusChange(item.id, e.target.value, 'internships')}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </StatusSelect>
                        </p>
                        <Button 
                            className="danger"
                            onClick={() => handleDeleteInternship(item.id)}
                            style={{ marginTop: '1rem' }}
                        >
                            Delete Application
                        </Button>
                    </>
                )}
            </RequestCard>
        ));
    };

    const getStatusCounts = () => {
        if (activeTab === 'security') {
            return {
                total: securityInquiries.length,
                pending: securityInquiries.filter(item => !item.status || item.status === 'Pending').length,
                inProgress: securityInquiries.filter(item => item.status === 'In Progress').length,
                completed: securityInquiries.filter(item => item.status === 'Completed').length
            };
        }

        const items = activeTab === 'technical' ? requests : decoderOrders;
        return {
            total: items.length,
            pending: items.filter(item => !item.status || item.status === 'Pending').length,
            inProgress: items.filter(item => item.status === 'In Progress').length,
            completed: items.filter(item => item.status === 'Completed').length
        };
    };

    const counts = getStatusCounts();

    const renderUsers = () => {
        return (
            <div>
                <div className="header-actions" style={{ 
                    marginBottom: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 1rem'
                }}>
                    <h2 style={{ 
                        fontSize: '2rem', 
                        color: '#2d3436',
                        margin: 0
                    }}>
                        User Management
                    </h2>
                    <Button 
                        className="primary"
                        onClick={() => setShowAddUserModal(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <span>➕</span> Add New User
                    </Button>
                </div>

                <RequestsGrid>
                    {users.map((user) => (
                        <UserCard key={user.id} role={user.roles}>
                            <UserAvatar>{user.name[0].toUpperCase()}</UserAvatar>
                            <UserInfo>
                                <h3>{user.name}</h3>
                                <p>📧 {user.email}</p>
                                <p>🏢 {user.city || 'No city specified'}</p>
                                <RoleBadge role={user.roles}>
                                    {user.roles}
                                </RoleBadge>
                            </UserInfo>
                            <UserActions>
                                <Button 
                                    className="primary"
                                    onClick={() => {
                                        setEditingUser({...user});
                                        setShowEditUserModal(true);
                                    }}
                                >
                                    ✏️ Edit
                                </Button>
                                <Button 
                                    className="danger"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    🗑️ Delete
                                </Button>
                            </UserActions>
                        </UserCard>
                    ))}
                </RequestsGrid>

                {/* Add User Modal */}
                {showAddUserModal && (
                    <Modal>
                        <ModalContent>
                            <ModalHeader>
                                <h2>Add New User</h2>
                                <CloseButton onClick={() => setShowAddUserModal(false)}>✕</CloseButton>
                            </ModalHeader>
                            <form onSubmit={handleAddUser}>
                                <FormGroup>
                                    <label>Name:</label>
                                    <Input
                                        type="text"
                                        value={newUser.name}
                                        onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>Email:</label>
                                    <Input
                                        type="email"
                                        value={newUser.email}
                                        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>Password:</label>
                                    <Input
                                        type="password"
                                        value={newUser.password}
                                        onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>City:</label>
                                    <Input
                                        type="text"
                                        value={newUser.city}
                                        onChange={(e) => setNewUser({...newUser, city: e.target.value})}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>Role:</label>
                                    <Select
                                        value={newUser.roles}
                                        onChange={(e) => setNewUser({...newUser, roles: e.target.value})}
                                    >
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                    </Select>
                                </FormGroup>
                                <ButtonGroup>
                                    <Button type="button" onClick={() => setShowAddUserModal(false)}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" className="primary">
                                        Add User
                                    </Button>
                                </ButtonGroup>
                            </form>
                        </ModalContent>
                    </Modal>
                )}

                {/* Edit User Modal */}
                {showEditUserModal && editingUser && (
                    <Modal>
                        <ModalContent>
                            <ModalHeader>
                                <h2>Edit User</h2>
                                <CloseButton onClick={() => {
                                    setShowEditUserModal(false);
                                    setEditingUser(null);
                                }}>✕</CloseButton>
                            </ModalHeader>
                            <form onSubmit={handleEditUser}>
                                <FormGroup>
                                    <label>Name:</label>
                                    <Input
                                        type="text"
                                        value={editingUser.name}
                                        onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>Email:</label>
                                    <Input
                                        type="email"
                                        value={editingUser.email}
                                        onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>Password:</label>
                                    <Input
                                        type="password"
                                        value={editingUser.password || ''}
                                        onChange={(e) => setEditingUser({...editingUser, password: e.target.value})}
                                        placeholder="Leave blank to keep current password"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>City:</label>
                                    <Input
                                        type="text"
                                        value={editingUser.city || ''}
                                        onChange={(e) => setEditingUser({...editingUser, city: e.target.value})}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label>Role:</label>
                                    <Select
                                        value={editingUser.roles}
                                        onChange={(e) => setEditingUser({...editingUser, roles: e.target.value})}
                                    >
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                    </Select>
                                </FormGroup>
                                <ButtonGroup>
                                    <Button 
                                        type="button" 
                                        onClick={() => {
                                            setShowEditUserModal(false);
                                            setEditingUser(null);
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit" className="primary">
                                        Save Changes
                                    </Button>
                                </ButtonGroup>
                            </form>
                        </ModalContent>
                    </Modal>
                )}
            </div>
        );
    };

    const renderStats = () => {
        if (activeTab === 'technical') {
            const total = requests.length;
            const pending = requests.filter(item => !item.status || item.status === 'Pending').length;
            const inProgress = requests.filter(item => item.status === 'In Progress').length;
            const completed = requests.filter(item => item.status === 'Completed').length;
            const rejected = requests.filter(item => item.status === 'Rejected').length;

            return (
                <div className="stats">
                    <StatCard>
                        <h4>Total Requests</h4>
                        <div className="value">{total}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Pending</h4>
                        <div className="value">{pending}</div>
                    </StatCard>
                    <StatCard>
                        <h4>In Progress</h4>
                        <div className="value">{inProgress}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Completed</h4>
                        <div className="value">{completed}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Rejected</h4>
                        <div className="value">{rejected}</div>
                    </StatCard>
                </div>
            );
        } else if (activeTab === 'decoder') {
            const total = decoderOrders.length;
            const pending = decoderOrders.filter(item => !item.status || item.status === 'Pending').length;
            const inProgress = decoderOrders.filter(item => item.status === 'In Progress').length;
            const completed = decoderOrders.filter(item => item.status === 'Completed').length;
            const rejected = decoderOrders.filter(item => item.status === 'Rejected').length;

            return (
                <div className="stats">
                    <StatCard>
                        <h4>Total Orders</h4>
                        <div className="value">{total}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Pending</h4>
                        <div className="value">{pending}</div>
                    </StatCard>
                    <StatCard>
                        <h4>In Progress</h4>
                        <div className="value">{inProgress}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Completed</h4>
                        <div className="value">{completed}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Rejected</h4>
                        <div className="value">{rejected}</div>
                    </StatCard>
                </div>
            );
        } else if (activeTab === 'security') {
            const total = securityInquiries.length;
            const pending = securityInquiries.filter(item => !item.status || item.status === 'Pending').length;
            const inProgress = securityInquiries.filter(item => item.status === 'In Progress').length;
            const completed = securityInquiries.filter(item => item.status === 'Completed').length;
            const rejected = securityInquiries.filter(item => item.status === 'Rejected').length;

            return (
                <div className="stats">
                    <StatCard>
                        <h4>Total Inquiries</h4>
                        <div className="value">{total}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Pending</h4>
                        <div className="value">{pending}</div>
                    </StatCard>
                    <StatCard>
                        <h4>In Progress</h4>
                        <div className="value">{inProgress}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Completed</h4>
                        <div className="value">{completed}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Rejected</h4>
                        <div className="value">{rejected}</div>
                    </StatCard>
                </div>
            );
        } else if (activeTab === 'internships') {
            const total = internships.length;
            const pending = internships.filter(item => !item.status || item.status === 'Pending').length;
            const approved = internships.filter(item => item.status === 'Approved').length;
            const rejected = internships.filter(item => item.status === 'Rejected').length;

            return (
                <div className="stats">
                    <StatCard>
                        <h4>Total Applications</h4>
                        <div className="value">{total}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Pending</h4>
                        <div className="value">{pending}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Approved</h4>
                        <div className="value">{approved}</div>
                    </StatCard>
                    <StatCard>
                        <h4>Rejected</h4>
                        <div className="value">{rejected}</div>
                    </StatCard>
                </div>
            );
        }
    };

    return (
        <DashboardContainer>
            <MenuToggle onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? '✕' : '☰'}
            </MenuToggle>

            <Sidebar $isOpen={isSidebarOpen}>
                <NavButton 
                    $active={activeTab === 'technical'}
                    onClick={() => setActiveTab('technical')}
                >
                    <span>🔧</span> Technical Support
                </NavButton>
                <NavButton 
                    $active={activeTab === 'decoder'}
                    onClick={() => setActiveTab('decoder')}
                >
                    <span>📺</span> Decoder Orders
                </NavButton>
                <NavButton 
                    $active={activeTab === 'internships'}
                    onClick={() => setActiveTab('internships')}
                >
                    <span>👨‍🎓</span> Internship Applications
                </NavButton>
                <NavButton 
                    $active={activeTab === 'users'}
                    onClick={() => setActiveTab('users')}
                >
                    <span>👥</span> User Management
                </NavButton>
                <NavButton 
                    $active={activeTab === 'security'}
                    onClick={() => setActiveTab('security')}
                >
                    <span>🔒</span> Security Systems
                </NavButton>
                <LogoutButton onClick={handleLogout}>
                    <span>🚪</span> Logout
                </LogoutButton>
            </Sidebar>

            <MainContent>
                {activeTab !== 'users' ? (
                    <>
                        <StyledHeader>
                            <h1>
                                {activeTab === 'technical' ? 'Technical Support Requests' : 
                                 activeTab === 'decoder' ? 'Decoder Orders' :
                                 activeTab === 'security' ? 'Security System Inquiries' :
                                 'Internship Applications'}
                            </h1>
                            {renderStats()}
                            <ExportControls>
                                <Button 
                                    className="primary"
                                    onClick={() => setShowExportModal(true)}
                                >
                                    📊 Export Data
                                </Button>
                            </ExportControls>
                        </StyledHeader>
                        {renderRequests()}
                    </>
                ) : (
                    renderUsers()
                )}
            </MainContent>
            
            <ExportModal 
                isOpen={showExportModal}
                onClose={() => setShowExportModal(false)}
                onExport={handleExport}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />

            {selectedPaymentProof && (
                <PaymentProofModal>
                    <ModalContent>
                        <ModalHeader>
                            <h2>Payment Proof</h2>
                            <CloseButton onClick={() => setSelectedPaymentProof(null)}>✕</CloseButton>
                        </ModalHeader>
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                            <img 
                                src={selectedPaymentProof} 
                                alt="Payment Proof" 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    toast.error("Failed to load payment proof");
                                }}
                            />
                        </div>
                    </ModalContent>
                </PaymentProofModal>
            )}
        </DashboardContainer>
    );
};

export default AdminDashboard; 