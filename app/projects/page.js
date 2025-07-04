import { fetchProjects } from "../_apiCalls/projectsApis";
import ProjectsSection from "../_components/ProjectsSection";

export default async function ProjectPage() {
	const projects = await fetchProjects();

	return (
		<section className="w-full max-w-5xl mx-auto py-6 sm:py-8 px-2 sm:px-4 md:px-8 flex flex-col gap-6 sm:gap-8 -z-20 justify-start">
			<header className="mb-8 sm:mb-12">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--accent-primary)]">
					Projects
				</h2>
			</header>
			<ProjectsSection projects={projects} />
		</section>
	);
}
