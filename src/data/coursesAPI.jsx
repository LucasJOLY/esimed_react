import axios from "axios";
const token = localStorage.getItem("token");

const coursesAPI = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const register = async (username, email, password) => {
  try {
    const response = await coursesAPI.post(`register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await coursesAPI.post(`login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getItemsByUser = async (userId) => {
  try {
    const response = await coursesAPI.get(`/660/users/${userId}/items`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postItem = async (name, userId) => {
  try {
    const response = await coursesAPI.post(`/660/items`, { userId, name });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await coursesAPI.delete(`/660/items/${itemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editItem = async (itemId, name) => {
  try {
    const response = await coursesAPI.put(`/660/items/${itemId}`, { name });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default coursesAPI;
