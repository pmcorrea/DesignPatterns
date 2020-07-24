// The composite pattern is used to structure objects in a tree-like hierarchy.
// This pattern allows the client to work with these components uniformly, that is, a single object can be treated exactly how a group of objects of the same instance is treated.
// This pattern allows the formation of deeply-nested structures.
// If a leaf object receives the request sent by the client, it will handle it. However, if the recipient is composed of children, the request is forwarded to the child components.
// The composite pattern consists of components, leaves, and composites. A component is an abstract class which can be used as either a leaf object or a composite object. It contains methods for managing child objects like add, remove and getChild and methods specific to all components. A leaf is a subclass of a component that has no child objects and defines behavior for an individual object. A composite is a subclass of a component that stores child components and defines the behavior for operating on objects that have children.

// Component
class Employee {
	constructor(name, position, progress) {
		this.name = name;
		this.position = position;
		this.progress = progress;
	}

	getProgress() {
		// nada
	}
}

// Leaf
class Developers extends Employee {
	constructor(name, position, progress) {
		super(name, position, progress);
	}

	getProgress() {
		return this.progress;
	}
}

// Leaf
class FreeLanceDev extends Employee {
	constructor(name, position, progress) {
		super(name, position, progress);
	}

	getProgress() {
		return this.progress();
	}
}

// Composite
class TeamLeadDev extends Employee {
	constructor(name, position) {
		super(name, position);
		this.teamMembers = [];
	}

	addMember(employee) {
		this.teamMembers.push(employee);
	}

	removeMember(employee) {
		for (let i = 0; i < this.teamMembers.length; i++) {
			if (this.teamMembers[i] == employee) {
				this.teamMembers.splice(i, 1);
			}
		}

		return this.teamMembers;
	}

	getProgress() {
		for (let i = 0; i < this.teamMembers.length; i++) {
			console.log(this.teamMembers[i].getProgress());
		}
	}

	showTeam() {
		for (let i = 0; i < this.teamMembers.length; i++) {
			console.log(this.teamMembers[i].name);
		}
	}
}

const seniorDev = new Developers("Rachel", "Senior Developer", "60%");
const juniorDev = new Developers("Joey", "Junior Developer", "50%");
const teamLead = new TeamLeadDev("Regina", "Dev Team Lead", "90%");
teamLead.addMember(seniorDev);
teamLead.addMember(juniorDev);
console.log("Team members list:");
teamLead.showTeam();
console.log("Get Team members progress:");
teamLead.getProgress();
console.log("Removing Rachel from team:");
teamLead.removeMember(seniorDev);
console.log("Updated team members list:");
teamLead.showTeam();
const freelanceDev = new Developers("Ross", "Free Lancer", "80%");
console.log("Get freelance developer's progress:");
console.log(freelanceDev.getProgress());
