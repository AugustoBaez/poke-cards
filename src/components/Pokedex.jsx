import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
      setPokemonList(response.data.results);
      setFilteredPokemonList(response.data.results);
    };
    fetchPokemonList();
  }, []);

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    const filteredPokemon = pokemonList.filter((pokemon) =>
      pokemon.name.includes(searchText.toLowerCase())
    );
    setFilteredPokemonList(filteredPokemon);
  };

  return (
    <Container className="text-center py-5">
      <h1 className="mb-4">Pokedex</h1>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search Pokemon"
          value={searchText}
          onChange={handleSearchChange}
          className="mx-auto w-50"
        />
      </Form>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredPokemonList.map((pokemon) => (
          <div key={pokemon.url} className="p-3">
            <PokemonCard pokemonUrl={pokemon.url} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pokedex;
