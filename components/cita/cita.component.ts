import { Component } from '@angular/core';
import { CitaService } from '../../service/cita.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CitaAltaClienteDto } from '../../model/CitaAltaClienteDto';
import { CitaAltaEmpleadoDto } from '../../model/CitaAltaEmpleadoDto';

@Component({
  selector: 'app-cita',
  imports: [FormsModule, CommonModule],
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.css'
})
export class CitaComponent {

  id_cita: number;
  email_cliente: string;
  nombre_cliente: string;
  telefono_cliente: string;
  dni_empleado: string;
  id_mas:number;
  nombre_mascota:string;
  raza_mascota: string;
  fecha: Date;
  hora: string;
  citas:[];
  mensajeAlta:string;
  idModificar:number;
  eliminarIdCita:number;
  modificarFecha:Date;
  modificarHora:string;
  raza:string;
  edad:number;

   constructor(private citaService:CitaService){}

  mostrarTodasCitas(){
    return this.citaService.allCitas().subscribe();
  }

  altaCitaCliente(){
    let nuevacita = new CitaAltaClienteDto(this.email_cliente,this.dni_empleado,this.id_mas,this.fecha,this.hora)
    this.citaService.altaCitaCliente(nuevacita)
    .subscribe({
      next: cita => {
      this.mensajeAlta = 'Cita creada correctamente.';
      this.id_cita = 0;
      this.email_cliente = '';
      this.nombre_cliente = '';
      this.nombre_mascota = '';
      this.fecha = null;
      this.hora = '';
    },
      error: err => {
        this.mensajeAlta = 'Error al crear la cita.';
      }
    });
  }

  altaCitaEmpleado(){
    let nuevacita = new CitaAltaEmpleadoDto(
      this.email_cliente,
        this.nombre_cliente,
        this.telefono_cliente,
        this.dni_empleado,
        this.nombre_mascota,
        this.raza,
        this.edad,
        this.fecha,
        this.hora,);
    this.citaService.altaCitaEmpleado(nuevacita)
    .subscribe({
      next: cita => {
      this.mensajeAlta = 'Cita creada correctamente.';
      this.id_cita = 0;
      this.dni_empleado = '';
      this.email_cliente = '';
      this.nombre_cliente = '';
      this.nombre_mascota = '';
      this.fecha = null;
      this.hora = '';
    },
      error: err => {
        this.mensajeAlta = 'Error al crear la cita.';
      }
    });

  }

  modificarCita() {
    this.citaService.modifyCita(
      this.idModificar,
      {
        email_cliente: this.email_cliente,
        nombre_cliente: this.nombre_cliente,
        nombre_mascota: this.nombre_mascota,
        fecha: this.modificarFecha,
        hora: this.modificarHora,
      }
    ).subscribe({
      next: (resultado) => {
        this.mensajeAlta = resultado ? 'Cita modificada correctamente.' : 'No se pudo modificar la cita.';
      },
      error: () => {
        this.mensajeAlta = 'Error al modificar la cita.';
      }
    });
  }

    eliminarCita() {
    this.citaService.deleteCita(this.eliminarIdCita).subscribe({
      next: (resultado) => {
        this.mensajeAlta = resultado ? 'Cita eliminado correctamente.' : 'No se pudo eliminar la cita.';
      },
      error: () => {
        this.mensajeAlta = 'Error al eliminar la cita.';
      }
    });
  }








}
