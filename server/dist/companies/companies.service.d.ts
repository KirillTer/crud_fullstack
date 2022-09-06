import { Company } from './companies.model';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompaniesService {
    private companyRepository;
    constructor(companyRepository: typeof Company);
    createCompany(dto: CreateCompanyDto): Promise<void>;
    getAllCompanies(): Promise<void>;
}
