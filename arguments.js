var sum = function() {
	var total = 0;

	var args = Array.prototype.slice.call(arguments);
	args.forEach(function(n) {
		total += n;
	});

	return total;
};

//console.log(sum(1,2,3,4));

Function.prototype.myBind = function() {
	var args = Array.prototype.slice.call(arguments);
	var obj = args[0];
	var fn = this;

	return function() {
		fn.apply(obj, args.slice(1));
	}
}

var age_number_of_years = function() {
	var that = this;
	var args = Array.prototype.slice.call(arguments);
	args.forEach(function(n) {
		that.age += n;
	});
};

var Cat = function(name, age) {
	this.name = name;
	this.age = age;
}

var a = new Cat("Gizmo", 0);

var myBoundFunction = age_number_of_years.myBind(a, 1, 2);
myBoundFunction();
console.log("New age: " + a.age);