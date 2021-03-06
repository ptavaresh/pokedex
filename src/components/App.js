import React from 'react';

import PokeSearch from './PokeSearch';
import PokemonInfo from './PokemonInfo';
import PokemonList from './PokemonList';

import pokeapi from '../api/pokeapi';

class App extends React.Component {
    state = { pokemons: [], picture: '', selectedPokemon: null };
  
    onPokemonSelect = (pokemons) => {
      console.log('From the App!', pokemons);
      this.setState({ selectedPokemon: pokemons });
      console.log(this.state.selectedPokemon)
};

    onSearchSubmit = async name => {
      const response = await pokeapi.get(name.toLowerCase());

    console.log(response)

      this.setState({ pokemons: response.data, picture: response.data.sprites.front_default });
    };
  
    render() {
      return (
        <div className="ui container" style={{ marginTop: '10px' }}>
          <PokeSearch onSubmit={this.onSearchSubmit} />
          <PokemonInfo pokemons={this.state.pokemons} picture={this.state.picture} />
          <PokemonList onPokemonSelect={this.onPokemonSelect} pokemons={this.state.pokemons} picture={this.state.picture} selectedPokemon={this.state.selectedPokemon}/>
        </div>
      );
    }
  }
  
  export default App;