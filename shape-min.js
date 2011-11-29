/*
	HTML5 Canvas - Shape Class V 1.1
	https://github.com/webarbeit
*/
Shape=function(a,b,c,d,e,f){this.init(a,b,c,d,e,f)};Shape.prototype.init=function(a,b,c,d,e,f){this.x=b||0;this.y=c||0;this.width=e||0;this.height=f||0;this.color=d||"#008800";this.canvasContext=a};Shape.prototype.getCenterPoint=function(){var a=this.x+this.width/2;var b=this.y+this.height/2;return{x:a,y:b}};Shape.prototype.isCollidingWith=function(a){if(this.x>a.x&&this.x<a.x+a.width&&this.y>a.y&&this.y<a.y+a.height){return true}return false};Circle=function(a){this.constructor(a.context,a.x,a.y,a.color);this.radius=a.radius;this.alignToCenter=a.alignToCenter||false};Circle.prototype=new Shape;Circle.prototype.draw=function(){this.canvasContext.save();if(this.alignToCenter)this.canvasContext.translate(this.radius/2,this.radius/2);this.canvasContext.beginPath();this.canvasContext.fillStyle=this.color;this.canvasContext.arc(this.x,this.y,this.radius,0,Math.PI*2,true);this.canvasContext.fill();this.canvasContext.restore()};Circle.prototype.getCenterPoint=function(){var a=this.x+this.radius/2;var b=this.y+this.radius/2;return{x:a,y:b}};Rectangle=function(a){this.constructor(a.context,a.x,a.y,a.color,a.width,a.height)};Rectangle.prototype=new Shape;Rectangle.prototype.draw=function(){this.canvasContext.fillStyle=this.color;this.canvasContext.fillRect(this.x,this.y,this.width,this.height)};ImageShape=function(a){this.constructor(a.context,a.x,a.y,a.width,a.height);this.src=a.src;this.img=new Image;this.img.src=this.src;this.angle=a.angle};ImageShape.prototype=new Shape;ImageShape.prototype.draw=function(){this.canvasContext.save();this.canvasContext.rotate(this.angle*Math.PI/180);this.canvasContext.drawImage(this.img,this.x,this.y,this.width,this.height);this.canvasContext.restore()};Line=function(a){this.constructor(a.context,a.startX,a.startY,a.color);this.endX=a.endX;this.endY=a.endY;this.lineWidth=a.lineWidth};Line.prototype=new Shape;Line.prototype.draw=function(){this.canvasContext.strokeStyle=this.color;this.canvasContext.lineWidth=this.lineWidth;this.canvasContext.beginPath();this.canvasContext.moveTo(this.x,this.y);this.canvasContext.lineTo(this.endX,this.endY);this.canvasContext.stroke();this.canvasContext.closePath()};Line.prototype.getCenterPoint=function(){var a=(this.x+this.endX)/2;var b=(this.y+this.endY)/2;return{x:a,y:b}}