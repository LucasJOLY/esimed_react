import axios from "axios";

const coursesAPI = axios.create({
  baseURL: "http://localhost:3000/",
});

export const register = async (username, email, password) => {
  try {
    const response = await pokeAPI.post(`register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'inscription de l'utilisateur:", error);
    throw error;
  }
};

export default coursesAPI;
