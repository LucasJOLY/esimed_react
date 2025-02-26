import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function CourseItem({ item, editAnItem, deleteAnItem }) {
  const [newValue, setNewValue] = useState(item.name);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex items-center gap-5">
      {isEditing ? (
        <TextField
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
      ) : (
        <Typography>{item.name}</Typography>
      )}
      {isEditing && (
        <Button
          sx={{
            backgroundColor: "#0faf52",
            "&:hover": {
              backgroundColor: "#11873f",
            },
          }}
          onClick={() => {
            editAnItem(item.id, {
              name: newValue,
              userId: item.userId,
              id: item.id,
            });
            setIsEditing(!isEditing);
          }}
        >
          Valider
        </Button>
      )}
      <Button
        sx={{
          backgroundColor: isEditing ? "#738b9c" : "#3880ff",
          "&:hover": {
            backgroundColor: isEditing ? "#52636f" : "#224e9f",
          },
        }}
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? "Annuler" : "Editer"}
      </Button>
      {!isEditing && (
        <Button
          sx={{
            backgroundColor: "#ff1744",
            "&:hover": {
              backgroundColor: "#d50000",
            },
          }}
          onClick={() => deleteAnItem(item.id)}
        >
          Supprimer
        </Button>
      )}
    </div>
  );
}

export default CourseItem;
