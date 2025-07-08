import { DOMAIN } from "../_utils/constants";

export async function sendContactMessage(data) {
	try {
		const res = await fetch(`${DOMAIN}/api/contacts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw new Error("something wrong happened while sending message");
		}

		return;
	} catch (error) {
		console.log(error);
		throw new Error("something wrong happened while sending message");
	}
}
