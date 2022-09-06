import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CompanyCreationAttrs {
  name: string;
  logo: string;
  specialties: string;
  city: string;
}

@Table({tableName: 'companies'})
export class Company extends Model<Company, CompanyCreationAttrs> {
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique:true, allowNull: false})
  name: string;

  @Column({type: DataType.STRING, unique:true, allowNull: false})
  logo: string;

  @Column({type: DataType.STRING, unique:true, allowNull: false})
  specialties: string;

  @Column({type: DataType.STRING, unique:true, allowNull: false})
  city: string;
}