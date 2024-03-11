import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TareasModule } from './tareas/tareas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './usuarios/entities/usuarios.entity';
import { SensorModule } from './sensor/sensor.module';
import { LoginModule } from './login/login.module';
import { Login } from './login/entities/login.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pandoradb'),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'najimi',
      password: 'pass',
      database: 'pandoradb',
      entities: [ Usuarios ],
      synchronize: true, // no recomendable en producción
      autoLoadEntities: true, // cargar entidades en db
    }),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'najimi',
        password: 'pass',
        database: 'pandora',
        entities: [ Login ],
        synchronize: true,
        autoLoadEntities: true
    }),
    TareasModule,
    UsuariosModule,
    SensorModule,
    LoginModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
  
export class AppModule {}
