import React from 'react';

const PokemonDetail = ({ pokemon, onPokemonSelect }) => {
    return (
      <div onClick={() => onPokemonSelect(pokemon)} className="item">dd
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
      </div>
    );
  };
  
  export default PokemonDetail;