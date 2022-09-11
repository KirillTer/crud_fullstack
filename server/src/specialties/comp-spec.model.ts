import { Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Company } from "../companies/companies.model";
import { Specialty } from "./specialties.model";


@Table({tableName: 'comp_spec', createdAt: false, updatedAt: false})
export class CompSpec extends Model<CompSpec> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Company)
    @Column({type: DataType.INTEGER})
    compId: number;

    @ForeignKey(() => Specialty)
    @Column({type: DataType.INTEGER})
    specId: number;

}