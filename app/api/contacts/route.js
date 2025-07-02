import { NextResponse } from "next/server";
import Contact from "@/app/_lib/models/contact";
import dbConnect from "@/app/_lib/db";
import { createContactSchema } from "@/app/_utils/validationSchemas";
import { headers } from "next/headers";
import { validateClient } from "@/app/_utils/validateClient";

export async function GET(request) {
	const header = await headers();
	const validation = validateClient(header);
	if (!validation.valid) {
		return NextResponse.json({ message: validation.message }, { status: 401 });
	}

	try {
		await dbConnect();

		const { searchParams } = new URL(request.url);
		const page = parseInt(searchParams.get("page")) || 1;
		const skip = (page - 1) * 10;

		const total = await Contact.countDocuments();
		const contacts = await Contact.find({})
			.sort({ createdAt: -1 })
			.skip(skip)
			.limit(10);

		return NextResponse.json(
			{
				contacts,
				total,
				page,
				totalPages: Math.ceil(total / 10),
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "internal server error" },
			{ status: 500 }
		);
	}
}

export async function POST(request) {
	try {
		await dbConnect();
		const body = await request.json();

		const validation = createContactSchema.safeParse(body);
		if (!validation.success) {
			return NextResponse.json(
				{ message: validation.error.errors[0].message },
				{ status: 400 }
			);
		}

		const newContact = await Contact.create(validation.data);

		return NextResponse.json(newContact, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "internal server error" },
			{ status: 500 }
		);
	}
}
