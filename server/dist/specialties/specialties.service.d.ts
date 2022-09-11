import { CreateSpecDto } from './dto/create-specialty.dto';
import { Specialty } from './specialties.model';
export declare class SpecialtiesService {
    private specialtyRepository;
    constructor(specialtyRepository: typeof Specialty);
    createSpecialty(dto: CreateSpecDto): Promise<Specialty>;
    getAllSpecialties(): Promise<Specialty[]>;
    getSpecialtyByValue(value: string): Promise<Specialty>;
}
