import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

    constructor(private http: Http) {
        // Handle logins
    }
    login(username: string, password: string) {
        console.log('login method called');
        return this.http.post('/api/authenticate/login', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log('user = ' + user.body.username);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    // localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });

    }
    logout() {

    }
    isLoggedIn() {
        console.log('checking if user is logged in...');
        return false;
    }

}
