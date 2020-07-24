// The visitor pattern allows the definition of new operations to the collection of objects without changing the structure of the objects themselves. This allows us to separate the class from the logic it implements.
// The extra operations can be encapsulated in a visitor object. The objects can have a visit method that accepts the visitor object. The visitor can then make the required changes and perform the operations on the object that received it. This allows the developers to make future extensions, extend the libraries/frameworks, etc.

class Visitor {
	visit(item) {
		//nada
	}
}

class BookVisitor extends Visitor {
	visit(book) {
		let cost = 0;

		if (book.getPrice() > 50) {
			cost = book.getPrice() * 0.5;
		} else {
			cost = book.getPrice();
		}

		console.log(
			"Book name: " +
				book.getName() +
				"\n" +
				"ID: " +
				book.getID() +
				"\n" +
				"cost: " +
				cost
		);

		return cost;
	}
}

class Book {
	constructor(id, name, price) {
		this.id = id;
		this.name = name;
		this.price = price;
	}

	getPrice() {
		return this.price;
	}

	getName() {
		return this.name;
	}

	getID() {
		return this.id;
	}

	accept(visitor) {
		return visitor.visit(this);
	}
}

let visitor = new BookVisitor();
let someBook = new Book("#1234", "lordOftheRings", 80);
someBook.accept(visitor);
