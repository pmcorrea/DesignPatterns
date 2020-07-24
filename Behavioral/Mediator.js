// It is a behavioral pattern that allows a mediator (a central authority) to act as the coordinator between different objects, instead of the objects referring to each other directly.

class User {
	constructor(name, userId) {
		this.name = name;
		this.userId = userId;
		this.chatroom = null;
	}

	sendMessage(message, sendTo) {
		this.chatroom.send(message, this, sendTo);
	}

	recieveMessage(message, receiveFrom) {
		console.log(
			`${receiveFrom.name} sent the following message: ${message}`
		);
	}
}

class ChatRoom {
	constructor() {
		this.users = [];
	}

	register(user) {
		this.users[user.userId] = user;
		user.chatroom = this;
	}

	send(message, recieveFrom, sendTo) {
		sendTo.recieveMessage(message, recieveFrom);
	}
}

let mainChatRoom = new ChatRoom();
let peter = new User("Peter", 1);
let michael = new User("Michael", 2);

mainChatRoom.register(peter);
mainChatRoom.register(michael);
peter.sendMessage("Yo, Im Peter", michael);
michael.sendMessage("Hi Peter, Im Michael", peter);
