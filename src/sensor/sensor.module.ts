import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sensor, SensorSchema } from './schema/sensor.schema';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Sensor.name,
        schema: SensorSchema,
      }
    ]),    
  ],
  controllers: [SensorController],
  providers: [SensorService]
})
export class SensorModule {}
