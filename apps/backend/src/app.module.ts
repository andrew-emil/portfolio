import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { ProjectsModule } from './projects/projects.module';
import { UploadsModule } from './uploads/uploads.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import Joi from 'joi';
import { MulterModule } from '@nestjs/platform-express';
import appConfig, { appConfigSchema } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig],
      validationSchema: Joi.object({
        app: appConfigSchema,
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('app.DB_HOST'),
        dbName: configService.get<string>('app.DB_NAME'),
      }),
      inject: [ConfigService],
    }),
    ContactsModule,
    ProjectsModule,
    UploadsModule,
    MulterModule.register({
      dest: './uploads',
      limits: {
        fileSize: 50 * 1024 * 1024, // 50 MB
      },
      fileFilter: (req, file, callback) => {
        const allowedTypes = /pdf|doc|docx/;
        const isValid = allowedTypes.test(file.mimetype);
        if (isValid) {
          callback(null, true);
        } else {
          callback(new Error('Invalid file type'), false);
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }