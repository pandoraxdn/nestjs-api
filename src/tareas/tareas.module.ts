import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tareas, TareasSchema } from './schema/tareas.schema';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Tareas.name,
                schema: TareasSchema,
            }
        ]),    
    ],
    providers: [TareasService],
    controllers: [TareasController]
})
export class TareasModule {}
