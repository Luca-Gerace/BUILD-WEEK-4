import axios from "axios";


// API Base URL
// const API_URL = "https://mern-blog-b8ed.onrender.com/api"
const API_URL = "http://localhost:3001/api"

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor to include token
api.interceptors.request.use(
  (config) => {
    // get token from localstorage
    const token = localStorage.getItem("token");
    if (token) {
      // if token exist, add to authorization headers
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // error handler
    return Promise.reject(error);
  }
);
// User
export const userLogin = async (credentials) => {
  try {
    // Login request
    const response = await api.post("/auth/login", credentials);
    // return data inside response
    return response.data;
  } catch (error) {
    console.error("Autentication failed:", error);
    throw error;
  }
};

// Get users
export const getUsers = () => api.get("/users").then((response) => response.data);

// Get single user
export const getUser = (id) => api.get(`/users/${id}`).then((response) => response.data);

// Post Experience
export const postExperience = (id, experienceData) => 
  api.post(`/users/${id}/experiences`, experienceData).then((response) => response.data);

// Patch Experience
export const patchExperience = (id, experienceId) => api.patch(`/users/${id}/experiences/${experienceId}`).then((response) => response.data);

// export const registerUser = (userData) => api.post("/authors", userData);
export const getMe = () => api.get("/auth/me").then((response) => response.data);
export const getUserData = async () => {
  try {
    // get user data
    const response = await api.get('/auth/me');

    // return user data inside the response
    return response.data;

  } catch (err) {
    console.error('Fetch user data error:', err);
    throw err;
  }
};

export default api;