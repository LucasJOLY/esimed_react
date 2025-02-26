import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoursesForm from "./components/CoursesForm";
import CourseItem from "./components/CourseItem";
import AuthGuard from "../../auth/security/AuthGuard";
import { useDispatch, useSelector } from "react-redux";
import {
  createItem,
  getItemsFromUser,
  modifItem,
  supprItem,
} from "./store/slice";

function CourseList() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("user_id");
  const items = useSelector((state) => state.courses.items);

  useEffect(() => {
    dispatch(getItemsFromUser({ userId: userId }));
  }, []);

  const addAnItem = (name) => {
    dispatch(createItem({ name: name, userId: userId }));
  };

  const deleteAnItem = (itemId) => {
    dispatch(supprItem({ itemId: itemId }));
  };

  const editAnItem = (itemId, name) => {
    dispatch(modifItem({ itemId: itemId, name: name, userId: userId }));
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

export default AuthGuard(CourseList);
