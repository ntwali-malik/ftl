import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/technical-support';

class TechnicalSupportService {
    // Create a new technical support request
    async createTechnicalSupport(supportData) {
        try {
            const response = await axios.post(API_BASE_URL, supportData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Get all technical support requests
    async getAllTechnicalSupport() {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Get a specific technical support request by ID
    async getTechnicalSupportById(id) {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Update the status of a technical support request
    async updateSupportStatus(id, status) {
        try {
            const response = await axios.patch(`${API_BASE_URL}/${id}/status`, { status });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Helper method to handle errors
    handleError(error) {
        if (error.response) {
            // Server responded with error
            const message = error.response.data?.message || 'An error occurred with the server';
            return new Error(message);
        } else if (error.request) {
            // Request made but no response
            return new Error('No response received from server');
        } else {
            // Error setting up request
            return new Error('Error setting up request');
        }
    }
}

const technicalSupportService = new TechnicalSupportService();
export default technicalSupportService;