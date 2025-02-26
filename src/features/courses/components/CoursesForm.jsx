import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function CoursesForm({ addAnItem }) {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;
    addAnItem(itemName);
    setItemName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-5 mt-5"
    >
      <TextField
        label="Objet à ajouter"
        variant="outlined"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Ajouter
      </Button>
    </form>
  );
}
