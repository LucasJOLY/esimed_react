import { Card, CardMedia, Typography, useTheme } from "@mui/material";
import React from "react";

function PokeInfo({ pokeData }) {
  const theme = useTheme();
  return (
    <div>
      {pokeData && (
        <Card
          sx={{
            padding: 5,
            borderRadius: 5,
            boxShadow: 5,
          }}
        >
          <Typography variant="h1" className="text-2xl mb-2">
            {pokeData.name}
          </Typography>
          <CardMedia
            image={pokeData.sprites.front_default}
            sx={{
              height: 200,
              width: 200,
              margin: "auto",
            }}
          />
          <div>
            <Typography variant="h2" className="text-xl mt-2">
              {" "}
              Types:
            </Typography>
            <ul>
              {pokeData.types.map((typeInfo) => (
                <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant="h2" className="text-xl mt-2">
              Talents:
            </Typography>
            <ul>
              {pokeData.abilities.map((abilityInfo) => (
                <li key={abilityInfo.ability.name}>
                  {abilityInfo.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant="h3" className="text-xl mt-2">
              Taille: {pokeData.height} dm
            </Typography>
            <Typography variant="h3" className="text-xl mt-2">
              Poids: {pokeData.weight} hg
            </Typography>
          </div>
        </Card>
      )}
    </div>
  );
}

export default PokeInfo;
