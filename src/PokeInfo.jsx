import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";

function PokeInfo({ pokeData }) {
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
        </Card>
      )}
    </div>
  );
}

export default PokeInfo;
