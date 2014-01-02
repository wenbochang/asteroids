var sum = function() {
	var total = 0;

	var args = Array.prototype.slice.call(arguments);
	args.forEach(function(n) { total += n; });

	return total;
};

console.log(sum(1,2,3,4));