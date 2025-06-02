import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/User';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'nestuser',
        password: 'nestpass',
        database: 'db_peluqueria',
        entities: [User],
        synchronize: false,
    }),
    TypeOrmModule.forFeature([User,]),
    
  ],
  controllers: [ AuthController],
  providers: [ AuthService],
})
export class AppModule {}