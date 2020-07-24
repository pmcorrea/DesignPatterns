// The proxy pattern is a structural pattern that creates a proxy object. It acts as a placeholder for another object, controlling the access to it.

class Capital {
	getCapital(country) {
		if (country === "Pakistan") {
			return "Islamabad";
		} else if (country === "India") {
			return "new Delhi";
		} else if (contry === "Canada") {
			return "Ottawa";
		} else if (country === "Egypt") {
			return "Cairo";
		} else {
			return "Country not in database";
		}
	}
}

class ProxyCapital {
	constructor() {
		this.capital = new Capital();
		this.capitalMap = new Map();
	}

	getCapital(country) {
		if (!this.capitalMap.get(country)) {
			let result = this.capital.getCapital(country);
			this.capitalMap.set(country, result);
			return `${result} -- retrieved from target object.`;
		} else {
			let result = this.capitalMap.get(country);
			return `${result} -- retrieved from cache.`;
		}
	}
}

let newTarget = new Capital();
let newProxy = new ProxyCapital();

console.log(newProxy.getCapital("India"));
console.log(newProxy.getCapital("India"));
