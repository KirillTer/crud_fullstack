import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SpecialtiesModule } from '../specialties/specialties.module';
import { CompSpec } from '../specialties/comp-spec.model';
import { Specialty } from '../specialties/specialties.model';
import { CompaniesController } from './companies.controller';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [
    SequelizeModule.forFeature([Company, Specialty, CompSpec]),
    SpecialtiesModule
  ]
})
export class CompaniesModule {}
