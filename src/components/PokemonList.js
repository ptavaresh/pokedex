import React from 'react';
import PokemonDetail from './PokemonDetail';


const PokemonList = ({pokemons, onPokemonSelect, picture}) => {

    //const renderedList = pokemons.map(pokemon => {
     //   return <PokemonDetail onPokemonSelect={onPokemonSelect} pokemon={pokemon} />;
      //});
    
      return (
        <div className="ui center aligned segment" style={{ marginTop: '10px' }}>
          <h1>{pokemons.name}</h1>
          <p>{pokemons.id}</p>
          <img src={picture} alt={pokemons.name} />
        </div>
      )//<div className="ui relaxed divided list">{pokemons.name}</div>;
    };

export default PokemonList;