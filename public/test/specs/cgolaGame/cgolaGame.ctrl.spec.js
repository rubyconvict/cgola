(function() {
  'use strict';

  describe("app.cgolaGame", function() {
    describe("CgolaGameCtrl controller", function() {
      var gameMock, gameInstanceMock;
      var controller;

      var width = 30;
      var height = 30;
      var game = {};
      var isStarted = false;
      var isStopped = false;

      beforeEach(module('app'));

      beforeEach(inject(function($controller) {
        gameInstanceMock = jasmine.createSpyObj('gameInstance', ['startNewGame', 'stop', 'resume']);

        gameMock = jasmine.createSpyObj('game', ['create']);
        gameMock.create.and.returnValue(gameInstanceMock);

        controller = $controller('CgolaGameCtrl', {
          game: gameMock
        });
      }));

      it("should be created successfully", function() {
        expect(controller).toBeDefined();
      });

      describe('after activate', function() {
        it('should have set isStopped', function() {
          expect(controller.isStopped).toBe(isStopped);
        });

        it('should have set isStopped', function() {
          expect(controller.isStarted).toBe(isStarted);
        });

        it('should have set board width', function() {
          expect(controller.width).toBe(width);
        });

        it('should have set board height', function() {
          expect(controller.height).toBe(height);
        });

        it('should have startNewGame method defined', function() {
          expect(controller.startNewGame).toBeDefined();
        });

        it('should have stop method defined', function() {
          expect(controller.stop).toBeDefined();
        });

        it('should have resume method defined', function() {
          expect(controller.resume).toBeDefined();
        });


        it('should have created a game', function() {
          expect(controller.game).toBeDefined();

          expect(gameMock.create).toHaveBeenCalledWith(width, height);
        });
      });

      describe('startNewGame', function() {
        it('should call game.startNewGame', function() {
          expect(gameInstanceMock.startNewGame).not.toHaveBeenCalled();

          controller.startNewGame();

          expect(gameInstanceMock.startNewGame).toHaveBeenCalled();
        });
        it('should set isStarted to true', function() {
          controller.startNewGame();
          expect(controller.isStarted).toBe(true);
        });
        it('should set isStopped to false', function() {
          controller.startNewGame();

          expect(controller.isStopped).toBe(false);
        });
      });

      describe('stop', function() {
        it('should call game.stop', function() {
          expect(gameInstanceMock.stop).not.toHaveBeenCalled();

          controller.stop();

          expect(gameInstanceMock.stop).toHaveBeenCalled();
        });
        it('should set isStopped to true', function() {
          controller.stop();
          expect(controller.isStopped).toBe(true);
        });
      });

      describe('resume', function() {
        it('should call game.resume', function() {
          expect(gameInstanceMock.resume).not.toHaveBeenCalled();

          controller.resume();

          expect(gameInstanceMock.resume).toHaveBeenCalled();
        });
        it('should set isStopped to false', function() {
          controller.resume();

          expect(controller.isStopped).toBe(false);
        });
      });
    });
  });
})();
