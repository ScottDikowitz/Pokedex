var PokemonIndexItem = React.createClass ({
  mixins: [ReactRouter.History],

  showDetail: function(e) {
    e.preventDefault();

    // debugger;
    this.history.pushState(null, "/pokemon/" + this.props.pokemon.id);
  },

  render: function() {
    return <li className="poke-list-item" onClick={this.showDetail}>
      {this.props.pokemon.name + " " + this.props.pokemon.poke_type}
    </li>;

  }

});
