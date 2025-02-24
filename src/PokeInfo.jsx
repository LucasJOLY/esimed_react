import React from "react";

function PokeInfo({ pokeData }) {
  return (
    <div>
      {pokeData && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-2xl mb-2">{pokeData.name}</h2>
          <img
            src={pokeData.sprites.front_default}
            alt={pokeData.name}
            className="mb-4"
          />
          <div>
            <h3 className="text-xl">Types:</h3>
            <ul>
              {pokeData.types.map((typeInfo) => (
                <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokeInfo;
