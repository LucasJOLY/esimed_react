import axios from "axios";

const pokeAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const fetchPokemon = async (pokemon) => {
  try {
    const response = await pokeAPI.get(`pokemon/${pokemon}`);
    return response.data;
  } catch (error) {
    console.error("Erreur de récupération du Pokémon:", error);
    throw error;
  }
};

export default pokeAPI;
