// We use the Factory pattern when we want to create different objects with similar attributes.
// The Factory is additionally beneficial to use when we want to generalize the object instantiation process of a complex object,
// or when  the exact object to be created cannot be determine ahead of time.

class Chocolate {
	constructor() {
		this.flavor = "Belgium Chocolate";
		this.message = function () {
			return `I'm a ${this.flavor} flavored ice cream.`;
		};
	}
}

class Vanilla {
	constructor() {
		this.flavor = "French Vanilla";
		this.message = function () {
			return `I'm a ${this.flavor} flavored ice cream.`;
		};
	}
}

class Strawberry {
	constructor() {
		this.flavor = "US Strawberry";
		this.message = function () {
			return `I'm a ${this.flavor} flavored ice cream.`;
		};
	}
}

class IceCreamFactory {
	constructor() {
		this.createIceCream = function (flavor) {
			let IceCream;

			if (flavor == "Chocolate") {
				IceCream = new Chocolate();
			} else if (flavor == "Vanilla") {
				IceCream = new Vanilla();
			} else if (flavor == "Strawberry") {
				IceCream = new Strawberry();
			}

			return IceCream;
		};
	}
}

let myFactory = new IceCreamFactory();
let myIceCream = myFactory.createIceCream("Vanilla");
console.log(myIceCream.message());
