(function(root){
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Game = Asteroids.Game = function(ctx) {
		this.ctx = ctx;
		this.asteroids = [];
		this.addAsteroids(10);

		var pos = [250, 250];
		var vel = [0, 0];
		this.ship = new Asteroids.Ship(pos, vel);
	};

	Game.prototype.addAsteroids = function(num) {
		for (var i=0; i<num; i++) {
			this.asteroids.push(Asteroids.Asteroid.randomAsteroid(500, 500));
		}
	};

	Game.prototype.draw = function() {
		var ctx = this.ctx;
		ctx.clearRect(0,0,500,500);
		ctx.fillStyle="black";
		ctx.fillRect(0,0, 500, 500);
		this.asteroids.forEach(function(a) {
			a.draw(ctx);
		});
		this.ship.draw(ctx);
	};

	Game.prototype.move = function() {
		this.asteroids.forEach(function(a) {
			a.move();
		});
	};

	Game.prototype.step = function() {
		this.move();
		this.draw();
	};

	Game.prototype.start = function() {
		var that = this;
		window.setInterval(function() {
			that.step();
		}, 30);
	};

})(this);