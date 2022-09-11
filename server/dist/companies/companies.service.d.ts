import { SpecialtiesService } from '../specialties/specialties.service';
import { Company } from './companies.model';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompaniesService {
    private companyRepository;
    private specService;
    constructor(companyRepository: typeof Company, specService: SpecialtiesService);
    createCompany(dto: CreateCompanyDto): Promise<Company>;
    getAllCompanies(): Promise<Company[]>;
}
