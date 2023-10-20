import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import '../App.css';

const PokemonContext = React.createContext();

export function usePokemon() {
    return useContext(PokemonContext);
}

export function PokemonProvider({ children, offset }) {
    const [pokemon, setPokemon] = React.useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`)
        .then((response) => {
            const data = response.data.results.map((pokemon) =>({
                name: pokemon.name,
            }));
            setPokemon(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, [offset]);
    
    return (
    <PokemonContext.Provider value={pokemon}>
        {children}
    </PokemonContext.Provider>
    );
}

export default function Pokemon() {
    const pokemon = usePokemon();
    return (
    <div>
        {pokemon.map((pokemon, index) => (
            <div key={index}>
                <p>{pokemon.name}</p>
            </div>
            ))}
    </div>
    );
}