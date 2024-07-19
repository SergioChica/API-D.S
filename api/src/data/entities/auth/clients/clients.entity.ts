// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('example')
export class ClientsEntity {
  @PrimaryGeneratedColumn({ name: 'Id_Usuario'})
  id?: number;

  @Column({ name: 'Nombre'})
  name?: string;

  @Column({ name: 'Apellido'})
  lastName?: string;

  @Column({ unique: true, name: 'Email' })
  email?: string;
  
  @Column({ name: 'Telefono'})
  phone?: number;

  @Column({ name: 'Direccion'})
  address?: string;
  
  @Column({ name: 'Asistencia'})
  assistance?: string;

  // @Column({ name: 'state'})
  // state?: string;
  
  @Column({ name: 'Id_Centro '})
  idCenter?: number;
}