import React from 'react';

const CatchedPokemon = ({ pokemons, onPokemonSelect, picture, selectedPokemon }) => { 
    return(
        <div className="ui card">
        <div className="content">
          <div className="center aligned header">{pokemons.name}</div>
          <div className="center aligned description">
            <p>
              # {pokemons.id}
            </p>
          </div>
        </div>
        <div className="extra content">
          <div className="center aligned author">
            <img className="center aligned author" src={picture}/> {pokemons.name}
          </div>
        </div>
      </div>
    )
}

export default CatchedPokemon;