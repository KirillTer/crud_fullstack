import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { CompSpec } from "../specialties/comp-spec.model";
import { Specialty } from "../specialties/specialties.model";

interface CompanyCreationAttrs {
  name: string;
  logo: string;
  city: string;
}

@Table({tableName: 'companies'})
export class Company extends Model<Company, CompanyCreationAttrs> {
  @ApiProperty({example: '1', description: 'unic id'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'CompanyName1', description: 'name of company'})
  @Column({type: DataType.STRING, unique:true, allowNull: false})
  name: string;

  @ApiProperty({example: 'CompanyLogo1', description: 'logo of company'})
  @Column({type: DataType.STRING, unique:true, allowNull: false})
  logo: string;

  @ApiProperty({example: 'CompanyCity1', description: 'city of company'})
  @Column({type: DataType.STRING, unique:true, allowNull: false})
  city: string;

  @BelongsToMany(() => Specialty, () => CompSpec)
  specialties: Specialty[];
}