/*
	HTML5 Canvas - Shape Class V 1.3
	https://github.com/webarbeit
*/
// Base Class
Shape = function(_context, _x, _y, _color, _w, _h) {
	this.init(_context, _x, _y, _color, _w, _h);
}
Shape.prototype.init = function(_context, _x, _y, _color, _w, _h) {
	this.x = _x || 0;
	this.y = _y || 0;
	this.width = _w || 0;
	this.height = _h || 0;
	this.color = _color || '#008800';
	this.canvasContext = _context;
};
//
Shape.prototype.getCenterPoint = function() {
	var centerX = this.x + (this.width / 2);
	var centerY = this.y + (this.height / 2);
	return { x: centerX, y: centerY };
};
// Collision Detection
Shape.prototype.isCollidingWith = function(obj2) {
	if(	this.x > obj2.x &&
			this.x < (obj2.x + obj2.width) &&
			this.y > obj2.y &&
			this.y < ( obj2.y +  obj2.height) )	{
				return true;
			}
	return false;
};

// -------------------------------------------------
Circle = function(_settings) {
	this.constructor(_settings.context, _settings.x, _settings.y, _settings.color);
	this.radius = _settings.radius;
	this.alignToCenter = _settings.alignToCenter || false;
};
Circle.prototype = new Shape();
//
Circle.prototype.draw = function() {
	this.canvasContext.save();
	if(this.alignToCenter)
		this.canvasContext.translate(this.radius / 2, this.radius / 2);
	this.canvasContext.beginPath();
	this.canvasContext.fillStyle = this.color;
	this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	this.canvasContext.fill();

	this.canvasContext.restore();
};
Circle.prototype.getCenterPoint = function() {
	var centerX = this.x + (this.radius / 2);
	var centerY = this.y + (this.radius / 2);
	return { x: centerX, y: centerY };
};

// -------------------------------------------------
Rectangle = function(_settings) {
	this.constructor(_settings.context, _settings.x, _settings.y, _settings.color, _settings.width, _settings.height);
};
Rectangle.prototype = new Shape();
//
Rectangle.prototype.draw = function() {
	this.canvasContext.fillStyle = this.color;
	this.canvasContext.fillRect(this.x, this.y, this.width, this.height);
};

// -------------------------------------------------
ImageShape = function(_settings) {
	this.constructor(_settings.context, _settings.x, _settings.y, _settings.width, _settings.height);
	this.src = _settings.src;
	this.img = new Image();
	this.img.src = this.src;
	this.angle = _settings.angle;
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
ImageSprite = function(_settings) {
 this.constructor(_settings.context, _settings.x, _settings.y, _settings.width, _settings.height);
 this.src = _settings.src;
 this.img = new Image();
 this.img.src = this.src;

 this.actualFrame = 0;
 this.frames = _settings.frames;
 this.interval = 0;
};
ImageSprite.prototype = new Shape();
//
ImageSprite.prototype.draw = function() {
 if (this.interval == this.frames ) {
   if (this.actualFrame == this.frames) {
       this.actualFrame = 0;
   } else {
       this.actualFrame++;
   }
   this.interval = 0;
 }
 this.interval++;
 this.canvasContext.drawImage(this.img, this.width * this.actualFrame, 0, this.width, this.height, this.x, this.y, this.width, this.height);
};

// -------------------------------------------------
Line = function(_settings) {
	this.constructor(_settings.context, _settings.startX, _settings.startY, _settings.color);
	this.endX = _settings.endX;
	this.endY = _settings.endY;
	this.lineWidth = _settings.lineWidth;
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
Line.prototype.getCenterPoint = function() {
	var centerX = (this.x + this.endX) / 2;
	var centerY = (this.y + this.endY) / 2;
	return { x: centerX, y: centerY };
};

// -------------------------------------------------
Text = function(_settings) {
	this.constructor(_settings.context, _settings.x, _settings.y, _settings.color);
	this.label = _settings.label;
	this.fontSize =  _settings.size "10pt Arial";
};
Text.prototype = new Shape();
//
Text.prototype.draw = function() {
  this.canvasContext.font = this.fontSize;
  this.canvasContext.fillStyle = this.color;
  this.canvasContext.fillText(this.label, this.x, this.y);
};
Text.prototype.getCenterPoint = function() {
	return this.canvasContext.measureText(this.label).width / 2;
};