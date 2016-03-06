(function() {
  angular
    .module('app.cgolaGame')
    .factory('boardCreator', boardCreator);

  function boardCreator() {
    var service = {
      create: create
    };

    return service;

    function create(width, height) {
      var array = [];

      for (var y = 0; y < height; y++) {
        array.push([]);

        array[y].push(new Array(width));

        for (var x = 0; x < width; x++) {
          array[y][x] = false;
        }
      }

      return array;
    }
  }
})();
