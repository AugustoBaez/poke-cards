import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function PokemonCard({ pokemonUrl }) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(pokemonUrl)
      .then((response) => {
        setPokemon(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [pokemonUrl]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!pokemon) {
    return <p>Failed to load data for this Pokemon</p>;
  }

  const { name, id, stats } = pokemon;

  const attack = stats.find((stat) => stat.stat.name === "attack").base_stat;
  const defense = stats.find((stat) => stat.stat.name === "defense").base_stat;
  const speed = stats.find((stat) => stat.stat.name === "speed").base_stat;

  return (
    <Card className="pokemon-card">
      <Card.Img
        variant="top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <Card.Body>
        <Card.Title>
          {name} #{id}
        </Card.Title>
        <Card.Text>
          Attack: {attack} / Defense: {defense} / Speed: {speed}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;



