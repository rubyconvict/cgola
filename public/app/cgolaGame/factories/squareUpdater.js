(function() {
  angular
    .module('app.cgolaGame')
    .factory('squareUpdater', squareUpdater);

  squareUpdater.$inject = ['neighbouringSquareRetriever'];

  function squareUpdater(neighbouringSquareRetriever) {
    var service = {
      getNewAliveState: getNewAliveState
    };

    return service;

    function getNewAliveState(board, x, y) {
      var numberOfNeighbouringAliveSquares = neighbouringSquareRetriever
        .getNeighbouringAliveSquares(board, x, y);
      var newAliveState;
      var currentState = board.squares[y][x];
      if (currentState) {
        newAliveState = (
          numberOfNeighbouringAliveSquares >= 2 &&
          numberOfNeighbouringAliveSquares <= 3
        );
      } else {
        newAliveState = numberOfNeighbouringAliveSquares === 3;
      }

      return newAliveState;
    }
  }
})();
