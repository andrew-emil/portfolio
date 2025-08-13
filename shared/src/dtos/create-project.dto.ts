import {
    ArrayNotEmpty,
    IsArray,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString
} from "class-validator";
import { ProjectCategory } from "../enums/projectCategory.enum";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsString()
    @IsEnum(ProjectCategory)
    category!: ProjectCategory;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    technologies!: string[];

    @IsOptional()
    @IsString()
    repositoryUrl?: string;

    @IsOptional()
    @IsString()
    liveUrl?: string;

    @IsOptional()
    thumbnail?: Buffer;
}