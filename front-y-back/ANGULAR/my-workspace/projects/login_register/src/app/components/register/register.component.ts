import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { Cliente } from '../../model/Cliente';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule, RouterModule],
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
  cliente:Cliente;

  constructor(private register:RegisterService,  private router: Router){}

  registerUser(){
    this.cliente = new Cliente( this.dni, this.nombre, this.email, this.contra, this.telefono);
    console.log(this.cliente)
    this.register.findIfCreate(this.cliente)
    .subscribe(data=> {
      if(data){
        console.log("Usuario creado correctamente", data);
      }else{
        console.log("Error al crear el usuario");
      }
    })
  }
    goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
