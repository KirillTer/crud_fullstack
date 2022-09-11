import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SpecialtiesService } from '../specialties/specialties.service';
import { Company } from './companies.model';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {

  constructor(@InjectModel(Company) private companyRepository: typeof Company, private specService: SpecialtiesService) {}

  async createCompany(dto: CreateCompanyDto) {
    const company = await this.companyRepository.create(dto);
    const specialty = await this.specService.getSpecialtyByValue("spec1")
    await company.$set('specialties', [specialty.id])
    // company.specialties = [specialty]
    return company;
  }

  async getAllCompanies() {
    const companies = await this.companyRepository.findAll({include: {all: true}})
    return companies;
  }
}
