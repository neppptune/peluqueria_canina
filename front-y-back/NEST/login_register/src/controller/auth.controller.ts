import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  Res,
  Post,
} from '@nestjs/common';
//IMPORTANTE IMPORTAR RESPONSE
import {Response} from 'express';
import { AuthService } from '../service/auth.service';
import { Cliente } from 'src/model/Cliente';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
  async create(@Body() user: Cliente, @Res() res: Response):Promise<Response> {
    const usuariorepetido = await this.authService.create(user);
    if(usuariorepetido){
      return res.status(499).json(
      {
        message: 'El usuario ya existe',
      });
    }else{
      return res.status(201).json({
        message: 'Usuario creado'
      });
    }
  }

  @Get('buscar/:email,:password')
  async findOne(@Param('email') email: string, @Param('password') password: string, @Res() res: Response):Promise<Response> {
    const user = await this.authService.findOne(email, password);
    if(user){
      return res.status(200).json(user);
    }else{
      return res.status(499).json({
        message: 'Cuenta no encontrada'
      });
    }
  }
  
}