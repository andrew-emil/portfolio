import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Upload, UploadSchema } from './entities/upload.entity';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { CloudinaryProvider } from './providers/cloudinary.provider';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, CloudinaryProvider],
  imports: [MongooseModule.forFeature([{ name: Upload.name, schema: UploadSchema }])]
})
export class UploadsModule { }