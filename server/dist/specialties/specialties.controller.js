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
exports.SpecialtiesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const specialties_model_1 = require("./specialties.model");
const specialties_service_1 = require("./specialties.service");
const create_specialty_dto_1 = require("./dto/create-specialty.dto");
let SpecialtiesController = class SpecialtiesController {
    constructor(specialtiesService) {
        this.specialtiesService = specialtiesService;
    }
    create(specDto) {
        return this.specialtiesService.createSpecialty(specDto);
    }
    getAll() {
        return this.specialtiesService.getAllSpecialties();
    }
    getByValue(value) {
        return this.specialtiesService.getSpecialtyByValue(value);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create specialty' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: specialties_model_1.Specialty }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialty_dto_1.CreateSpecDto]),
    __metadata("design:returntype", void 0)
], SpecialtiesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all specialties' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [specialties_model_1.Specialty] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpecialtiesController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get specialty by value' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: specialties_model_1.Specialty }),
    (0, common_1.Get)('/:value'),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpecialtiesController.prototype, "getByValue", null);
SpecialtiesController = __decorate([
    (0, swagger_1.ApiTags)('Specialties'),
    (0, common_1.Controller)('spec'),
    __metadata("design:paramtypes", [specialties_service_1.SpecialtiesService])
], SpecialtiesController);
exports.SpecialtiesController = SpecialtiesController;
//# sourceMappingURL=specialties.controller.js.map