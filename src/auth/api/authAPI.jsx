import { toast } from "react-toastify";
import { coursesAPI } from "../../config/apiConfig";

export const register = async (username, email, password) => {
  try {
    const response = await coursesAPI.post(`register`, {
      username,
      email,
      password,
    });

    toast.success("Inscription réussie");
    return response.data;
  } catch (error) {
    toast.error("Erreur lors de l'inscription");
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await coursesAPI.post(`login`, {
      email,
      password,
    });
    toast.success("Connexion réussie");
    return response.data;
  } catch (error) {
    toast.error("Erreur lors de la connexion");
    throw error;
  }
};

export const getUser = async (userId) => {
  try {
    const response = await coursesAPI.get(`users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
