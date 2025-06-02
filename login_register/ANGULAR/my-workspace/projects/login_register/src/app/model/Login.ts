export class Login {

  dni: string;
  name: string;
  email: string;
  telefono: string;
  password: string;

  constructor(dni: string, name: string, email: string, tel:string, password: string) {
    this.dni = dni;
    this.name = name;
    this.email = email;
    this.telefono = tel;
    this.password = password;
  }
}
