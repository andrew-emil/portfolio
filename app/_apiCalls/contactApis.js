'use client'

import axios from "axios";
import { DOMAIN } from "../_utils/constants";

export async function sendContactMessage(data) {
	console.log(data)
	try {
		const newContact = await axios.post(`${DOMAIN}/api/contacts`, data)
		console.log(newContact)

		return newContact;
	} catch (error) {
		console.log(error);
		throw new Error("something wrong happened while sending message");
	}
}
