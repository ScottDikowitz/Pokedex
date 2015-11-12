var PokemonIndexItem = React.createClass ({

  render: function() {
    return <li className="poke-list-item">{this.props.pokemon.name}</li>;

  }

});
