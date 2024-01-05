// axiosInstance.js
import axios from 'axios';

const baseURL = 'https://email-sender-6x77.onrender.com/'; // Replace with your actual API base URL

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need
    },
});

export default axiosInstance;
