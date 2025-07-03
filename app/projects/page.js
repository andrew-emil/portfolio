import ProjectsSection from "../_components/ProjectsSection";
import { DOMAIN } from "../_utils/constants";

export default async function ProjectPage() {
	const res = await fetch(`${DOMAIN}/api/projects`, { method: "GET" });
	const projects = await res.json();

	return (
		<section className="w-full max-w-5xl mx-auto py-8 px-2 md:px-8 flex flex-col gap-8 sm:m-0 -z-20 justify-start">
			<header className="mb-12">
				<h2 className="text-4xl md:text-5xl font-bold text-[var(--accent-primary)]">
					Projects
				</h2>
			</header>
			<ProjectsSection projects={projects} />
		</section>
	);
}
