import { BadRequestException, Body, Controller, Delete, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateProjectDto } from "@shared/dtos/create-project.dto";
import { AuthGuard } from 'src/auth/auth.guard';
import { ProjectsService } from './projects.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('thumbnail'))
  create(@Body() createProjectDto: CreateProjectDto, @UploadedFile() thumbnail: Express.Multer.File) {
    if (!thumbnail) throw new BadRequestException('Thumbnail is required');
    createProjectDto.thumbnail = thumbnail.buffer;
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}