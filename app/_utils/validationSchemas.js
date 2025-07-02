import { z } from "zod";

export const createContactSchema = z.object({
	fullName: z
		.string({
			required_error: "full name is required",
			invalid_type_error: "full name should be of type string",
		})
		.min(2, { message: "full name should be at least 2 characters long" })
		.max(200, { message: "full name should be less than 200 characters" }),
	email: z.string({ required_error: "email name is required" }).email(),
	subject: z
		.string({ required_error: "subject name is required" })
		.min(3, { message: "Subject must be at least than 3 characters long" })
		.max(200, { message: "Subject must be less than 200 characters" }),
	message: z
		.string({ required_error: "Message is required" })
		.min(5, { message: "Message must be at least 5 characters long" })
		.max(2000, { message: "Message must be less than 2000 characters" }),
});

export const createProjectSchema = z.object({
	name: z
		.string({
			required_error: "Project name is required",
			invalid_type_error: "Project name should be a string",
		})
		.min(1, { message: "Project name cannot be empty" }),
	description: z
		.string({
			required_error: "Description is required",
			invalid_type_error: "Description should be a string",
		})
		.min(1, { message: "Description cannot be empty" }),
	category: z.enum(["Application", "Web Development", "Backend Development"], {
		required_error: "Category is required",
	}),
	technologies: z
		.array(
			z.string({
				invalid_type_error: "Each technology should be a string",
			})
		)
		.min(1, { message: "At least one technology is required" }),
	githubLink: z
		.string({
			required_error: "GitHub link is required",
			invalid_type_error: "GitHub link should be a string",
		})
		.url({ message: "GitHub link must be a valid URL" }),
	liveDemo: z
		.string({ invalid_type_error: "Live demo link should be a string" })
		.url({ message: "Live demo link must be a valid URL" })
		.nullish(),
	thumbnail: z.instanceof(Buffer, {
		required_error: "Thumbnail is required",
		invalid_type_error: "Thumbnail must be a Buffer",
	}),
	review: z
		.array(
			z.object({
				type: z.enum(["photo", "video"], {
					required_error: "Review type is required",
				}),
				data: z.instanceof(Buffer, {
					message: "Review data must be a Buffer",
					required_error: "Review data is required",
				}),
			})
		)
		.nonempty({ message: "At least one review is required" }),
});
