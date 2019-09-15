import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) {}
  
    logged = new EventEmitter<boolean>();

    loggedUser() {
        this.http.get('http://localhost:3000/usuario/joao')
        .subscribe(data => { 
            console.log(data);
        });
    }
}