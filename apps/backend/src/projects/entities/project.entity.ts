import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ProjectCategory } from "@shared/enums/projectCategory.enum"

@Schema()
export class Project extends Document {
    @Prop({
        required: true,
        unique: true,
        type: String
    })
    name: string;

    @Prop({
        type: String,
        required: true
    })
    description: string;

    @Prop({
        type: String,
        enum: ProjectCategory,
        required: true,
    })
    category: ProjectCategory;

    @Prop({
        required: true,
        type: [String]
    })
    technologies: string[];

    @Prop({
        type: String,
        required: false
    })
    repositoryUrl: string;

    @Prop({
        type: String,
        required: false
    })
    liveUrl: string;

    @Prop({
        type: Buffer,
        required: false
    })
    thumbnail: Buffer;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);