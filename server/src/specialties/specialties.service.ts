import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSpecDto } from './dto/create-specialty.dto';
import { Specialty } from './specialties.model';

@Injectable()
export class SpecialtiesService {
  
  constructor(@InjectModel(Specialty) private specialtyRepository: typeof Specialty) {}

  async createSpecialty(dto: CreateSpecDto) {
    const specialty = await this.specialtyRepository.create(dto);
    return specialty;
  }

  async getAllSpecialties() {
    const specialties = await this.specialtyRepository.findAll();
    return specialties;
  }

  async getSpecialtyByValue(value: string) {
    const specialty = await this.specialtyRepository.findOne({where: {value}});
    return specialty;
  }
}
