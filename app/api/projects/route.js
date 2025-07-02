import dbConnect from "@/app/_lib/db";
import Project from "@/app/_lib/models/project";
import { NextResponse } from "next/server";
import { bufferFromFile } from "@/app/_utils/bufferFromFile";
import { headers } from "next/headers";
import { validateClient } from "@/app/_utils/validateClient";

export async function POST(request) {
	const header = await headers();
	const validation = validateClient(header);
	if (!validation.valid) {
		return NextResponse.json({ message: validation.message }, { status: 401 });
	}

	try {
		await dbConnect();

		const formData = await request.formData();

		const name = formData.get("name");
		const description = formData.get("description");
		const category = formData.get("category");
		const technologies = formData.getAll("technologies");
		const githubLink = formData.get("githubLink");
		const liveDemo = formData.get("liveDemo") || null;
		const thumbnailFile = formData.get("thumbnail");
		const thumbnail = await bufferFromFile(thumbnailFile);

		const review = [];
		const type = formData.getAll(`review[type]`);
		const dataFile = formData.getAll(`review[data]`);

		if (type.length !== dataFile.length) {
			return NextResponse.json(
				{ message: "Invalid reviews format" },
				{ status: 400 }
			);
		}

		for (let i = 0; i < type.length; i++) {
			const data = await bufferFromFile(dataFile[i]);

			review.push({
				type: type[i],
				data: data,
			});
		}

		const projectData = {
			name,
			description,
			category,
			technologies,
			githubLink,
			liveDemo,
			thumbnail,
			review,
		};

		const newProject = await Project.create(projectData);
		return NextResponse.json(newProject, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "internal server error" },
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		await dbConnect();

		const projects = await Project.find().select({
			name: 1,
			thumbnail: 1,
			category: 1,
		});

		return NextResponse.json(projects, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "internal server error" },
			{ status: 500 }
		);
	}
}
