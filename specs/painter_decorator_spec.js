const assert = require('assert');
const Room = require('../models/room');
const PaintCan = require('../models/paint_can');
const Decorator = require('../models/decorator');

describe('Decorator', function(){

  let decorator;
  let paintCan1;
  let room1;
  let room2;
  let paintCan2;

  beforeEach(function(){
    decorator = new Decorator();
    paintCan1 = new PaintCan(10);
    paintCan2 = new PaintCan(0);
    room1 = new Room(20);
    room2 = new Room(10);
  })

  it('should have no paint stock at start', function(){
    const actual = decorator.paintCans.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a can of paint to paint stock', function(){
    decorator.addPaintToStock(paintCan1);
    const actual = decorator.paintCans.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to calculate total litre of paint', function(){
    decorator.addPaintToStock(paintCan1);
    const actual = decorator.totalLitreOfPaint();
    assert.strictEqual(actual, 10);
  });

  it('should be able to calculate whether there is enough paint for a room, false', function () {
    decorator.addPaintToStock(paintCan1);
    const actual = decorator.hasEnoughPaint(room1);
    assert.strictEqual(actual, false);
  })

  it('should be able to calculate whether there is enough paint for a room, true', function () {
    decorator.addPaintToStock(paintCan1);
    const actual = decorator.hasEnoughPaint(room2);
    assert.strictEqual(actual, true);
  });

  it('should paint room if there is enough paint in stock, false', function(){
    decorator.addPaintToStock(paintCan1);
    decorator.canPaintRoom(room1);
    const actual = room1.isPainted;
    assert.strictEqual(actual, false);
  });

  it('should paint room if there is enough paint in stock, true', function(){
    decorator.addPaintToStock(paintCan1);
    decorator.canPaintRoom(room2);
    const actual = room2.isPainted;
    assert.strictEqual(actual, true);
  });

  describe('paint', function(){
    it('should check if empty', function(){
      const actual = paintCan1.checkEmpty();
      assert.strictEqual(actual, false);
    });

    it('should check if empty', function(){
      const actual = paintCan2.checkEmpty();
      assert.strictEqual(actual, true);
    });

    it('should be able to empty itself', function(){
      paintCan1.emptyCan();
      const actual = paintCan1.volume;
      assert.strictEqual(actual, 0);
    })
  });

  describe('room', function(){
    it('should start not painted', function(){
      const actual = room1.isPainted;
      assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function(){
      room1.paintRoom();
      const actual = room1.isPainted
      assert.strictEqual(actual, true);
    })
  })

});
