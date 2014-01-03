(function(root){

	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Bullet = Asteroids.Bullet = function(pos, vel) {
		Asteroids.MovingObject.call(this, pos, vel, Bullet.RADIUS, Bullet.COLOR);
	};

	Bullet.COLOR = "white";
	Bullet.RADIUS = 3;

	Bullet.inherits(Asteroids.MovingObject);

})(this);