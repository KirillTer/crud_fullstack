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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const comp_spec_model_1 = require("../specialties/comp-spec.model");
const specialties_model_1 = require("../specialties/specialties.model");
let Company = class Company extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'unic id' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CompanyName1', description: 'name of company' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CompanyLogo1', description: 'logo of company' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Company.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CompanyCity1', description: 'city of company' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Company.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => specialties_model_1.Specialty, () => comp_spec_model_1.CompSpec),
    __metadata("design:type", Array)
], Company.prototype, "specialties", void 0);
Company = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'companies' })
], Company);
exports.Company = Company;
//# sourceMappingURL=companies.model.js.map