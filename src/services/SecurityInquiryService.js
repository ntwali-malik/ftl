import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/security-inquiries";

class SecurityInquiryService {
    static async getAllInquiries() {
        try {
            const response = await fetch('http://localhost:8080/api/security-inquiries', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any authentication headers if required
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error in getAllInquiries:', error);
            throw error;
        }
    }

    static async updateStatus(id, status) {
        try {
            const response = await fetch(`http://localhost:8080/api/security-inquiries/${id}/status`, {
                method: 'PATCH', // Changed to PATCH to match your backend
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error in updateStatus:', error);
            throw error;
        }
    }

    static async createInquiry(inquiryData) {
        try {
            const response = await fetch('http://localhost:8080/api/security-inquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product: inquiryData.product,
                    requestType: inquiryData.requestType,
                    name: inquiryData.name,
                    email: inquiryData.email,
                    phone: inquiryData.phone,
                    location: inquiryData.location,
                    preferredDate: inquiryData.preferredDate,
                    quantity: inquiryData.quantity,
                    message: inquiryData.message
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error in createInquiry:', error);
            throw error;
        }
    }

    static async getInquiryById(id) {
        try {
            const response = await fetch(`http://localhost:8080/api/security-inquiries/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error in getInquiryById:', error);
            throw error;
        }
    }

    static async getInquiriesByType(requestType) {
        try {
            const response = await fetch(`http://localhost:8080/api/security-inquiries/type/${requestType}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error in getInquiriesByType:', error);
            throw error;
        }
    }

    static async getInquiriesByStatus(status) {
        try {
            const response = await fetch(`http://localhost:8080/api/security-inquiries/status/${status}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error in getInquiriesByStatus:', error);
            throw error;
        }
    }
}

export default SecurityInquiryService; 