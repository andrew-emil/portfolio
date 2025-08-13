import { GetAllProjectsResponseDto } from './getAllProjectsResponse.dto';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetProjectResponseDto extends GetAllProjectsResponseDto {
    @IsNotEmpty()
    @IsString()
    description!: string;

    @IsNotEmpty()
    @IsArray()
    @IsString({each: true})
    technologies!: string[];

    @IsString()
    githubLink?: string;

    @IsString()
    liveDemo?: string;

    @IsNumber()
    __v?: number;
}