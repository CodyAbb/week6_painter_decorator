const Decorator = function(paintCans){
  this.paintCans = [];
};

Decorator.prototype.addPaintToStock = function (paint) {
  this.paintCans.push(paint);
};

Decorator.prototype.totalLitreOfPaint = function () {
  let total = 0;
  for (let can of this.paintCans) {
    volume = can.volume;
    total += volume;
  }
  return total;
};

Decorator.prototype.hasEnoughPaint = function (room) {
  const amountOfPaint = this.totalLitreOfPaint();
  if (amountOfPaint >= room.area) {
    return true;
  } else {
    return false;
  }
};

Decorator.prototype.canPaintRoom = function (room) {
  const hasPaint = this.hasEnoughPaint(room);
  if (hasPaint === true) {
    room.paintRoom();
  }
};

Decorator.prototype.decorateRoom = function (room) {
  this.canPaintRoom(room);
  this.paintCans[0].volume - room.area;
  console.log(this.paintCans[0].volume);
};


module.exports = Decorator;
