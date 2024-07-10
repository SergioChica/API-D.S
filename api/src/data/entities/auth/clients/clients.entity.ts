// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('example')
export class ClientsEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'name'})
  name?: string;

  @Column({ name: 'lastName'})
  lastName?: string;

  @Column({ unique: true, name: 'email' })
  email?: string;
  
  @Column({ name: 'phone'})
  phone?: number;

  @Column({ name: 'password'})
  password?: string;

  @Column({ name: 'address'})
  address?: string;
  
  @Column({ name: 'assistance'})
  assistance?: string;

  @Column({ name: 'state'})
  state?: string;
}