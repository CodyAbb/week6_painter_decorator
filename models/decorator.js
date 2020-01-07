const Decorator = function(paintCans){
  this.paintCans = [];
};

Decorator.prototype.addPaintToStock = function (paint) {
  this.paintCans.push(paint);
};


module.exports = Decorator;
