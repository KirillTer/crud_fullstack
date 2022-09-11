import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Specialty } from './specialties.model';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecDto } from './dto/create-specialty.dto';

@ApiTags('Specialties')
@Controller('spec')
export class SpecialtiesController {

  constructor(private specialtiesService: SpecialtiesService) {}

  @ApiOperation({summary: 'Create specialty'})
  @ApiResponse({status: 200, type: Specialty})
  @Post()
  create(@Body() specDto: CreateSpecDto) {
    return this.specialtiesService.createSpecialty(specDto);
  }

  @ApiOperation({summary: 'Get all specialties'})
  @ApiResponse({status: 200, type: [Specialty]})
  @Get()
  getAll() {
    return this.specialtiesService.getAllSpecialties();
  }

  @ApiOperation({summary: 'Get specialty by value'})
  @ApiResponse({status: 200, type: Specialty})
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.specialtiesService.getSpecialtyByValue(value);
  }
}
