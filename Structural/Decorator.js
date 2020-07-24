// The decorator pattern focuses on adding properties, functionalities, and behavior to existing classes dynamically.
// The decorator pattern lets you modify the code without changing the original class.

class Burger {
	constructor(meat, price) {
		this.meat = meat;
		this.price = price;
	}

	orderPlaced() {
		console.log(
			`Please wait for your ${this.meat} burger. Pay ${this.price}.`
		);
	}
}

function addVeggies(burgerOrder) {
	burgerOrder.addLetteuce = true;
	burgerOrder.addTomatos = true;
	burgerOrder.price += 0.5;

	burgerOrder.allVeggies = function () {
		console.log(
			`
			Your burger has: 
			${burgerOrder.addLetteuce ? "letteuce," : ""} 
			${burgerOrder.addLetteuce ? "tomatoes" : ""}
			.`
		);
	};

	return burgerOrder;
}

let myBurger = new Burger("Chicken", 5.0);
let myBurgerWithVeggies = addVeggies(myBurger);
console.log(myBurgerWithVeggies);
