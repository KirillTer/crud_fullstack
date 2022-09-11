import { Model } from "sequelize-typescript";
import { Company } from "../companies/companies.model";
interface SpecialtyCreationAttrs {
    value: string;
}
export declare class Specialty extends Model<Specialty, SpecialtyCreationAttrs> {
    id: number;
    value: string;
    companies: Company[];
}
export {};
