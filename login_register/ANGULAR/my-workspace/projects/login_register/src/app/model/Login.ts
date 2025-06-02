export class Login {

  dni: string;
  name: string;
  email: string;
  password: string;
  telefono: string;

  constructor(dni: string, name: string, email: string, password: string, tel:string) {
    this.dni = dni;
    this.name = name;
    this.email = email;
    this.password = password;
    this.telefono = tel;
  }
}
