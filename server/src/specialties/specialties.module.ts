import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from '../companies/companies.model';
import { CompSpec } from './comp-spec.model';
import { SpecialtiesController } from './specialties.controller';
import { Specialty } from './specialties.model';
import { SpecialtiesService } from './specialties.service';

@Module({
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService],
  imports: [
    SequelizeModule.forFeature([Specialty, Company, CompSpec])
  ],
  exports: [
    SpecialtiesService
  ]
})
export class SpecialtiesModule {}
