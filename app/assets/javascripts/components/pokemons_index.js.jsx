var PokemonsIndex = React.createClass({

  getInitialState: function() {
    return {pokemons: PokemonStore.all()};
  },

  componentDidMount: function() {
    ApiUtil.fetchAllPokemons();
    PokemonStore.addChangeHandler(this._onChanged);
  },

  componentWillUnmount: function() {
    PokemonStore.removeChangeHandler(this._onChanged);
  },

  _onChanged: function() {
    this.setState({pokemons: PokemonStore.all()});
  },

  render: function() {

    var result = this.state.pokemons.map(function(pokemon) {
      return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />;
    });

    return (
      <ul> {result} </ul>
    );
  }
});
