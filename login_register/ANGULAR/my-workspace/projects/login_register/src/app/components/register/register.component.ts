import { User } from './../../../../../../../../NEST/login_register/src/model/User';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { Login } from '../../model/Login';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombre:string;
  dni:string;
  email:string;
  telefono:string;
  contra:string;
  mensaje:string;
  log:Login;

  constructor(private register:RegisterService){}

  registerUser(){
    this.register.findIfCreate(this.log)
    .subscribe(data=> {
      if(data){
        this.mensaje ="Movimiento realizado";
      }else{
        this.mensaje = "Nose pudo dar el movimiento pedido!!!";
      }
    })
  }
}
