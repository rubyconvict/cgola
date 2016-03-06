(function() {
  angular
    .module('app.cgolaGame')
    .factory('randomBooleanGenerator', randomBooleanGenerator);

  randomBooleanGenerator.$inject = ["Math"];

  function randomBooleanGenerator(Math) {
    var service = {
      generateRandomBoolean: generateRandomBoolean
    };

    return service;

    function generateRandomBoolean() {
      return Math.random() > 0.5;
    }
  }
})();
