import { Post, Body, ValidationPipe, Put, Delete, Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CrearTarea } from './dto/crear-tarea.dtop';
import { ActualizarTarea } from './dto/actualizar-tarea.dto';

@Controller('api/v1/mongodb/tareas')
export class TareasController {

    constructor( private tareasService: TareasService ){}

    @Post()
    async create( @Body( new ValidationPipe() ) createdTarea: CrearTarea ){
        return this.tareasService.create( createdTarea );
    }

    @Put(':id')
    async update( @Param('id') id: string, @Body( new ValidationPipe() ) updateTarea: ActualizarTarea ){
        return this.tareasService.update(id, updateTarea);
    }

    @Get()
    async findAll(){
        return this.tareasService.findAll();
    }

    @Get(':id')
    async findOne( @Param('id') id: string ){
        return this.tareasService.findOne( id );
    }

    @Delete(':id')
    async delete( @Param('id') id: string ){
        return this.tareasService.delete( id );
    }

}
