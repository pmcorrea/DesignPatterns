// The constructor pattern is used when creating multiple objects from the same temmplate.

class Car {
	constructor(brand, model, color) {
		this.brand = brand;
		this.model = model;
		this.color = color;
	}

	description = function () {
		return `This is a ${this.brand} ${this.model} and it's color is ${this.color}`;
	};
}

let myCar = new Car("Ferarri", "Enzo", "Red");
let anotherCar = new Car("Tesla", "X", "Black");
console.log(myCar.description());
console.log(anotherCar.description());
