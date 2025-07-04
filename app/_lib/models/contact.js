import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
	{
		fullName: {
			type: String,
			required: [true, "Full name is required"],
			trim: true,
			minlength: [2, "Full name must be at least 2 characters long"],
			maxlength: [100, "Full name must be less than 100 characters"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			trim: true,
			lowercase: true,
			match: [/.+@.+\..+/, "Please enter a valid email address"],
		},
		subject: {
			type: String,
			required: [true, "Subject is required"],
			trim: true,
			maxlength: [200, "Subject must be less than 200 characters"],
		},
		message: {
			type: String,
			required: [true, "Message is required"],
			trim: true,
			minlength: [5, "Message must be at least 5 characters long"],
			maxlength: [2000, "Message must be less than 2000 characters"],
		},
	},
	{
		timestamps: true,
	}
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
