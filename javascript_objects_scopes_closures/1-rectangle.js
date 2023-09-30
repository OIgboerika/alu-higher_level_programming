#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    // Check if either w or h is not a positive number, set both to 0 in that case
    if (w <= 0 || h <= 0) {
      this.width = 0;
      this.height = 0;
    } else {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;
