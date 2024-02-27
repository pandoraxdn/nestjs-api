import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entities/usuarios.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Usuarios,
    ])],
    controllers: [UsuariosController],
    providers: [UsuariosService]
})
export class UsuariosModule {}
