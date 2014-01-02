Function.prototype.inherits = function(obj) {
	function Surrogate() {};
	Surrogate.prototype = obj.prototype;
	this.prototype = new Surrogate();
};

function Animal(name) {
	this.name = name;
}

Animal.prototype.speak = function() {
	console.log(this.name + " says hi!");
};

function Dog(name, color) {
	Animal.call(this, name);
	this.color = color;
};
Dog.inherits(Animal);
console.log(Dog.prototype instanceof Animal);

Dog.prototype.fetch = function(){
	console.log(this.name + " fetches!");
};

dog = new Dog("Fido", "Black");
console.log(dog.name, dog.color);
dog.speak();
dog.fetch();

cat = new Animal("Gizmo");
cat.speak();
//cat.fetch();

