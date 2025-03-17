import axios from 'axios';

const API_URL = 'http://localhost:8080/api/internships';

class InternshipService {
    // Create a new internship registration
    async registerIntern(formData) {
        try {
            // Create a FormData object to send file and data
            const form = new FormData();
            
            // Add the payment proof file
            if (formData.paymentProof) {
                form.append('file', formData.paymentProof);
            }

            // Create a copy of formData without the file
            const registrationData = {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                program: formData.program,
                education: formData.education,
                startDate: formData.startDate,
                paymentMethod: formData.paymentMethod
            };

            // Add the registration data as a JSON string
            form.append('data', JSON.stringify(registrationData));

            const response = await axios.post(API_URL, form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Get all internship registrations
    async getAllRegistrations() {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Get a specific internship registration by ID
    async getRegistrationById(id) {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Delete an internship registration
    async deleteRegistration(id) {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Update internship status
    async updateStatus(id, status) {
        try {
            const response = await axios.patch(`${API_URL}/${id}/status`, { status });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Add this new method
    getPaymentProofUrl(fileName) {
        return `${API_URL}/payment-proof/${fileName}`;
    }

    // Helper method to handle errors
    handleError(error) {
        if (error.response) {
            const message = error.response.data?.message || 'An error occurred with the server';
            return new Error(message);
        } else if (error.request) {
            return new Error('No response received from server');
        } else {
            return new Error('Error setting up request');
        }
    }
}

export default new InternshipService(); 