(function() {
  angular
    .module('app.cgolaGame')
    .controller('CgolaGameCtrl', CgolaGame);

  CgolaGame.$inject = ['game'];

  function CgolaGame(game) {
    var vm = this;
    vm.isStarted = false;
    vm.isStopped = false;
    vm.width = 30;
    vm.height = 30;
    vm.startNewGame = startNewGame;
    vm.stop = stop;
    vm.resume = resume;
    vm.game = {};

    activate();

    function activate() {
      createGame();
    }

    function createGame() {
      vm.game = game.create(vm.width, vm.height);
    }

    function stop() {
      vm.game.stop();
      vm.isStopped = true;
    }

    function startNewGame() {
      vm.game.startNewGame();
      vm.isStopped = false;
      vm.isStarted = true;
    }

    function resume() {
      vm.game.resume();
      vm.isStopped = false;
    }
  }
})();
