import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Company } from "./companies/companies.model";
import { CompaniesModule } from './companies/companies.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { Specialty } from "./specialties/specialties.model";
import { CompSpec } from "./specialties/comp-spec.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Company, Specialty, CompSpec],
      autoLoadModels: true,
    }),
    CompaniesModule,
    SpecialtiesModule,
  ]
})

export class AppModule{}