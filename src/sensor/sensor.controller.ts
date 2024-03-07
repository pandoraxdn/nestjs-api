import { Post, Body, ValidationPipe, Get, Delete, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensor } from './dto/create-sensor.dto';

@Controller('sensor')
export class SensorController {

	constructor( private sensorService: SensorService ){}

	@Post()
    async create( @Body( new ValidationPipe() ) createdRegister: CreateSensor ){
        return this.sensorService.create( createdRegister );
    }

    @Get()
    async findAll(){
        return this.sensorService.findAll();
    }

    @Get('last')
    async findLast(){
        return this.sensorService.findLast();
    }

    @Get('five')
    async findFiveLast(){
        return this.sensorService.findFiveLast();
    }

    @Delete(':id')
    async delete( @Param('id') id: string ){
        return this.sensorService.delete( id );
    }

}
