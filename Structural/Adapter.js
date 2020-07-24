// The adapter pattern allows classes that have different interfaces (properties/methods of an object) to work together. It translates the interface for a class to make it compatible with another class.
class OldApi {
	constructor() {
		this.attach = function () {
			console.log("This is an old api method.");
		};
	}
}

class NewApi {
	constructor() {
		this.attach = function () {
			console.log("This is the new api method");
		};
	}
}

class ApiAdapter extends OldApi {
	constructor(someNewApi) {
		super();
		this.attach = function () {
			someNewApi.attach();
		};
	}
}

let newApiObj = new NewApi();
let adapter = new ApiAdapter(newApiObj);
adapter.attach();

// Another Example
class AnotherAdapter {
	constructor() {
		this.someNewApi = new NewApi();

		this.attach = function () {
			return this.someNewApi.attach();
		};
	}
}

let anotherAdapter = new AnotherAdapter();
anotherAdapter.attach();
