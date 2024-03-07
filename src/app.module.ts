import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TareasModule } from './tareas/tareas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './usuarios/entities/usuarios.entity';
import { SensorModule } from './sensor/sensor.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pandoradb'),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'betaxdn1',
      database: 'pandoradb',
      entities: [ Usuarios ],
      synchronize: true, // no recomendable en producción
      autoLoadEntities: true, // cargar entidades en db
    }),
    TareasModule,
    UsuariosModule,
    SensorModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
  
export class AppModule {}
