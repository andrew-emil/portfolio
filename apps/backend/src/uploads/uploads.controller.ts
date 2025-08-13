import { Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/auth.guard';
import { UploadsService } from './uploads.service';


@Controller('uploads')
export class UploadsController {
  constructor(
    private readonly uploadsService: UploadsService,
  ) { }

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  uploadCV(@UploadedFile() file: Express.Multer.File,) {
    return this.uploadsService.create(file);
  }

  @Get()
  async getCv() {
    return this.uploadsService.findOne();
  }
}