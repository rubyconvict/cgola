(function() {
  angular
    .module('app.router')
    .provider('routerHelper', routerHelperProvider);

  routerHelperProvider.$inject = [
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function routerHelperProvider(
    $locationProvider,
    $stateProvider,
    $urlRouterProvider
  ) {
    this.$get = RouterHelper;

    $locationProvider.html5Mode(true);

    function RouterHelper() {
      var hasOtherwise = false;
      var service = {
        configureStates: configureStates
      };

      return service;

      function configureStates(states, otherwisePath) {
        states.forEach(function(state) {
          $stateProvider.state(state.state, state.config);
        });

        if (otherwisePath && !hasOtherwise) {
          hasOtherwise = true;
          $urlRouterProvider.otherwise(otherwisePath);
        }
      }
    }
  }
})();
