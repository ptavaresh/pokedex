import React from 'react';

import PokeSearch from './PokeSearch';

import pokeapi from '../api/pokeapi';

class App extends React.Component {
    state = { pokemons: [] };
  
    onSearchSubmit = async name => {
      const response = await pokeapi.get('ditto'//, {
        //params: { query: name }
      //}
      //
      );
    console.log(response.data.name)
    console.log(response)
    console.log(response.data.sprites.back_default)
      this.setState({ pokemons: response.data });
    };
  
    render() {
      return (
        <div className="ui container" style={{ marginTop: '10px' }}>
          <PokeSearch onSubmit={this.onSearchSubmit} />
          Name: {this.state.pokemons.name}
          ID: {this.state.pokemons.id}
          <img src={this.state.pokemons.sprites}/>

        </div>
      );
    }
  }
  
  export default App;