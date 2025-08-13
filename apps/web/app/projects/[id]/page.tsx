import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { notFound } from "next/navigation";
import { GlowButton } from "@/components/glow-button";
import Link from "next/link";
import type { GetProjectResponseDto } from "@shared/dtos/getProjectResponse.dto";

export default async function ProjectDetails({
  params,
}: {
  params: { id: string };
}) {
  const projectId = await params.id;

  const res = await fetch(`${process.env.API_URL}/projects/${projectId}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    notFound();
  }
  const project = (await res.json()) as GetProjectResponseDto;
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <SiteHeader />
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img
              src={project.thumbnail || "/placeholder.svg"}
              alt={`${project.name} thumbnail`}
              className="aspect-video w-full rounded-xl border border-gray-800 object-cover shadow-[0_18px_40px_rgba(168,85,247,0.18)]"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-100">{project.name}</h1>
            <p className="text-sm text-purple-400">{project.category}</p>
            <p className="text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-purple-500/20 bg-purple-950/30 px-3 py-1 text-xs text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-4">
              {project.githubLink ? (
                <GlowButton asChild>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </Link>
                </GlowButton>
              ) : null}
              {project.liveDemo ? (
                <Link
                  className="inline-flex items-center rounded-md border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm text-gray-300 transition-all hover:border-purple-500/50 hover:shadow-[0_0_24px_rgba(168,85,247,0.25)] hover:text-white"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              ) : null}
              <Link
                href="/projects"
                className="ms-auto text-sm text-gray-400 underline-offset-4 hover:text-purple-400 hover:underline"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
