const PaintCan = function (volume) {
  this.volume = volume;
}

PaintCan.prototype.checkEmpty = function () {
  if (this.volume > 0 ) {
    return false;
  } else {
    return true;
  }
};

PaintCan.prototype.emptyCan = function () {
  this.volume = 0;
};

module.exports = PaintCan;
