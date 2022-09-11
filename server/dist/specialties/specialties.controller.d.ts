import { Specialty } from './specialties.model';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecDto } from './dto/create-specialty.dto';
export declare class SpecialtiesController {
    private specialtiesService;
    constructor(specialtiesService: SpecialtiesService);
    create(specDto: CreateSpecDto): Promise<Specialty>;
    getAll(): Promise<Specialty[]>;
    getByValue(value: string): Promise<Specialty>;
}
