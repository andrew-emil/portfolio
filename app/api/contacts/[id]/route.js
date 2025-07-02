import { NextResponse } from "next/server";
import Contact from "@/app/_lib/models/contact";
import dbConnect from "@/app/_lib/db";
import { headers } from "next/headers";
import { validateClient } from "@/app/_utils/validateClient";

export async function DELETE(request, { params }) {
	const header = await headers();
	const validation = validateClient(header);
	if (!validation.valid) {
		return NextResponse.json({ message: validation.message }, { status: 401 });
	}
	try {
		await dbConnect();
		const { id } = await params;
		const deletedContact = await Contact.findByIdAndDelete(id);
		if (!deletedContact) {
			return NextResponse.json(
				{ message: "Contact not found" },
				{ status: 404 }
			);
		}
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "internal server error" },
			{ status: 500 }
		);
	}
}
