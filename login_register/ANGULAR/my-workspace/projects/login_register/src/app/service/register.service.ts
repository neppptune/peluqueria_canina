import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Login } from '../model/Login';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url:string = 'http://localhost:3000/auth';
  constructor(private http:HttpClient) { }


  findIfCreate(log:Login):Observable<boolean>{
    return this.http.post(`${this.url}/create/`,log)
    .pipe(map(()=>true),
              catchError(e=>of(false)));
  }
}
