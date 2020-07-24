// The command pattern allows encapsulation of the requests or operations into separate objects.
// It decouples the objects that send requests from the objects responsible for executing those requests.
// Now, if an API change occurs, only the object making the call will need to change.
// CLIENT decides the COMMAND and the RECIEVER of the command.
// The client executes commands through the INVOKER who calls the COMMAND object, who in turns calls the RECIEVER.

// INVOKER
class PrinterInvoker {
	pressButton(command) {
		console.log(`Pressing ${command.commandName} button`);
		command.execute();
	}
}

// COMMAND OBJECT
class Command {
	execute() {
		// nada
	}
}

class TurnOnPrinter extends Command {
	constructor(reciever) {
		super();
		this.reciever = reciever;
		this.commandName = "turn on";
	}

	execute() {
		this.reciever.turnOn();
	}
}

// RECIEVER
class PrintingMachineReciever {
	turnOn() {
		console.log("Machine has been turned on.");
	}
}

// CLIENT
let printingMachineReciever = new PrintingMachineReciever();
let turnOnCommand = new TurnOnPrinter(printingMachineReciever);
let invoker = new PrinterInvoker();

invoker.pressButton(turnOnCommand);
