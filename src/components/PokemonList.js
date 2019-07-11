import React from 'react';
import PokemonDetail from './PokemonDetail';
import CatchedPokemon from './CatchedPokemon';

const PokemonList = ({pokemons, onPokemonSelect, picture, selectedPokemon}) => {

      return (
        <div>
        <PokemonDetail onPokemonSelect={onPokemonSelect} pokemons={pokemons} picture={picture}/>
        <CatchedPokemon 
          selectedPokemon={selectedPokemon} 
          pokeonPokemonSelect={onPokemonSelect} 
          pokemons={pokemons} 
          picture={picture}ons 
          />
        </div>
      )
    };

export default PokemonList;