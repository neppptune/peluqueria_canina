import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/model/Cliente';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Cliente) private userRepository: Repository<Cliente>
  ){}

  async create(cliente: Cliente): Promise<boolean> {
      if (!cliente.email || cliente.email.trim() === '') {
        return true;
      }
      const usuarioRepetido = await this.userRepository.findOneBy({ email: cliente.email });
      if (usuarioRepetido) {
        return true;
      }
      await this.userRepository.save(cliente);
      return false;
  }

  async findOne(email: string, password: string): Promise<Cliente | Error> {
    const usuario = await this.userRepository.findOneBy({ email, password });
    if (usuario) {
      return usuario;
    }
    return new Error('Cuenta no encontrada');
  }

}