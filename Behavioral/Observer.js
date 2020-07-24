// It allows objects (observers) that have subscribed to an event to wait for input and react to it when notified. This means they don’t have to continuously keep checking whether the input has been provided or not.

class Subject {
	constructor() {
		this.observersList = [];
		this.newArticlePosted = false;
		this.articleName = null;
	}

	subscribe(observer) {
		this.observersList.push(observer);
	}

	unsubscribe(observer) {
		this.observersList = this.observersList.filter(
			(obj) => obj !== observer
		);
	}

	notify() {
		if (this.newArticlePosted) {
			this.observersList.forEach((subscriber) => subscriber.update());
		} else {
			return;
		}
	}

	getUpdate() {
		return this.articleName;
	}

	postNewArticle(articleName) {
		this.articleName = articleName;
		this.newArticlePosted = true;
		this.notify();
	}
}

class Observer {
	constructor() {
		this.subject = new Subject();
	}

	update() {
		if (subject.getUpdate() == null) {
			console.log("No new article");
		} else {
			console.log(`The new article ${subject.getUpdate()} is posted`);
		}
	}

	setSubject(subject) {
		this.subject = subject;
	}
}

var subject = new Subject();
var observer = new Observer();
observer.setSubject(subject);
subject.subscribe(observer);
observer.update();
subject.postNewArticle("Dark matter");
