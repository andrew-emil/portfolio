import ProjectsList from "@/components/ProjectsList";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProjects } from "../apiCalls/projectApis";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
      <section className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-10">
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">
            Projects
          </h1>
        </div>
        <ProjectsList projects={projects} />
      </section>
      <SiteFooter />
    </main>
  );
}
