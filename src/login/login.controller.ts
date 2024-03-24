import { 
    Controller,
    Post,
    Get,
    Delete,
    Put,
    Body,
    ValidationPipe,
    Param
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLogin } from './dto/create-login.dto';
import { UpdateLogin } from './dto/update-login.dto';

@Controller('login')
export class LoginController {
    
    constructor(
       private loginService: LoginService
    ){}

    @Post()
    async login( @Body( new ValidationPipe() ) updateLogin: UpdateLogin ){
        return await this.loginService.login(updateLogin);
    }

    @Post('register')
    async create( @Body( new ValidationPipe() ) createLogin: CreateLogin ){
        return await this.loginService.create( createLogin );
    }

    @Put('update/:id_user')
    async update( @Param('id_user') id_user: number, @Body( new ValidationPipe ) updateLogin: UpdateLogin ){
        return await this.loginService.update( id_user, updateLogin );
    }

    @Get('list')
    async findAll(){
        return await this.loginService.findAll();
    }

    @Get('find/:id_user')
    async findOne( @Param('id_user') id_user: number ){
        return await this.loginService.findOne( id_user );
    }

    @Delete('delete/:id_user')
    async delete( @Param('id_user') id_user: number ){
        return await this.loginService.delete( id_user );
    }

}
