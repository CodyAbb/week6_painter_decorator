const assert = require('assert');
const Room = require('../models/room');
const PaintCan = require('../models/paint_can');
const Decorator = require('../models/decorator');

describe('Decorator', function(){

  let decorator;
  let paintCan1;

  beforeEach(function(){
    decorator = new Decorator();
    paintCan1 = new PaintCan(10);
  })

  it('should have no paint stock at start', function(){
    const actual = decorator.paintCans.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a can of paint to paint stock', function(){
    decorator.addPaintToStock(paintCan1);
    const actual = decorator.paintCans.length;
    assert.strictEqual(actual, 1);
  })

});
