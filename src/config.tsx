import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        token: localStorage.token
    }
});

export default api;