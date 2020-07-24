// The bridge pattern allows separate components with separate interfaces to work together.

class RemoteControl {
	constructor(ac) {
		this.ac = ac;

		this.on = function () {
			this.ac.on();
		};

		this.off = function () {
			this.ac.off();
		};

		this.setTemp = function (temp) {
			this.ac.setTemp(temp);
		};
	}
}

class AC {
	constructor() {
		this.on = function () {
			console.log(`AC turning on...`);
		};

		this.off = function () {
			console.log(`AC turning off...`);
		};

		this.setTemp = function (temp) {
			console.log(`Setting temperature to ${temp}`);
		};
	}
}

let someAC = new AC();
let someRemote = new RemoteControl(someAC);

someRemote.on();
someRemote.setTemp(65);
