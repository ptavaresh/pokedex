import React from 'react';

import PokeSearch from './PokeSearch';
import PokemonInfo from './PokemonInfo';

import pokeapi from '../api/pokeapi';

class App extends React.Component {
    state = { pokemons: [], picture: '' };
  
    onSearchSubmit = async name => {
      const response = await pokeapi.get(name);

    console.log(response)

      this.setState({ pokemons: response.data, picture: response.data.sprites.front_default });
    };
  
    render() {
      return (
        <div className="ui container" style={{ marginTop: '10px' }}>
          <PokeSearch onSubmit={this.onSearchSubmit} />
          <PokemonInfo pokemons={this.state.pokemons} picture={this.state.picture} />
        </div>
      );
    }
  }
  
  export default App;