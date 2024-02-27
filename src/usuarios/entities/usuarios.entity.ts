import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn 
} from 'typeorm';

@Entity()
export class Usuarios{

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({
        type: "text",
        nullable: false
    })
    username: string;

    @Column({
        type: "text",
        nullable: false
    })
    email: string;

    @Column({
        type: "text",
        nullable: false
    })
    password: string;

    @Column({
        type: "text",
        nullable: false
    })
    cp: string;

}
