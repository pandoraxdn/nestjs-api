import { 
    Controller,
    Post,
    Body,
    ValidationPipe,
    Put,
    Delete,
    Get,
    Param
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CrearUsuarios } from './dto/crear-usuarios.dto';
import { ActualizarUsuarios } from './dto/actualizar-usuarios.dto';

@Controller('usuarios')
export class UsuariosController {

    constructor( private usuariosService: UsuariosService ){}

    @Post()
    async create( @Body( new ValidationPipe() ) createUser: CrearUsuarios ){
        return await this.usuariosService.create( createUser);
    }

    @Put(':id_usuario')
    async update( @Param('id_usuario') id_usuario: number, @Body( new ValidationPipe() ) updateUser: ActualizarUsuarios ){
        return await this.usuariosService.update( id_usuario, updateUser );
    }

    @Get()
    async findAll(){
        return await this.usuariosService.findAll();
    }

    @Get(':id_usuario')
    async findOne( @Param('id_usuario') id_usuario: number ){
        return await this.usuariosService.findOne( id_usuario );
    }

    @Delete(':id_usuario')
    async delete( @Param('id_usuario') id_usuario: number ){
        return await this.usuariosService.delete( id_usuario );
    }

}
