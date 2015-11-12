(function(){

  var _pokemons = [];
  var CHANGE_EVENT = 'CHANGE';
  var PokemonStore = window.PokemonStore = $.extend( {},  EventEmitter.prototype);

  PokemonStore.find = function(id){
    for (var i = 0; i < _pokemons.length; i++){
      if (_pokemons[i].id == id){
        return _pokemons[i];
      }
    }
  };

  PokemonStore.addChangeHandler = function (callback) {
   this.on(CHANGE_EVENT, callback);
  };

  PokemonStore.removeChangeHandler = function (callback) {
   this.removeListener(CHANGE_EVENT, callback);
  };

  PokemonStore.changed = function () {
   this.emit(CHANGE_EVENT);
  };

  PokemonStore.all = function(){
    return _pokemons.slice();
  };

  PokemonStore.resetPokemons = function(arg){
    _pokemons = arg;
  };

  PokemonStore.resetSinglePokemon = function(arg) {
    var idx = _pokemons.indexOf(PokemonStore.find(arg.id));
    _pokemons[idx] = arg;
  };

  PokemonStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case "POKEMONS_RECEIVED":
        PokemonStore.resetPokemons(payload.pokemons);
        PokemonStore.changed();
        break;
      case "SINGLE_POKEMON_RECEIVED":
        PokemonStore.resetSinglePokemon(payload.pokemon);
        PokemonStore.changed();
        break;
    }
  });



})();
