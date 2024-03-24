import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './entities/login.entity';
import { CreateLogin } from './dto/create-login.dto';
import { UpdateLogin } from './dto/update-login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository( Login )
        private loginRepository: Repository<Login>
    ){}

    async login( updateLogin: UpdateLogin ){
        try{
            const user: Login = await this.loginRepository.findOneBy({ correo: updateLogin.correo });
            return ( await bcrypt.compare( updateLogin.password, user.password) ) ? user : false;
        }catch (error){
            return false;
        }
    }

    async create( createLogin: CreateLogin ){

        const slatOrRounds = 10;
        const hash = await bcrypt.hash( createLogin.password, slatOrRounds);
        const register = { ...createLogin, password: hash };
        const new_user = this.loginRepository.create( register );

        return await this.loginRepository.save( new_user );

    }

    async update( id_user: number, updateLogin: UpdateLogin ){

        // Viejos habitos
        /*
        if( updateLogin.password ){
            const slatOrRounds = 10;
            const hash = await bcrypt.hash( updateLogin.password, slatOrRounds);
            const register = { ...updateLogin, password: hash };
            return await this.loginRepository.update( id_user, register );
        }
        */
        
        ( updateLogin.password ) && ( async () =>{
            const slatOrRounds = 10;
            const hash = await bcrypt.hash( updateLogin.password, slatOrRounds);
            const register = { ...updateLogin, password: hash };
            return await this.loginRepository.update( id_user, register );
        })();

        return await this.loginRepository.update( id_user, updateLogin );
    }
    
    async findAll(){
        return await this.loginRepository.find();
    }

    async findOne( id_user: number ){
        return await this.loginRepository.findBy({ id_user });
    }

    async delete( id_user: number){
        return await this.loginRepository.delete( id_user );
    }

}

