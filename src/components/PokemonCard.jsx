import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    };
    fetchPokemon();
  }, [pokemonUrl]);

  return pokemon ? (
    <Card>
      <Card.Img
        variant="top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        style={{ maxWidth: "100%", height: "auto", margin: "auto" }}
      />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          National ID: {pokemon.id}
          <br />
          Attack: {pokemon.stats[1].base_stat}
          <br />
          Defense: {pokemon.stats[2].base_stat}
          <br />
          Speed: {pokemon.stats[5].base_stat}
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <p>Loading...</p>
  );
};

export default PokemonCard;
