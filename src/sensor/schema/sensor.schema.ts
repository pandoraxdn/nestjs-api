import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Sensor{

    @Prop({ type:Date, default: Date.now })
    fecha: Date;

    @Prop()
    distancia_cm: number;

    @Prop()
    distancia_inch: number;
  
}

export const SensorSchema = SchemaFactory.createForClass( Sensor );
