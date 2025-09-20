"use server"

import { GetAllProjectsResponseDto } from "@shared/dtos/getAllProjectsResponse.dto";

const apiUrl = process.env.API_URL;

export async function getProjectIds() {
    const projects = await getProjects();
    const ids = projects.map((project) => project._id);

    if (!ids.length) {
        throw new Error("No projects found");
    }
    return ids;
}

export async function getProjects() {
    const res = await fetch(`${apiUrl}/projects`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    const projects = await res.json() as GetAllProjectsResponseDto[];
    return projects;
}

export async function getProjectById(id: string) {
    const res = await fetch(`${apiUrl}/projects/${id}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch project with ID ${id}`);
    }

    const project = await res.json();
    return project;
}