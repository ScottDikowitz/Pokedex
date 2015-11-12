var PokemonDetail = React.createClass({
  getInitialState: function(){
    return{pokemon: this.getStateFromStore()};

  },

  componentDidMount: function() {
    ApiUtil.fetchAllPokemons();
    PokemonStore.addChangeHandler(this._onChanged);
  },

  getStateFromStore: function(){
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  componentWillReceiveProps: function(){
    ApiUtil.receiveSinglePokemon(arguments[0].params.pokemonId);
  },

  _onChanged: function(){
  this.setState({pokemon: this.getStateFromStore()});
},

  render: function() {
                  // <ToysIndex toys={this.state.pokemon.toys} />
    var details;
    if (typeof this.state.pokemon !== "undefined"){

      details = <div>
                  <img src={this.state.pokemon.image_url}/>
                  <ul>
                    <li>Attack: {this.state.pokemon.attack}</li>
                    <li>Defense: {this.state.pokemon.defense}</li>
                    <li>Moves: {this.state.pokemon.moves.join(" ")}</li>
                  </ul>
                </div>;
    }
          // <p>{this.state.pokemon.attack}</p>
    return(
      <div>
        <div className="detail">
        {details}
        </div>
      </div>
    );
  }


});
