export class User {
	id: number;
	name: string;
	phone: string;
	email: string;
	city: string;

	constructor(values: Object={}) {
		// Constructor initialization
		Object.assign(this, values);
	}
}
