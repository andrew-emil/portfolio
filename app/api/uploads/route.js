import { promises as fs } from "fs";
import path from "path";
import cloudinary from "@/app/_lib/cloudinary";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { validateClient } from "@/app/_utils/validateClient";

const cvJsonPath = path.join(process.cwd(), "app/assets/cv.json");

export async function GET() {
	try {
		const data = await fs.readFile(cvJsonPath, "utf-8");
		const cv = JSON.parse(data);
		if (!cv.url) {
			return NextResponse.json(
				{ error: "No CV uploaded yet." },
				{ status: 404 }
			);
		}

		const response = await fetch(cv.url);
		if (!response.ok) {
			return NextResponse.json(
				{ error: "Failed to fetch CV file from Cloudinary." },
				{ status: 500 }
			);
		}
		const arrayBuffer = await response.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		const fileName = "cv.pdf";
		return new NextResponse(buffer, {
			headers: {
				"Content-Type":
					response.headers.get("content-type") || "application/pdf",
				"Content-Disposition": `attachment; filename=\"${fileName}\"`,
			},
			status: 200,
		});
	} catch (err) {
		return NextResponse.json(
			{ error: "Failed to read CV metadata or file." },
			{ status: 500 }
		);
	}
}

export async function POST(request) {
	const header = await headers();
	const validation = validateClient(header);
	if (!validation.valid) {
		return NextResponse.json({ message: validation.message }, { status: 401 });
	}
	try {
		const formData = await request.formData();
		const file = formData.get("file");
		if (!file) {
			return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
		}
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const uploadRes = await new Promise((resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{ resource_type: "raw", folder: "portfolio_cv" },
					(error, result) => {
						if (error) reject(error);
						else resolve(result);
					}
				)
				.end(buffer);
		});

		const cv = {
			url: uploadRes.secure_url,
			public_id: uploadRes.public_id,
			uploadedAt: new Date().toISOString(),
		};
		await fs.writeFile(cvJsonPath, JSON.stringify(cv, null, 2));
		return NextResponse.json(cv, { status: 201 });
	} catch (err) {
		return NextResponse.json(
			{ error: "Failed to upload CV." },
			{ status: 500 }
		);
	}
}

export async function PUT(request) {
	try {
		let oldCv = { public_id: null };
		try {
			const data = await fs.readFile(cvJsonPath, "utf-8");
			oldCv = JSON.parse(data);
		} catch {}

		const formData = await request.formData();
		const file = formData.get("file");
		if (!file) {
			return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
		}
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const uploadRes = await new Promise((resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{ resource_type: "raw", folder: "portfolio_cv" },
					(error, result) => {
						if (error) reject(error);
						else resolve(result);
					}
				)
				.end(buffer);
		});

		if (oldCv.public_id) {
			cloudinary.uploader.destroy(oldCv.public_id, { resource_type: "raw" });
		}

		const cv = {
			url: uploadRes.secure_url,
			public_id: uploadRes.public_id,
			uploadedAt: new Date().toISOString(),
		};
		await fs.writeFile(cvJsonPath, JSON.stringify(cv, null, 2));
		return NextResponse.json("CV uploaded successfully", { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json(
			{ error: "Failed to update CV." },
			{ status: 500 }
		);
	}
}
