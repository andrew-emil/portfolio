import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '@shared/dtos/create-contact.dto';
import { Model } from 'mongoose';
import { Contact } from './entities/contact.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name)
    private readonly contactsRepository: Model<Contact>
  ) { }
  async create(createContactDto: CreateContactDto) {
    const createdContact = new this.contactsRepository(createContactDto);
    return await createdContact.save();
  }

  async findAll() {
    const contacts = await this.contactsRepository.find()
    return contacts
  }

  async remove(id: string) {
    const deletedContact = await this.contactsRepository.findByIdAndDelete(id);
    if (!deletedContact) {
      throw new Error('Contact not found');
    }
    return deletedContact;

  }
}