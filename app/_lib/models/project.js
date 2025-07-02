import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		category: {
			type: String,
			enum: ["Application", "Web Development", "Backend Development"],
			required: true,
		},
		technologies: { type: [String], required: true },
		githubLink: { type: String, required: true },
		liveDemo: { type: String, default: null },
		thumbnail: { type: Buffer, required: true },
		review: [
			{
				type: { type: String, enum: ["photo", "video"], required: true },
				data: { type: Buffer, required: true },
			},
		],
	},
	{
		timestamps: false,
	}
);

const Project =
	mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
