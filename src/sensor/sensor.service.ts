import { Injectable } from '@nestjs/common';
import { Sensor } from './schema/sensor.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSensor } from './dto/create-sensor.dto';

@Injectable()
export class SensorService {

	constructor(
        @InjectModel( Sensor.name ) private sensorModel : Model<Sensor>
    ){}

    async create( sensor: CreateSensor ){
        const createdRegister = new this.sensorModel( sensor );
        return await createdRegister.save();
    }

    async findAll(){
        return await this.sensorModel.find().exec();
    }

    async findLast(){
        return await this.sensorModel.findOne().sort({ fecha: -1 }).exec();
    } 

    async findFiveLast(){
        return await this.sensorModel.find().sort({ $natural: -1 }).limit(5);
    }   
    
    async delete( id: string ){
        return await this.sensorModel.findByIdAndDelete( id ).exec();
    }
}
