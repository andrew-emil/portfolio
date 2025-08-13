import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from '@shared/dtos/create-contact.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) { }

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}