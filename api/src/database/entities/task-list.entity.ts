import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task_lists')
export class TaskList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
