import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskList } from './task-list.entity.js';

export const TASK_STATUSES = ['pending', 'inprogress', 'done'] as const;
export type TaskStatus = (typeof TASK_STATUSES)[number];

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ name: 'start_date', type: 'timestamptz', nullable: true })
  startDate: Date | null;

  @Column({ name: 'due_date', type: 'timestamptz', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'enum', enum: TASK_STATUSES, default: 'pending' })
  status: TaskStatus;

  @ManyToOne(() => TaskList, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_list_id' })
  taskList: TaskList;
}
