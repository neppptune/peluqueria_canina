import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = 'http://localhost:3000/auth';
  constructor(private http:HttpClient) { }


  findUsu(email:string,contra:string):Observable<Login>{
    const result = this.http.get<Login>(`${this.url}/buscar/${email},${contra}`);
    return result;
  }
}
