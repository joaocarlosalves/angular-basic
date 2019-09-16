import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(
       private http: HttpClient
    ) {}

    async doLogin(user, pass) {
        const OPTIONS = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: new HttpParams().set('usuario', user).set('senha', pass)
        };

        await this.http.get('http://localhost:3000/login', OPTIONS)
        .subscribe(data => {
            console.log(data);
            if(data) {
                this.checkLogin(true);
            } else {
                this.checkLogin(false);
            }
        });
    }

    checkLogin(ret) {
        return ret;
    }
}