import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {

  @ApiProperty({example: 'CompanyName1', description: 'name of company'})
  readonly name: string;

  @ApiProperty({example: 'CompanyLogo1', description: 'logo of company'})
  readonly logo: string;

  @ApiProperty({example: 'CompanyCity1', description: 'city of company'})
  readonly city: string;
}