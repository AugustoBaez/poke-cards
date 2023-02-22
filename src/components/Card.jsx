import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Card = () => {

    const [listPokemon, setListPokemon] = useState([])
    const [currentPokemon, setCurrentPokemon] = useState("https://pokeapi.co/api/v2/pokemon")
    const [morePokemon, setMorePokemon] = useState([])
    const [pokemonUrl, setPokemonUrl] = useState("")

    useEffect(() => {
        axios.get(currentPokemon).then(res => {
            setMorePokemon(res.data.next)
            setListPokemon(res.data.results.map(pokemon => pokemon.name))
            setPokemonUrl(res.data.results.map((pokeUrl) => pokeUrl.url))
            console.log(pokemonUrl, "url")
            console.log(res.data.results, "resultados")
        })
    }, [currentPokemon])

    // const consultaPokemon = () => {
    //     setCurrentPokemon(morePokemon)
    // }
    return (
        <div className='row'>
            {/* {listPokemon.map((pokemon) => ( */}
            <div className='column'>
                <div className='card'>
                    <div className='cardImage'></div>
                    {/* <h4>{pokemon}</h4> */}
                    <h4>pikachu</h4>
                    <p>texto</p>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='cardImage'></div>
                    {/* <h4>{pokemon}</h4> */}
                    <h4>pikachu</h4>
                    <p>texto</p>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='cardImage'></div>
                    {/* <h4>{pokemon}</h4> */}
                    <h4>pikachu</h4>
                    <p>texto</p>
                </div>
            </div>
            {/* ))} */}
        </div>
    )
}

export default Card