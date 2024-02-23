import { Injectable } from '@nestjs/common';
import { Tareas } from './schema/tareas.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CrearTarea } from './dto/crear-tarea.dtop';
import { ActualizarTarea } from './dto/actualizar-tarea.dto';

@Injectable()
export class TareasService {

    constructor(
        @InjectModel(Tareas.name) private tareasModel : Model<Tareas>
    ){}

    async create( tarea: CrearTarea ){
        const createdTarea = new this.tareasModel( tarea );
        return createdTarea.save();
    }

    async update( id: string, tarea: ActualizarTarea ){
        return this.tareasModel.findByIdAndUpdate( id, tarea, {
            new: true,
        })
        .exec();
    }

    async findOne( id: string ){
        return this.tareasModel.findById( id ).exec();
    }
    
    async findAll(){
        return this.tareasModel.find().exec();
    }

    async delete( id: string ){
        return this.tareasModel.findByIdAndDelete( id ).exec();
    }
}
