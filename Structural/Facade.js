// The facade pattern is used to simplify a client’s interaction with a system.
// It can also be used when you want to interact with the methods present in a library without knowing the processing that happens in the background.

class Inventory {
	constructor() {
		this.inventory = {
			shampoo: 5,
			conditioner: 3,
			serum: 0,
		};
	}

	isAvaliable(product) {
		if (product.amount <= this.inventory[product.productName]) {
			return true;
		}

		return false;
	}
}

class BuyingProduct extends Inventory {
	buyProduct(product) {
		let order;
		if (this.isAvaliable(product)) {
			order = new BuyProduct();
			return order.message(product);
		}

		order = new PreOrderProduct();

		return order.message(product);
	}
}

class BuyProduct {
	message(product) {
		console.log(
			`${product.amount} bottles of ${product.productName} are available. Click on "buy" to purchase them.`
		);
	}
}

class PreOrderProduct {
	message(product) {
		console.log(
			console.log(
				`${product.amount} bottles of ${product.productName} are not available. You can Pre-order them on the next page.`
			)
		);
	}
}

var customer = new BuyingProduct();
customer.buyProduct({ productName: "shampoo", amount: 2 });
customer.buyProduct({ productName: "serum", amount: 2000 });
