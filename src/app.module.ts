import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pandoradb'),
    TareasModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
