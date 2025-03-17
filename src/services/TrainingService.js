import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/training';

// Create axios instance with default config
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: false // Enable sending cookies with requests
});

class TrainingService {
    // Training Schedule APIs
    static async getAllSchedules() {
        try {
            const response = await axiosInstance.get('/schedules');
            return response.data;
        } catch (error) {
            console.error('Error fetching schedules:', error);
            throw error;
        }
    }

    static async getCurrentIntake() {
        try {
            const response = await axiosInstance.get('/schedules/current');
            return response.data;
        } catch (error) {
            console.error('Error fetching current intake:', error);
            throw error;
        }
    }

    static async getNextIntake() {
        try {
            const response = await axiosInstance.get('/schedules/next');
            return response.data;
        } catch (error) {
            console.error('Error fetching next intake:', error);
            throw error;
        }
    }

    static async createSchedule(scheduleData) {
        try {
            const response = await axiosInstance.post('/schedules', scheduleData);
            return response.data;
        } catch (error) {
            console.error('Error creating schedule:', error);
            throw error;
        }
    }

    static async updateSchedule(id, scheduleData) {
        try {
            const response = await axiosInstance.put(`/schedules/${id}`, scheduleData);
            return response.data;
        } catch (error) {
            console.error('Error updating schedule:', error);
            throw error;
        }
    }

    static async deleteSchedule(id) {
        try {
            await axiosInstance.delete(`/schedules/${id}`);
            return true;
        } catch (error) {
            console.error('Error deleting schedule:', error);
            throw error;
        }
    }

    // Short Course APIs
    static async getAllCourses() {
        try {
            const response = await axiosInstance.get('/courses');
            return response.data;
        } catch (error) {
            console.error('Error fetching courses:', error);
            throw error;
        }
    }

    static async getCourseById(id) {
        try {
            const response = await axiosInstance.get(`/courses/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching course:', error);
            throw error;
        }
    }

    static async createCourse(courseData) {
        try {
            const response = await axiosInstance.post('/courses', courseData);
            return response.data;
        } catch (error) {
            console.error('Error creating course:', error);
            throw error;
        }
    }

    static async updateCourse(id, courseData) {
        try {
            const response = await axiosInstance.put(`/courses/${id}`, courseData);
            return response.data;
        } catch (error) {
            console.error('Error updating course:', error);
            throw error;
        }
    }

    static async deleteCourse(id) {
        try {
            await axiosInstance.delete(`/courses/${id}`);
            return true;
        } catch (error) {
            console.error('Error deleting course:', error);
            throw error;
        }
    }
}

export default TrainingService; 