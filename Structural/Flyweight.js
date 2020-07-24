// It is a structural pattern that focuses on how related objects share data.
// This pattern takes the common data structures/objects that are used by a lot of objects and stores them in an external object (flyweight) for sharing.

class CodeFile {
	constructor(codefileName) {
		this.codefileName = codefileName;
	}
}

class Formatter {
	format(codefile) {
		//nada
	}
}

class PythonFormatter extends Formatter {
	constructor() {
		super();
		console.log("Python formatter instance created");
	}

	format(codefileName) {
		console.log(`Formatting the Python file...`);
	}
}

class JavaFormatter extends Formatter {
	constructor() {
		super();
		console.log("Java formatter instance created");
	}

	format(codefileName) {
		console.log("Formatting the Java file...");
	}
}

class FormatterFactory {
	constructor() {
		this.formatterMap = new Map();
	}

	createFormatter(formatterType) {
		let formatter = this.formatterMap.get(formatterType);

		if (formatter == null) {
			if (formatterType == "Python") {
				formatter = new PythonFormatter();
			} else if (formatterType == "Java") {
				formatter = new JavaFormatter();
			}

			this.formatterMap.set(formatterType, formatter);
		}

		return formatter;
	}
}

let someCodefile = new CodeFile("helloWorld.py");
let anotherCodefile = new CodeFile("test.py");
let someJavafile = new CodeFile("file.java");
let someFormatterFactory = new FormatterFactory();

let somePythonFormatter = someFormatterFactory.createFormatter("Python");
somePythonFormatter.format(someCodefile.codefileName);

let anotherPythonFormatter = someFormatterFactory.createFormatter("Python");
anotherPythonFormatter.format(anotherCodefile.codefileName);

let javaFormatter = someFormatterFactory.createFormatter("Java");
javaFormatter.format(someJavafile);
