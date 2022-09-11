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
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const specialties_service_1 = require("../specialties/specialties.service");
const companies_model_1 = require("./companies.model");
let CompaniesService = class CompaniesService {
    constructor(companyRepository, specService) {
        this.companyRepository = companyRepository;
        this.specService = specService;
    }
    async createCompany(dto) {
        const company = await this.companyRepository.create(dto);
        const specialty = await this.specService.getSpecialtyByValue("spec1");
        await company.$set('specialties', [specialty.id]);
        return company;
    }
    async getAllCompanies() {
        const companies = await this.companyRepository.findAll({ include: { all: true } });
        return companies;
    }
};
CompaniesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(companies_model_1.Company)),
    __metadata("design:paramtypes", [Object, specialties_service_1.SpecialtiesService])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map