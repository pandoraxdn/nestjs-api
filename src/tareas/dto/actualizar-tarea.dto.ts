import { IsNotEmpty, IsString, IsOptional, IsEnum } from "class-validator";
import { TareaEstado } from "../schema/tareas.schema";

export class ActualizarTarea{

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    titulo: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsEnum(TareaEstado)
    @IsOptional()
    estado?: TareaEstado;

}
