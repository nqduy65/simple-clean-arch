// Libs importing

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'username' })
  name: string;

  @Column({ type: 'varchar', name: 'email' })
  email: string;
}
