import { Component, OnInit } from '@angular/core';
// import User model
import { User } from '../user';
import { FormService } from './form.service';

@Component({
	selector: 'new-app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
	providers: [ FormService ]
})

export class FormComponent implements OnInit{
	
	// City list for the select option
	private cities: string[];
	// Property for User
	private user: User;

	constructor(private formService: FormService) {
		this.user = new User();
	}

	ngOnInit() {
		this.cities = ['Atlanta', 'Chicago', 'New York', 'San Francisco', 'Washington'];
		// Create a user object
		this.user = new User({
			name: "",
			phone: "",
			email: "",
			city: this.cities[0]
		})
	}

	onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
        this.user = value;
        console.log( this.user);
        console.log("valid: " + valid);
        this.sendForm()
    }

	sendForm() {
		this.formService.sendForm(this.user).subscribe(result => {
			if(result === 0) console.log('Success')
		}, error => {
			console.log('error is ', error);
		})
	}
}