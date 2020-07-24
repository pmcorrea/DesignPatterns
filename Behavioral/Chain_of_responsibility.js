// The chain of responsibility pattern allows a request sent by a client to be received by more than one object.

class HandlerChain {
	setNextObj(nextObj) {
		this.nextObjInChain = nextObj;
	}

	processMultiple(req) {
		console.log("No multiple for: " + req.getMultiple());
	}
}

class Multiple {
	constructor(multiple) {
		this.multiple = multiple;
	}

	getMultiple() {
		return this.multiple;
	}
}

class MultipleofTwoHandler extends HandlerChain {
	constructor() {
		super();
		this.nextObjInChain = new HandlerChain();
	}

	processMultiple(req) {
		if (req.getMultiple() % 2 == 0) {
			console.log("Multiple of 2: " + req.getMultiple());
		} else {
			this.nextObjInChain.processMultiple(req);
		}
	}
}

class MultipleofThreeHandler extends HandlerChain {
	constructor() {
		super();
		this.nextObjInChain = new HandlerChain();
	}

	processMultiple(req) {
		if (req.getMultiple() % 3 == 0) {
			console.log("Multiple of 3: " + req.getMultiple());
		} else {
			this.nextObjInChain.processMultiple(req);
		}
	}
}

class MultipleofFiveHandler extends HandlerChain {
	constructor() {
		super();
		this.nextObjInChain = new HandlerChain();
	}

	processMultiple(req) {
		if (req.getMultiple() % 5 == 0) {
			console.log("Multiple of 5: " + req.getMultiple());
		} else {
			this.nextObjInChain.processMultiple(req);
		}
	}
}

let c1 = new MultipleofTwoHandler();
let c2 = new MultipleofThreeHandler();
let c3 = new MultipleofFiveHandler();

c1.setNextObj(c2);
c2.setNextObj(c3);

c1.processMultiple(new Multiple(5));
c1.processMultiple(new Multiple(11));
c1.processMultiple(new Multiple(4));
c1.processMultiple(new Multiple(9));
