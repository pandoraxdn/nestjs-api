import { 
    IsString, 
    MaxLength, 
    MinLength, 
    IsDateString,
    IsOptional
} from "class-validator";

export class UpdateLogin{

    @IsString()
    @MaxLength(255)
    @MinLength(6)
    @IsOptional()
    nameuser:   string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsOptional()
    password:   string;

    @IsString()
    @MaxLength(255)
    @MinLength(5)
    @IsOptional()
    image:      string;

    @IsString()
    @MaxLength(255)
    @MinLength(5)
    @IsOptional()
    correo:     string;

    @IsOptional()
    @IsDateString()
    update:  Date;

}
