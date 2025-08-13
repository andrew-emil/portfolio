import ProjectsList from "@/components/ProjectsList";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GetAllProjectsResponseDto } from "@shared/dtos/getAllProjectsResponse.dto";

export default async function ProjectsPage() {
  const res = await fetch(`${process.env.API_URL}/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects = await res.json() as GetAllProjectsResponseDto[];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
      <ProjectsList projects={projects} />
      <SiteFooter />
    </main>
  );
}
