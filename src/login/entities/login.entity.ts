import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Login{
    
    @PrimaryGeneratedColumn()
    id_user:    number;

    @Column()
    nameuser:   string;

    @Column()
    password:   string;

    // Almacenar imagenes en base64 postgressql
    @Column({ type: 'text' })
    image:      string;

    @Column()
    correo:     string;

    // En postgres se coloca en date now "CURRENT_TIMESTAMP"
    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
    update:  Date;

}
