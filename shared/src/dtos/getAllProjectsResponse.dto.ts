import { IsEnum, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { ProjectCategory } from '../enums/projectCategory.enum';

export class GetAllProjectsResponseDto {
    @IsString()
    @IsMongoId()
    @IsNotEmpty()
    _id!: string;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(ProjectCategory)
    category!: ProjectCategory;

    @IsString()
    @IsNotEmpty()
    thumbnail!: string;
}