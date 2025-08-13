import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Upload } from './entities/upload.entity';
import { CloudinaryProvider } from './providers/cloudinary.provider';

@Injectable()
export class UploadsService {
  constructor(
    @InjectModel(Upload.name)
    private readonly uploadModel: Model<Upload>,
    private readonly cloudinaryProvider: CloudinaryProvider,
  ) { }

  async create(file: Express.Multer.File) {
    try {
      const isExists = await this.uploadModel.findOne().exec();
      if (isExists) {
        await Promise.all([
          this.cloudinaryProvider.deleteFile(isExists.publicId),
          this.uploadModel.deleteOne().exec(),
        ]);
      }

      const cloudinaryResult = await this.cloudinaryProvider.uploadFile(file);
      const uploadedCV = new this.uploadModel({
        publicId: cloudinaryResult.public_id,
        secureUrl: cloudinaryResult.secure_url,
      })

      return await uploadedCV.save();
    } catch (error) {
      console.error('Error uploading file:', error);
      throw new Error('File upload failed');
    }

  }

  async findOne() {
    return await this.uploadModel.findOne().exec();
  }
}