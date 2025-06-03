import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string = 'http://localhost:3000/auth';
  constructor(private http:HttpClient) { }


  findIfCreate(cliente:Cliente):Observable<Cliente | any>{
    return this.http.post(`${this.url}/create/`,cliente);
  }
}
