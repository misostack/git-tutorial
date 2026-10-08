import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { TaskList } from './task-list.entity.js';
import { User } from './user.entity.js';

@Entity('circles')
@Unique(['user', 'invitedUser', 'taskList'])
export class Circle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'invited_user_id' })
  invitedUser: User;

  @ManyToOne(() => TaskList, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_list_id' })
  taskList: TaskList;
}
