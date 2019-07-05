import React from 'react';

class PokemonInfo extends React.Component {
    render () {
        
        return (
            <div className="ui center aligned segment" style={{ marginTop: '10px' }}>
                <h1>{this.props.pokemons.name}</h1>
                <p>{this.props.pokemons.id}</p>
                <img src={this.props.picture} alt={this.props.pokemons.name} />
            </div>
        )
    }
}

export default PokemonInfo;