import { Controller, Get, NotFoundException, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/auth.guard';
import { UploadsService } from './uploads.service';
import express from 'express';


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
  async getCv(@Res() res: express.Response) {
    const responseBody = await this.uploadsService.findOne();
    if (!responseBody) {
      throw new NotFoundException('File not found');
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader("Content-Disposition", 'attachment; filename="cv.pdf"');
    await responseBody.pipeTo(
      new WritableStream({
      write(chunk) {
        res.write(chunk);
      },
      close() {
        res.end();
      },
    }),)
  }
}