import React, { useState } from "react";
import { fetchPokemon } from "./pokeAPI";
import PokeInfo from "./PokeInfo";
import { TextField, Button, useTheme, CircularProgress } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
export default function PokeSearch() {
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const chercher = async () => {
    if (pokeName !== "") {
      try {
        const data = await fetchPokemon(pokeName.toLowerCase());
        setPokeData(data);
        setError(null);
        toast.success("Pokémon trouvé");
      } catch (err) {
        setIsLoading(false);
        setSuccess(null);
        toast.error("Pokémon non trouvé");
        setPokeData(null);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("Veuillez entrer un nom de Pokémon");
      setPokeData(null);
    }
  };

  return (
    <div className="p-4 flex justify-center items-center flex-col">
      <div className="p-4 flex justify-center items-center">
        <TextField
          type="text"
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
          placeholder="Entrez le nom du Pokémon"
        />
        <Button
          onClick={async () => {
            await chercher();
          }}
          className="h-[50px] ml-2!"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: "50%",
          }}
        >
          <FaSearch />
        </Button>
      </div>
      {isLoading && <CircularProgress />}
      <PokeInfo pokeData={pokeData} />
    </div>
  );
}
