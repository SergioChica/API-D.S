// src/domain/entity/ClientEntity.ts
import { Entity, PrimaryGeneratedColumn , Column } from 'typeorm';

@Entity('Administrador')
export class AdministratorEntity {
  @PrimaryGeneratedColumn({ name: 'Cedula_Admin'})
  id?: number;

  @Column({ name: 'Nombre'})
  name?: string;

  @Column({ unique: true, name: 'Email' })
  email?: string;
  
  @Column({ name: 'Telefono'})
  phone?: number;

  @Column({ name: 'Contraseña'})
  password?: string;

  @Column({ name: 'Direccion'})
  address?: string;

  @Column({ name: 'ID_Centro'})
  idCenter?: number;
}