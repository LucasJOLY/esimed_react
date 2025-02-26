import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoursesForm from "./components/CoursesForm";
import CourseItem from "./components/CourseItem";
import {
  deleteItem,
  editItem,
  getItemsByUser,
  postItem,
} from "../../data/coursesAPI";
import { toast } from "react-toastify";

function CourseList() {
  const userId = localStorage.getItem("user_id");
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const list = await getItemsByUser(userId);
      if (list) {
        console.log(list);
        setItems(list);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la récupération de la liste");
    }
  };

  const addAnItem = async (item) => {
    try {
      const newItem = await postItem(item, userId);
      setItems([...items, newItem]);
      toast.success("Element ajouté");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'ajout de l'élément");
    }
  };

  const deleteAnItem = async (itemId) => {
    try {
      setItems(items.filter((item) => item.id !== itemId));
      await deleteItem(itemId);
      toast.success("Element supprimé");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la suppression de l'élément");
    }
  };

  const editAnItem = async (itemId, newItem) => {
    try {
      setItems(
        items.map((item) => {
          if (item.id === itemId) {
            return newItem;
          }
          return item;
        })
      );
      console.log(newItem?.name);
      await editItem(itemId, newItem?.name);
      toast.success("Element modifié");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la modification de l'élément");
    }
  };

  return (
    <div className="flex mt-5">
      <div className="flex-1">
        <Typography variant="h4">Ajouter des éléments</Typography>
        <CoursesForm addAnItem={addAnItem} />
      </div>
      <div className="flex-1">
        <Typography variant="h4">Ma liste de courses</Typography>
        <div className="flex flex-col mt-5 items-center">
          {items &&
            items.map((item) => (
              <CourseItem
                key={item.id}
                item={item}
                deleteAnItem={deleteAnItem}
                editAnItem={editAnItem}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CourseList;
