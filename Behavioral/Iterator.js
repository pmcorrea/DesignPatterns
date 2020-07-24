// The iterator pattern allows the definition of various types of iterators that can be used to iterate a collection of objects sequentially without exposing the underlying form.
class Iterator {
	constructor(collection) {
		this.index = 0;
		this.collection = collection;
	}

	next() {
		return this.collection[this.index++];
	}

	hasNextElement() {
		// Starts at idx 1
		return this.index <= this.collection.length;
	}

	first() {
		this.index = 0;
		return this.next();
	}
}

function iterate() {
	let collection = ["Yellow", "Blue", "Green"];

	let iter = new Iterator(collection);

	for (let i = iter.first(); iter.hasNextElement(); i = iter.next()) {
		console.log(i);
	}
}

iterate();

// Another Example
class ReverseIterator {
	//define-your-reverse-iterator-here
	constructor(collection) {
		this.collection = collection;
		this.keys = Object.keys(collection);
		this.index = this.keys.length - 1;
	}

	hasprevElement() {
		return this.index >= 0;
	}

	last() {
		this.index = this.keys.length - 1;
		return this.collection[this.keys[this.index]];
	}

	previous() {
		return this.collection[this.keys[--this.index]];
	}
}

function reverseIterate(items) {
	//write-your-code-here
	//to display the values of keys
	//in items in reverse
	let iter = new ReverseIterator(items);

	for (let i = iter.last(); iter.hasprevElement(); i = iter.previous()) {
		console.log(i);
	}
}

reverseIterate({
	name: "Anne",
	age: "23",
	gender: "Female",
	Occupation: "Engineer",
});
