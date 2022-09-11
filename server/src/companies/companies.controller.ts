import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@ApiTags('Companies')
@Controller('comp')
export class CompaniesController {

  constructor(private companiesService: CompaniesService) {}

  @ApiOperation({summary: 'Create company'})
  @ApiResponse({status: 200, type: Company})
  @Post()
  create(@Body() companyDto: CreateCompanyDto) {
    return this.companiesService.createCompany(companyDto);
  }

  @ApiOperation({summary: 'Get all companies'})
  @ApiResponse({status: 200, type: [Company]})
  @Get()
  getAll() {
    return this.companiesService.getAllCompanies();
  }
}
