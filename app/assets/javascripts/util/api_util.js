var ApiUtil = window.ApiUtil = {

  fetchAllPokemons: function() {
    $.ajax ({
      url: 'api/pokemon',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.receiveAllPokemons(data);
      }
    });
  },

  receiveSinglePokemon: function(id) {
    $.ajax ({
      url: 'api/pokemon/' + id,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.receiveSinglePokemon(data);
      }
    });
  }
};
