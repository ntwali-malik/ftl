import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/decoder-orders';

class DecoderOrderService {
    // Create a new decoder order
    async createDecoderOrder(orderData) {
        try {
            const response = await axios.post(API_BASE_URL, {
                decoderType: orderData.decoderType,
                installationType: orderData.installationType,
                name: orderData.name,
                phoneNumber: orderData.phone,
                email: orderData.email,
                location: orderData.location,
                status: 'Pending' // Default status
            });
            return {
                success: true,
                message: response.data
            };
        } catch (error) {
            console.error('Error creating decoder order:', error);
            return {
                success: false,
                message: error.response?.data || 'Failed to submit decoder order'
            };
        }
    }

    // Get all decoder orders
    async getAllDecoderOrders() {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching decoder orders:', error);
            throw error;
        }
    }

    // Get a specific decoder order
    async getDecoderOrderById(id) {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching decoder order:', error);
            throw error;
        }
    }

    // Update order status
    async updateStatus(id, status) {
        try {
            const response = await axios.patch(`${API_BASE_URL}/${id}/status`, { status });
            return response.data;
        } catch (error) {
            console.error('Error updating order status:', error);
            throw error;
        }
    }
}

const decoderOrderService = new DecoderOrderService();
export default decoderOrderService; 