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
  }
};
