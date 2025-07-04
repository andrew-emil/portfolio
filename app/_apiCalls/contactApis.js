import dbConnect from "@/app/_lib/db";
import Contact from "@/app/_lib/models/contact";
import { createContactSchema } from "@/app/_utils/validationSchemas";

export async function sendContactMessage(data) {
	try {
		await dbConnect();
		

		const validation = createContactSchema.safeParse(data);
		if (!validation.success) {
            throw new Error(validation.error.errors[0].message);
		}

		await Contact.create(validation.data);

		return;
	} catch (error) {
		console.log(error);
		throw new Error("something wrong happened while sending message");
	}
}
