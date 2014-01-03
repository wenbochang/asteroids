(function(root){
	Function.prototype.inherits = function(obj) {
		function Surrogate() {};
		Surrogate.prototype = obj.prototype;
		this.prototype = new Surrogate();
	};

	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Ship = Asteroids.Ship = function(pos, vel) {
		var RADIUS = 15;
		var COLOR = "green";
		Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR);
	};

	Ship.inherits(Asteroids.MovingObject);

	Ship.prototype.power = function(impulse) {
		this.vel[0] += impulse[0];
		this.vel[1] += impulse[1];
	}

})(this);