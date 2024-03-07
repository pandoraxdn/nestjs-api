import { IsNotEmpty, IsString, IsOptional, IsDateString, IsNumber } from "class-validator";

export class CreateSensor{

    @IsDateString()
    @IsOptional()
    fecha?: Date;

    @IsNumber()
    distancia_cm: number;

    @IsNumber()
    distancia_inch: number;

}
