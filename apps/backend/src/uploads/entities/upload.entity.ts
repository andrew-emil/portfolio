import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Upload extends Document {
    @Prop({ required: true, type: String })
    publicId: string;

    @Prop({ required: true, type: String })
    secureUrl: string;

}

export const UploadSchema = SchemaFactory.createForClass(Upload);