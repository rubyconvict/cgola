(function() {
  'use strict';

  describe("app.cgolaGame", function() {
    describe("states", function() {
      var $state, $location, $rootScope;

      beforeEach(module('app'));

      beforeEach(inject(function(_$state_, _$location_, _$rootScope_) {
        $state = _$state_;
        $location = _$location_;
        $rootScope = _$rootScope_;
      }));

      it("should map /cgolaGame state to cgolaGame view template", function() {
        var state = $state.get('cgolaGame');

        expect(state.templateUrl).toBe(
          'public/app/cgolaGame/cgolaGame.tpl.html'
        );
        expect(state.controller).toBe('CgolaGameCtrl');
        expect(state.controllerAs).toBe('vm');
      });
    });
  });
})();
