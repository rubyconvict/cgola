(function() {
  angular
    .module('app.cgolaGame')
    .factory('boardUpdater', boardUpdater);

  boardUpdater.$inject = ['squareUpdater'];

  function boardUpdater(squareUpdater) {
    var service = {
      update: update
    };

    return service;

    function update(board, height, width) {
      var previousBoard = angular.copy(board);

      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          board.squares[y][x] = squareUpdater
                                .getNewAliveState(previousBoard, x, y);
        }
      }
    }
  }
})();
