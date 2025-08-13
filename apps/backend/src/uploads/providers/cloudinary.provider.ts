import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryProvider {
    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        })
    }

    uploadFile(file: Express.Multer.File): Promise<UploadApiResponse> {
        return new Promise<UploadApiResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'cv' },
                (error: UploadApiErrorResponse, result: UploadApiResponse) => {

                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        return reject(new Error(typeof error === 'string' ? error : JSON.stringify(error)));
                    }

                    resolve(result);
                }

            )
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
    }

    async deleteFile(publicId: string): Promise<any> {
        try {
            const result = await cloudinary.uploader.destroy(publicId);
            return result;
        } catch (error) {
            console.error('Cloudinary delete error:', error);
            throw error;
        }
    }
}