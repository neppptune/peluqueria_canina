import { CitaAltaEmpleadoDto } from 'src/dto/CitaAltaEmpleadoDto';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitaAltaClienteDto } from '../model/CitaAltaClienteDto';
import { CitaDatosDto } from '../model/CitaDatosDto';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http:HttpClient) { }

    url:string= 'http://localhost:3000/citas';

  allCitas():Observable<CitaDatosDto[]>{
    return this.http.get<CitaDatosDto[]>(`${this.url}todas`)
  }

  altaCitaCliente(nuevoCitaCliente:CitaAltaClienteDto):Observable<CitaAltaClienteDto>{
      return this.http.post<CitaAltaClienteDto>(`${this.url}/altaCita/`,nuevoCitaCliente);
    }

  altaCitaEmpleado(nuevoCitaEmpleado:CitaAltaEmpleadoDto):Observable<CitaAltaEmpleadoDto>{
    return this.http.post<CitaAltaEmpleadoDto>(`${this.url}/altaCita/`,nuevoCitaEmpleado)
  }

    deleteCita(id_cita:number):Observable<CitaDatosDto> {
      return this.http.delete<CitaDatosDto>(`${this.url}/eliminar-cita/${cita}`);
    }

    modifyCita(id_cita,cita:Partial<CitaDatosDto>): Observable<CitaDatosDto> {
      return this.http.patch<CitaDatosDto>(`${this.url}/modificarEmpleado/${cita}`);
    }
  }



