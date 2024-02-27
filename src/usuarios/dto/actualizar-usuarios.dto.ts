import {
    IsString,
    MaxLength,
    MinLength,
    IsOptional
}
from 'class-validator';

export class ActualizarUsuarios{

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsOptional()
    username?: string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsOptional()
    email?: string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsOptional()
    password?: string;

    @IsString()
    @MaxLength(255)
    @MinLength(4)
    @IsOptional()
    cp?: string;

}
