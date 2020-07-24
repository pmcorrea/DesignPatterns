// The Builder pattern helps in building comlex objects from simpler objects.
function Car() {
	this.make = function (builder) {
		builder.step1();
		builder.step2();
		builder.step3();
		builder.step4();

		return builder.get();
	};
}

function CarBuilder(hp, color, owner) {
	this.car = null;

	this.step1 = function () {
		this.car = new Task();
	};

	this.step2 = function () {
		this.car.installEngine(hp);
	};

	this.step3 = function () {
		this.car.paint(color);
	};

	this.step4 = function () {
		this.car.assign(owner);
	};

	this.get = function () {
		return this.car;
	};
}

function Task() {
	this.hp = null;
	this.color = null;
	this.owner = null;

	this.installEngine = function (hp) {
		this.hp = hp;
	};

	this.paint = function (color) {
		this.color = color;
	};

	this.assign = function (owner) {
		this.owner = owner;
	};

	this.message = function () {
		console.log(
			`This car has ${this.hp} HP, is ${this.color}, and is assigned to ${this.owner}`
		);
	};
}

let car = new Car();
let carBuilder = new CarBuilder(200, "Black", "Peter");
let myCar = car.make(carBuilder);
myCar.message();
