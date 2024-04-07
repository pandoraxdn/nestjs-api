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

    async findDays( find: string ) {
        switch( find ){
            case "today":
                const today = new Date();
                return await this.findDataOfDays(today);
            case "yesterday":
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                return await this.findDataOfDays(yesterday);
            case 'beforeYesterday':
                const beforeYesterday = new Date();
                beforeYesterday.setDate(beforeYesterday.getDate() - 2);
                return await this.findDataOfDays(beforeYesterday);
        }
    }

    async findDataOfDays( data: Date ){

        const startOfDay = new Date(data);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(data);
        endOfDay.setHours(23, 59, 59, 999);

        const records = await this.sensorModel.find({
            fecha: {
              $gte: startOfDay,
              $lte: endOfDay,
            }
        })
        .sort({
            fecha : - 1,
        })
        .limit(5);

        return records;
    }

    async data(){

        const numberRegisters = await this.sensorModel.countDocuments().exec();

        const lastToday =  await this.findDays("today");

        const maxToday = (lastToday.length != 0) ? lastToday.reduce(( max, obj ) => obj.distancia_cm > max ? obj.distancia_cm: max, lastToday[0].distancia_cm) : 0;

        const minToday = (lastToday.length != 0) ? lastToday.reduce(( min, obj ) => obj.distancia_cm < min ? obj.distancia_cm: min, lastToday[0].distancia_cm) : 0;

        const lastYesterday =  await this.findDays("yesterday");

        const maxYesterday = (lastYesterday.length != 0 ) ? lastYesterday.reduce(( max, obj ) => obj.distancia_cm > max ? obj.distancia_cm: max, lastYesterday[0].distancia_cm) : 0;

        const minYesterday = (lastYesterday.length != 0) ? lastYesterday.reduce(( min, obj ) => obj.distancia_cm < min ? obj.distancia_cm: min, lastYesterday[0].distancia_cm) : 0;

        const lastBeforeYesterday =  await this.findDays("beforeYesterday");

        const maxBeforeYesterday = (lastBeforeYesterday.length != 0) ? lastBeforeYesterday.reduce(( max, obj ) => obj.distancia_cm > max ? obj.distancia_cm: max, lastBeforeYesterday[0].distancia_cm) : 0;

        const minBeforeYesterday = (lastBeforeYesterday.length != 0) ? lastBeforeYesterday.reduce(( min, obj ) => obj.distancia_cm < min ? obj.distancia_cm: min, lastBeforeYesterday[0].distancia_cm) : 0;

        return {
            numberRegisters,
            today: {
                maxToday,
                minToday,
                lastToday
            },
            yesterday:{
                maxYesterday,
                minYesterday,
                lastYesterday,
            },
            beforeYesterday: {
                maxBeforeYesterday,
                minBeforeYesterday,
                lastBeforeYesterday
            }
        }
    }

}
