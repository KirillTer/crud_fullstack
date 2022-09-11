"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtiesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const companies_model_1 = require("../companies/companies.model");
const comp_spec_model_1 = require("./comp-spec.model");
const specialties_controller_1 = require("./specialties.controller");
const specialties_model_1 = require("./specialties.model");
const specialties_service_1 = require("./specialties.service");
let SpecialtiesModule = class SpecialtiesModule {
};
SpecialtiesModule = __decorate([
    (0, common_1.Module)({
        controllers: [specialties_controller_1.SpecialtiesController],
        providers: [specialties_service_1.SpecialtiesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([specialties_model_1.Specialty, companies_model_1.Company, comp_spec_model_1.CompSpec])
        ],
        exports: [
            specialties_service_1.SpecialtiesService
        ]
    })
], SpecialtiesModule);
exports.SpecialtiesModule = SpecialtiesModule;
//# sourceMappingURL=specialties.module.js.map