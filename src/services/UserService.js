import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/users';

class UserService {
    // Get all users (Admin only)
    async getAllUsers() {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Get user by ID
    async getUserById(id) {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Create a new user
    async createUser(userData) {
        try {
            const response = await axios.post(API_BASE_URL, {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                city: userData.city,
                roles: userData.roles // Now sending as string
            });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Update user
    async updateUser(id, userData) {
        try {
            const response = await axios.put(`${API_BASE_URL}/${id}`, {
                name: userData.name,
                email: userData.email,
                city: userData.city,
                roles: userData.roles, // Now sending as string
                ...(userData.password && { password: userData.password })
            });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Delete user
    async deleteUser(id) {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
            return true;
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

    // Add this method to your existing UserService class
    async login(credentials) {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, credentials);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }
}

export default new UserService(); 