import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = 'http://localhost:3000/auth';
  constructor(private http:HttpClient) { }


  findUsu(email:string,contra:string){
    return this.http.get(`${this.url}/auth/${email}/${contra}`);
  }
}
