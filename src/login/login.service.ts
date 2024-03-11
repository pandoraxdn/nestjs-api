import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './entities/login.entity';
import { CreateLogin } from './dto/create-login.dto';
import { UpdateLogin } from './dto/update-login.dto';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository( Login )
        private loginRepository: Repository<Login>
    ){}

    async create( createLogin: CreateLogin ){
        const new_user = this.loginRepository.create( createLogin );
        return await this.loginRepository.save( new_user );
    }

    async update( id_user: number, updateLogin: UpdateLogin ){
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

