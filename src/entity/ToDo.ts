import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ToDo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column()
    created_at: Date;

    @Column()
    completed_at: Date;

    @Column()
    notes: string;

    @Column()
    category: string;

}
