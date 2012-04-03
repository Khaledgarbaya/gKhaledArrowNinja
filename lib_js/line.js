(function(window) {

var Line = function($sX, $sY, $eX, $eY, $linesize) {
  this.initialize($sX, $sY, $eX, $eY, $linesize);
}
//extends Container Class
var p = Line.prototype = new Container();

//public props
p.sX = 0;// start x
p.sY = 0;// start Y
p.eX = 0;// end X
p.eY = 0;//end Y
p.linesize = 8; //line size
p.shape = new Shape();
p.graphics = p.shape.graphics;

//static props
Line.sets = [];

p.initialize = function($sX, $sY, $eX, $eY, $linesize)
{
	Line.sets.push(this);
	this.sX = $sX;
	this.sY = $sY;
	this.eX = $eX;
	this.eY = $eY;
	this.linesize = $linesize;
	this.addChild( this.shape );
	this.draw();
};
p.draw = function(){
	var color = Graphics.getRGB(255,255,255);		
	this.graphics.clear();
	this.graphics.setStrokeStyle(this.linesize, "round").beginStroke(color);
	this.graphics.moveTo(this.sX, this.sY);
	this.graphics.lineTo(this.eX, this.eY);
};
p.update = function(){
	this.draw();
	this.linesize -=  1;
	if (this.linesize < 1)
	{
		this.graphics.clear();
	}
};
p.clear = function(){
	this.graphics.clear();
	for (var i in sets)
	{
		var l = sets[i];
		if (l == this)
		{
			sets.splice(i, 1);
			this.parent.removeChild(this);
		}
	}
};

window.Line = Line;
}(window));