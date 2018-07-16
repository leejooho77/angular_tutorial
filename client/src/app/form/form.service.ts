import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
 
@Injectable()
export class FormService {
 
    constructor(private http: HttpClient){}
    sendForm(user: User) {
    	const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    	return this.http.post('/api/user', {
    		name: user.name,
    		phone: user.phone,
    		email: user.email,
    		city: user.city
    	}, { headers })
    }
 
}