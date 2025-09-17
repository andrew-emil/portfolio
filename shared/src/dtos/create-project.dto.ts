import {
    ArrayNotEmpty,
    IsArray,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl
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
    @IsUrl({}, { message: 'repositoryUrl must be a valid URL' })
    repositoryUrl?: string;

    @IsOptional()
    @IsUrl({}, { message: 'liveUrl must be a valid URL' })
    liveUrl?: string;

    @IsOptional()
    thumbnail?: Buffer;
}