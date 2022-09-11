import { Model } from "sequelize-typescript";
import { Specialty } from "../specialties/specialties.model";
interface CompanyCreationAttrs {
    name: string;
    logo: string;
    city: string;
}
export declare class Company extends Model<Company, CompanyCreationAttrs> {
    id: number;
    name: string;
    logo: string;
    city: string;
    specialties: Specialty[];
}
export {};
