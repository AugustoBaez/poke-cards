import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {pokemonList.map((pokemon) => (
          <Col key={pokemon.name}>
            <PokemonCard pokemonUrl={pokemon.url} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PokemonList;
