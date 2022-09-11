import { Company } from './companies.model';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompaniesController {
    private companiesService;
    constructor(companiesService: CompaniesService);
    create(companyDto: CreateCompanyDto): Promise<Company>;
    getAll(): Promise<Company[]>;
}
