import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Contact extends Document {
    @Prop({
        required: [true, "Full name is required"],
        minlength: [3, "Full name must be at least 3 characters long"],
        maxlength: [100, "Full name must not exceed 100 characters"],
        trim: true,
        type: String,
    })
    fullname: string;

    @Prop({
        required: [true, "Email is required"],
        trim: true,
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
    })
    email: string;

    @Prop({
        type: String,
        required: [true, "Subject is required"],
        trim: true,
        maxlength: [200, "Subject must be less than 200 characters"],
    })
    subject: string;

    @Prop({
        type: String,
        required: [true, "Message is required"],
        trim: true,
        minlength: [5, "Message must be at least 5 characters long"],
        maxlength: [2000, "Message must be less than 2000 characters"],
    })
    message: string;

    @Prop({
        type: Date,
        default: Date.now,
    })
    createdAt: Date;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);