var PokemonDetail = React.createClass({
  getStateFromStore: function(){

    return PokemonStore.find(parseInt(this.props.params.pokemonId));

  }


});
