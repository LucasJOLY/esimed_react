import React, { useState } from "react";
import { fetchPokemon } from "./pokeAPI";
import PokeInfo from "./PokeInfo";

export default function PokeSearch() {
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const chercher = async () => {
    try {
      setIsLoading(true);

      const data = await fetchPokemon(pokeName.toLowerCase());
      setPokeData(data);
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setError("Pokémon non trouvé");
      setPokeData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={pokeName}
        onChange={(e) => setPokeName(e.target.value)}
        placeholder="Entrez le nom du Pokémon"
        className="border p-2 rounded mb-4 mr-1"
      />
      <button
        onClick={async () => {
          await chercher();
        }}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Chercher
      </button>
      {isLoading && <p className="text-white-500 mt-4">Chargement...</p>}

      {error && <p className="text-red-500 mt-4">{error}</p>}
      <PokeInfo pokeData={pokeData} />
    </div>
  );
}
