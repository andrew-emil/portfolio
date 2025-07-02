import { NextResponse } from "next/server";
import dbConnect from "@/app/_lib/db";
import Project from "@/app/_lib/models/project";
import { headers } from "next/headers";
import { validateClient } from "@/app/_utils/validateClient";

export async function GET(request, { params }) {
	const { id } = await params;
	if (!id) {
		return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
	}

	try {
		await dbConnect();

		const project = await Project.findById(id);
		if (!project) {
			return NextResponse.json(
				{ message: "Project Not Found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(project, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "internal server error" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request, { params }) {
	const header = await headers();
	const validation = validateClient(header);
	if (!validation.valid) {
		return NextResponse.json({ message: validation.message }, { status: 401 });
	}
	try {
		await dbConnect();
		const { id } = await params;
		const deletedProject = await Project.findByIdAndDelete(id);
		if (!deletedProject) {
			return NextResponse.json(
				{ message: "Contact not found" },
				{ status: 404 }
			);
		}
		return NextResponse.json(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: "internal server error" },
			{ status: 500 }
		);
	}
}