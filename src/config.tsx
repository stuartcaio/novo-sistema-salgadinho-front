import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseUrl
});

api.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
}, (error) => {
    console.log(error.response.status)
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {

    if (error.response.status === 401) {
        window.location.href = "/erro401";
    }

    if (error?.response?.data?.message === "Token has expired") {
        window.location.href = "/erro498";
    }

    return Promise.reject(error);
});

export default api;