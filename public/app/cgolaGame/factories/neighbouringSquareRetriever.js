(function() {
  angular
    .module('app.cgolaGame')
    .factory('neighbouringSquareRetriever', neighbouringSquareRetriever);

  neighbouringSquareRetriever.$inject = ['_'];

  function neighbouringSquareRetriever(_) {
    var service = {
      getNeighbouringAliveSquares: getNeighbouringAliveSquares,
      previousRow: previousRow,
      nextRow: nextRow,
      getActiveNeighbours: getActiveNeighbours
    };

    return service;

    function previousRow(board, y) {
      return board.squares[y - 1] || [];
    }

    function nextRow(board, y) {
      return board.squares[y + 1] || [];
    }

    function getActiveNeighbours(neighbours) {
      var filteredNeighbours = _.filter(neighbours, function(value) {
        return value;
      });
      return filteredNeighbours;
    }

    function getNeighbouringAliveSquares(board, x, y) {
      var previousRow = this.previousRow(board, y);
      var nextRow = this.nextRow(board, y);

      var neighbours = [
        previousRow[x - 1], previousRow[x], previousRow[x + 1],
        board.squares[y][x - 1], board.squares[y][x + 1],
        nextRow[x - 1], nextRow[x], nextRow[x + 1]
      ];

      var activeNeighbours = this.getActiveNeighbours(neighbours);

      return activeNeighbours.length;
    }
  }
})();
