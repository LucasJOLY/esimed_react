import { toast } from "react-toastify";
import { coursesAPI } from "../../../config/apiConfig";

export const getItemsByUser = async (userId) => {
  try {
    const response = await coursesAPI.get(`/660/users/${userId}/items`);
    return response.data;
  } catch (error) {
    toast.error("Erreur lors de la récupération des éléments");
    throw error;
  }
};

export const postItem = async (name, userId) => {
  try {
    const response = await coursesAPI.post(`/660/items`, { userId, name });
    toast.success("Élément créé avec succès");
    return response.data;
  } catch (error) {
    toast.error("Erreur lors de la création de l'élément");
    throw error;
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await coursesAPI.delete(`/660/items/${itemId}`);
    toast.success("Élément supprimé avec succès");
    return response.data;
  } catch (error) {
    toast.error("Erreur lors de la suppression de l'élément");
    throw error;
  }
};

export const editItem = async (itemId, name, userId) => {
  try {
    const response = await coursesAPI.put(`/660/items/${itemId}`, {
      name,
      userId,
    });
    toast.success("Élément modifié avec succès");
    return response.data;
  } catch (error) {
    toast.error("Erreur lors de la modification de l'élément");
    throw error;
  }
};

export default coursesAPI;
