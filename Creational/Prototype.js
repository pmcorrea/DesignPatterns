// The Prototype pattern is used to instantiate objects with some default values.
// It clones a pre-existing object to share exisiting properties.
// The cloned objects are created by reference.

let car = {
	brand: "Ferarri",

	drive() {
		console.log("Driving!");
	},

	brake() {
		console.log("Stopping");
	},
};

let car1 = Object.create(car, {
	owner: { value: "Peter" },
});

console.log(car1.owner);
console.log(car1.drive());

// Using class syntax
class Ninja {
	constructor(name, color) {
		this.name = name;
		this.uniformColor = color;
	}
}

Ninja.prototype.punch = function () {
	console.log("You punched!");
};

let peter = new Ninja("Peter", "Red");
console.log(peter);
console.log(Object.getPrototypeOf(peter));
