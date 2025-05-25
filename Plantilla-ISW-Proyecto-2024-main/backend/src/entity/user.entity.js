"use strict";
import { EntitySchema } from "typeorm";

const UserSchema = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    nombreCompleto: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
    rut: {
      type: "varchar",
      length: 12,
      nullable: false,
      unique: true,
    },
    email: {
      type: "varchar",
      length: 255,
      nullable: false,
      unique: true,
    },
    rol: {
      type: "varchar",
      length: 50,
      nullable: false,
    },
    password: {
      type: "varchar",
      nullable: false,
    },
    createdAt: {
      type: "timestamp with time zone",
      default: () => "CURRENT_TIMESTAMP",
      nullable: false,
    },
    updatedAt: {
      type: "timestamp with time zone",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP",
      nullable: false,
    },
  },
  indices: [
    {
      name: "IDX_USER",
      columns: ["id"],
      unique: true,
    },
    {
      name: "IDX_USER_RUT",
      columns: ["rut"],
      unique: true,
    },
    {
      name: "IDX_USER_EMAIL",
      columns: ["email"],
      unique: true,
    },
  ],
});

export default UserSchema;

///////////////////////////////////////////////////////////////////////////////////
// ENTIDAD ESPACIO COMUN
export const EspacioComunSchema = new EntitySchema({
  name: "EspacioComun",
  tableName: "espacios_comunes",
  columns: {
    id_espacio: {
      type: "int",
      primary: true,
      generated: true,
    },
    nombre: {
      type: "varchar",
      length: 100,
      nullable: false,
      unique: true,
    },
    descripcion: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    disponibilidad: {
      type: "boolean",
      default: true,
    },
  },
});

// ENTIDAD RESERVA
export const ReservaSchema = new EntitySchema({
  name: "Reserva",
  tableName: "reservas",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    fecha: {
      type: "date",
      nullable: false,
    },
    horaInicio: {
      type: "time",
      nullable: false,
    },
    horaFin: {
      type: "time",
      nullable: false,
    },
      estado: {
    type: "varchar",
    length: 20,
    default: "pendiente"
  },
  },
  relations: {
    usuario: {
      type: "many-to-one",
      target: "User",
      joinColumn: true,
      nullable: false,
    },
    espacioComun: {
      type: "many-to-one",
      target: "EspacioComun",
      joinColumn: true,
      nullable: false,
    },
  }
});
