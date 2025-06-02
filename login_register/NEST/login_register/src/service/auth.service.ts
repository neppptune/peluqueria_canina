import { Injectable } from '@nestjs/common';
import { User } from 'src/model/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}

  async create(user: User): Promise<boolean> {
      if (!user.dni || user.dni.trim() === '') {
        return true;
      }
      const usuarioRepetido = await this.userRepository.findOneBy({ email: user.email });
      if (usuarioRepetido) {
        return true;
      }
      await this.userRepository.save(user);
      return false;
  }

  async findOne(email: string, password: string): Promise<User | Error> {
      const usuario = await this.userRepository.findOneBy({ email, password });
      if (usuario) {
        return usuario;
      }
      return new Error('Cuenta no encontrada');
    }

}