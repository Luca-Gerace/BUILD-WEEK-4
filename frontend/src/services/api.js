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


/* ------------ USER ------------ */

// Get users
export const getUsers = () => api.get("/users").then((response) => response.data);

// Get single user
export const getUser = (id) => api.get(`/users/${id}`).then((response) => response.data);

// Update Profile Image
export const updateProfileImage = (id, formData) => {
  return api.patch(`/users/${id}/avatar`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Update User Profile
export const updateUserProfile = (id, updatedUser) => {
  return api.patch(`/users/${id}`, updatedUser);
};


/* ------------ EXPERIENCE ------------ */ 

// Post Experience
export const postExperience = (id, formData, config) => {
  return api.post(`/users/${id}/experiences`, formData, config);
};

// Funzione per aggiornare l'esperienza
export const patchUserExperience = (userId, experienceId, updatedExperience) => {
  return api.patch(`/users/${userId}/experiences/${experienceId}`, updatedExperience);
};

// Funzione per aggiornare l'immagine dell'esperienza
export const updateExperienceImage = (userId, experienceId, formData) => {
  return api.patch(`/users/${userId}/experiences/${experienceId}/logo`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete User Experience
export const deleteUserExperience = (userId, experienceId) => {
  return api.delete(`/users/${userId}/experiences/${experienceId}`);
};

/* ------------ LOGIN ------------ */ 

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