Version: 1.3

# Circle #
var circle = new Circle({ context: context, x: 10, y: 20, radius: 20, color: '#008800', alignToCenter: true }); 
circle.draw();

# Rectangle #
var rect = new Rectangle({ context: context, x: 10, y: 20, width: 100, height: 100, color: '#008800' });
rect.draw();

# Line #
var line = new Line({ context: context, startX: 10, startY: 20, endY: 100, endX: 200, lineWidth: 2, color: '#008888' });
line.draw();

# Image #
var img = new ImageShape({ context: context, x: 10, y: 20, width: 100, height: 100, src: 'assets/leimage.png', angle: 45 });
img.draw();

# Image Sprite # 
var imgSprite = new ImageSprite({ context: context, x: 10, y: 20, width: 100, height: 100, src: 'assets/leSpriteimage.png', frames: 4 });
imgSprite.draw();

# Methods #

getCenterPoint() -> will return the x and y coordinate of the center of the shape or line.
  For example:
  var xCenter = rect.getCenterPoint().x;
  var yCenter = rect.getCenterPoint().y;

shape1.isCollidingWith(shape2) -> returns true if shape1.x and shape1.y are in shape2
  For example:
  rect.isCollidingWith(circle); // false