// Singleton is user when only one instance of an object is allowed.

let onlyInstance = null;

class GodShape {
	constructor(size, shape, color) {
		this.size = size || 0;
		this.shape = shape || "Circle";
		this.color = color || "Gray";
	}

	static getInstance(size, shape, color) {
		if (!onlyInstance) {
			onlyInstance = new GodShape(size, shape, color);
		}

		return onlyInstance;
	}
}

let myShape = GodShape.getInstance(100, "Polygon", "Blue");
let myShape2 = GodShape.getInstance(200, "Circle", "Red");
console.log(myShape);
console.log(myShape2);
