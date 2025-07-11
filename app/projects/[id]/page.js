import { fetchOneProject, fetchProjects } from "@/app/_apiCalls/projectsApis";
import ReviewCarousel from "@/app/_components/ReviewCarousel";
import { convertImage } from "@/app/_utils/convertImage";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export async function generateStaticParams() {
	const projects = await fetchProjects();
	const ids = projects.map((projects) => ({ id: projects._id }));
	return ids;
}

export default async function ProjectPage({ params }) {
	const id = await params.id
	const project = await fetchOneProject(id);

	const {
		name,
		description,
		category,
		technologies = [],
		githubLink,
		liveDemo,
		thumbnail,
		review = [],
	} = project || {};

	const imageUrl =
		thumbnail && thumbnail.data ? convertImage(thumbnail.data) : null;

	return (
		<section className="w-full max-w-4xl mx-auto py-8 px-2 md:px-8 flex flex-col gap-8 sm:m-0 -z-20 justify-start">
			<header className="mb-8">
				<h2 className="text-3xl md:text-5xl font-bold text-[var(--accent-primary)] mb-2">
					{name}
				</h2>
				<Typography variant="body2" className="text-base text-gray-500">
					{category}
				</Typography>
			</header>
			<div className="flex flex-col md:flex-row gap-8 items-start">
				{imageUrl && (
					<div className="flex-shrink-0 w-full md:w-80 h-56 md:h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative">
						<Image
							src={imageUrl}
							alt={name}
							fill
							style={{ objectFit: "contain" }}
							sizes="(max-width: 768px) 100vw, 320px"
							priority
						/>
					</div>
				)}
				<div className="flex-1 flex flex-col gap-4">
					<Typography
						variant="body1"
						className="text-lg text-[var(--foreground)] whitespace-pre-line">
						{description}
					</Typography>
					<div className="flex flex-wrap gap-2 mt-2">
						{technologies.map((tech) => (
							<span
								key={tech}
								className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] px-3 py-1 rounded-full text-sm font-medium">
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
			{review.length > 0 && (
				<section className="w-full max-w-2xl mx-auto mt-8">
					<h3 className="text-2xl font-semibold mb-4 text-[var(--accent-primary)]">
						Project Media
					</h3>
					<ReviewCarousel reviews={review} />
				</section>
			)}
			<div className="flex gap-4 mt-4">
				{githubLink && (
					<Link
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
						GitHub
					</Link>
				)}
				{liveDemo && (
					<Link
						href={liveDemo}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 bg-[var(--accent-primary)] text-white rounded hover:bg-[var(--accent-secondary)] transition">
						Live Demo
					</Link>
				)}
			</div>
		</section>
	);
}
