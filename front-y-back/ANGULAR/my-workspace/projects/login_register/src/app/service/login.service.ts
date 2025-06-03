import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = 'http://localhost:3000/auth';
  constructor(private http:HttpClient) { }


  findUsu(email:string,contra:string):Observable<Cliente>{
    const result = this.http.get<Cliente>(`${this.url}/buscar/${email},${contra}`);
    return result;
  }
}
