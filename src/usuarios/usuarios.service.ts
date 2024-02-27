import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearUsuarios } from './dto/crear-usuarios.dto';
import { Usuarios } from './entities/usuarios.entity';
import { ActualizarUsuarios } from './dto/actualizar-usuarios.dto';

@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository( Usuarios )
        private usuarioRepository: Repository<Usuarios>
    ){}

    async create( createUser: CrearUsuarios ){
        const new_user = this.usuarioRepository.create( createUser );
        return await this.usuarioRepository.save( new_user ); 
    }

    async update( id_usuario: number, updateUser: ActualizarUsuarios ){
        return await this.usuarioRepository.update( id_usuario, updateUser );
    }

    async findAll(){
        return await this.usuarioRepository.find();
    }

    async findOne( id_usuario: number ){
        return await this.usuarioRepository.findBy({id_usuario});
    }

    async delete( id_usuario: number ){
        return await this.usuarioRepository.delete( id_usuario );
    }

}
