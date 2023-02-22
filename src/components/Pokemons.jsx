import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemons = () => {
  const [listPokemon, setListPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState("https://pokeapi.co/api/v2/pokemon")
  const [morePokemon, setMorePokemon] = useState([])

  useEffect(() => {
    axios.get(currentPokemon).then(res => {
      setMorePokemon(res.data.next)
      setListPokemon(res.data.results.map(pokemon => pokemon.name))
      console.log(res.data.results, "resultados")
    })
  }, [currentPokemon])

  const consultaPokemon = () => {
    setCurrentPokemon(morePokemon)
  }

  return (
    <div>
      <button onClick={consultaPokemon}>Fetch Pokemon</button>
      {
        listPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))
      }
    </div>
  );
}
export default Pokemons;
