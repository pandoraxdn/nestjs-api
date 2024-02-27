import {
    IsString,
    MaxLength,
    MinLength,
}
from 'class-validator';

export class CrearUsuarios{

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    username: string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    email: string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    password: string;

    @IsString()
    @MaxLength(255)
    @MinLength(4)
    cp: string;

}
