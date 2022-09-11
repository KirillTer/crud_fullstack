import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Company } from "../companies/companies.model";
import { CompSpec } from "./comp-spec.model";

interface SpecialtyCreationAttrs {
  value: string;
}

@Table({tableName: 'specialties'})
export class Specialty extends Model<Specialty, SpecialtyCreationAttrs> {
  @ApiProperty({example: '1', description: 'unic id'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Excavation', description: 'value of specialtiy'})
  @Column({type: DataType.STRING, unique:true, allowNull: false})
  value: string;

  @BelongsToMany(() => Company, () => CompSpec)
  companies: Company[];
}