// Base Class
Shape = function(_context, _x, _y, _color) {
	this.init(_context, _x, _y, _color);
}
Shape.prototype.init = function(_context, _x, _y, _color) {
	this.x = _x || 0;
	this.y = _y || 0;
	this.color = _color;
	this.canvasContext = _context;
};

// -------------------------------------------------
Circle = function(_context, _x, _y, _r, _color) {
	this.constructor(_context, _x, _y, _color);
	this.radius = _r;
};
Circle.prototype = new Shape();
//
Circle.prototype.draw = function() {
	this.canvasContext.beginPath();
	this.canvasContext.fillStyle = this.color;
	this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	this.canvasContext.fill();
};

// -------------------------------------------------
Rectangle = function(_context, _x, _y, _w, _h, _color) {
	this.constructor(_context, _x, _y, _color);
	this.width = _w;
	this.height = _h
};
Rectangle.prototype = new Shape();
//
Rectangle.prototype.draw = function() {
	this.canvasContext.fillStyle = this.color;
	this.canvasContext.fillRect(this.x, this.y, this.width, this.height);
};

// -------------------------------------------------
ImageShape = function(_context, _x, _y, _w, _h, _src, _angle) {
	this.constructor(_context, _x, _y);
	this.width = _w;
	this.height = _h
	this.src = _src;
	this.img = new Image();
	this.img.src = _src;
	this.angle = 0;// _angle;
};
ImageShape.prototype = new Shape();
//
ImageShape.prototype.draw = function() {
	this.canvasContext.save();
	this.canvasContext.rotate(this.angle * Math.PI  / 180);
	this.canvasContext.drawImage(this.img, this.x, this.y, this.width, this.height);
	this.canvasContext.restore();
};

// -------------------------------------------------
Line = function(_context, _startX, _startY, _endX, _endY, _lineWidth, _color) {
	this.constructor(_context, _startX, _startY, _color);
	/*this.startX = _startX;
	this.starY = _startY; */
	this.endX = _endX;
	this.endY = _endY;
	this.lineWidth = _lineWidth;
};
Line.prototype = new Shape();
//
Line.prototype.draw = function() {
	this.canvasContext.strokeStyle = this.color;
  this.canvasContext.lineWidth = this.lineWidth;
  this.canvasContext.beginPath();
  this.canvasContext.moveTo(this.x, this.y); 
  this.canvasContext.lineTo(this.endX, this.endY);
  this.canvasContext.stroke();
  this.canvasContext.closePath();
};