(function() {
  'use strict';

  describe("app.cgolaGame", function() {
    describe("neighbouringSquareRetriever factory", function() {
      var _Mock;
      var factory;

      var board = {
        squares: [
          [false, false]
        ]
      };
      var x = 1;
      var y = 0;

      beforeEach(module('app', function($provide) {
        _Mock = jasmine.createSpyObj('_', ['filter']);
        $provide.constant('_', _Mock);
      }));

      beforeEach(inject(function(neighbouringSquareRetriever) {
        factory = neighbouringSquareRetriever;
      }));

      it("should be created successfully", function() {
        expect(factory).toBeDefined();
      });

      it("should filter neighbours", function() {
        var neighbours = [undefined, true, true, false];
        factory.getActiveNeighbours(neighbours);
        expect(_Mock.filter).toHaveBeenCalledWith(neighbours, jasmine.anything());
      });

      it('should find previous row or empty array', function() {
        var y = 1;
        var board = {
          squares: [
            [false, false],
            [true, true]
          ]
        };
        var result = factory.previousRow(board, y);
        expect(result).toEqual([false, false]);
        y = 0;
        result = factory.previousRow(board, y);
        expect(result).toEqual([]);
      });

      it('should find next row or empty array', function() {
        var y = 0;
        var board = {
          squares: [
            [false, false],
            [true, true]
          ]
        };
        var result = factory.nextRow(board, y);
        expect(result).toEqual([true, true]);
        y = 1;
        result = factory.nextRow(board, y);
        expect(result).toEqual([]);
      });

      describe('after activate', function() {
        it('should have getNeighbouringAliveSquares function defined', function() {
          expect(factory.getNeighbouringAliveSquares).toBeDefined();
        });
      });
    });
  });
})();
