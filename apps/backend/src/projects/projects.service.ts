import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProjectDto } from "@shared/dtos/create-project.dto";
import { Model } from 'mongoose';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) { }

  async create(createProjectDto: CreateProjectDto) {
    const existingProject = await this.projectModel.findOne({ name: createProjectDto.name });
    if (existingProject) {
      throw new BadRequestException('Project with this name already exists');
    }

    const newProject = new this.projectModel(createProjectDto);
    return await newProject.save();
  }

  async findAll() {
    const projects = await this.projectModel.find().select({
      _id: true,
      name: true,
      thumbnail: true,
      category: true,
    }).lean();

    const formattedProjects = this.formatProjectsData(projects);
    return formattedProjects;
  }

  async findOne(id: string) {
    const project = await this.projectModel.findById(id).lean();
    if (!project) {
      throw new BadRequestException('Project not found');
    }
    const formattedProject = this.formatProjectData(project);

    return formattedProject;
  }

  async remove(id: string) {
    const project = await this.projectModel.findByIdAndDelete(id);
    if (!project) {
      throw new BadRequestException('Project not found');
    }
    return { message: 'Project deleted successfully' }
  }

  private formatProjectData(project: Project) {
    const base64Image = project.thumbnail.toString('base64');
    return {
      ...project,
      thumbnail: `data:image/jpeg;base64,${base64Image}`,
    };
  }

  private formatProjectsData(projects: Project[]) {
    return projects.map(project => {
      const base64Image = project.thumbnail.toString('base64');
      return {
        ...project,
        thumbnail: `data:image/jpeg;base64,${base64Image}`,
      };
    });
  }
}