import { IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto {
    @IsNotEmpty()
    @IsString()
    fullname!: string;

    @IsNotEmpty()
    @IsString()
    email!: string;

    @IsNotEmpty()
    @IsString()
    subject!: string;

    @IsNotEmpty()
    @IsString()
    message!: string;
}