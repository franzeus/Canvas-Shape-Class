Version: 1.0

# Circle #
// context, _x, _y, _radius, _color
var circle = new Circle(context, 100, 200, 20, '#00FF00'); 
circle.draw();

# Rectangle #
// _context, _x, _y, _w, _h, _color
var rect = new Rectangle(context, 300, 30, 50, 50, '#FFFF00');
rect.draw();

# Line #
// _context, _startX, _startY, _endX, _endY, _lineWidth, _color
var line = new Line(context, 10, 20, 100, 200, 2, '#FFF000');
line.draw();

# Image #
// _context, _x, _y, _w, _h, _src, _angle
var img = new ImageShape(context, 100, 100, 33, 52, 'images/stuff.png', 45);
img.draw();