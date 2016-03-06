(function() {
  angular
    .module('app.cgolaGame')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates(), "cgolaGame");
  }

  function getStates() {
    return [{
      state: 'cgolaGame',
      config: {
        templateUrl: 'public/app/cgolaGame/cgolaGame.tpl.html',
        url: '/',
        controller: "CgolaGameCtrl",
        controllerAs: 'vm'
      }
    }];
  }
})();
