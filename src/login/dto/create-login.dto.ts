import { 
    IsString, 
    MaxLength, 
    MinLength, 
    IsDateString,
    IsOptional
} from "class-validator";

export class CreateLogin{

    @IsString()
    @MaxLength(255)
    @MinLength(6)
    nameuser:   string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    password:   string;

    @IsString()
    @MaxLength(255)
    @MinLength(5)
    image:      string;

    @IsString()
    @MaxLength(255)
    @MinLength(5)
    correo:     string;

    @IsOptional()
    @IsDateString()
    update:  Date;

}
