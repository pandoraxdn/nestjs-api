import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Login{
    
    @PrimaryGeneratedColumn()
    id_user:    number;

    @Column()
    nameuser:   string;

    @Column()
    password:   string;

    @Column()
    image:      string;

    @Column()
    correo:     string;

    // En postgres se coloca en date now "CURRENT_TIMESTAMP"
    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    update:  Date;

}
