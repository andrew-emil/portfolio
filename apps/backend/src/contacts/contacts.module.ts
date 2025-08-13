import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from './entities/contact.entity';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }])],
})
export class ContactsModule { }