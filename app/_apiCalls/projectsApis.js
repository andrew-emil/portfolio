import dbConnect from "@/app/_lib/db";
import Project from "@/app/_lib/models/project";


export async function fetchProjects() {
	try {
		await dbConnect();
		const projects = await Project.find().select({
			name: 1,
			thumbnail: 1,
			category: 1,
		});
		return JSON.parse(JSON.stringify(projects));
	} catch (error) {
		console.log(error);
		throw new Error("something wrong happened while fetching projects");
	}
}

export async function fetchOneProject(id) {
	try {
		await dbConnect();
		const project = await Project.findById(id);
		if (!project) throw new Error("Project Not Found");
		return JSON.parse(JSON.stringify(project));
	} catch (error) {
		console.log(error);
		throw new Error("something wrong happened while fetching project");
	}
}
