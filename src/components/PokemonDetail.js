import React from 'react';

const PokemonDetail = ({ pokemons, onPokemonSelect, picture, selectedPokemon }) => {
    return (
      <div onClick={() => onPokemonSelect(pokemons)} className="ui card">
        Catch it!!!
      </div>
    );
  };
  
  export default PokemonDetail;