"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtiesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const specialties_model_1 = require("./specialties.model");
let SpecialtiesService = class SpecialtiesService {
    constructor(specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }
    async createSpecialty(dto) {
        const specialty = await this.specialtyRepository.create(dto);
        return specialty;
    }
    async getAllSpecialties() {
        const specialties = await this.specialtyRepository.findAll();
        return specialties;
    }
    async getSpecialtyByValue(value) {
        const specialty = await this.specialtyRepository.findOne({ where: { value } });
        return specialty;
    }
};
SpecialtiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(specialties_model_1.Specialty)),
    __metadata("design:paramtypes", [Object])
], SpecialtiesService);
exports.SpecialtiesService = SpecialtiesService;
//# sourceMappingURL=specialties.service.js.map