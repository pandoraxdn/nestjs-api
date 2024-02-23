import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum TareaEstado{
    pendiente = 'Pendiente',
    en_proceso = 'En proceso',
    completado = 'Completado',
}

@Schema()
export class Tareas{
    @Prop({ required: true })
    titulo: string;

    @Prop()
    descripcion: string;

    @Prop({ default: TareaEstado.pendiente })
    estado: TareaEstado;
}

export const TareasSchema = SchemaFactory.createForClass( Tareas );
