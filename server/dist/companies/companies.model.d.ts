import { Model } from "sequelize-typescript";
interface CompanyCreationAttrs {
    name: string;
    logo: string;
    specialties: string;
    city: string;
}
export declare class Company extends Model<Company, CompanyCreationAttrs> {
    id: number;
    name: string;
    logo: string;
    specialties: string;
    city: string;
}
export {};
