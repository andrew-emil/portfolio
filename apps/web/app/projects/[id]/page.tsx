import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { notFound } from "next/navigation";
import { GlowButton } from "@/components/glow-button";
import Link from "next/link";
import type { GetProjectResponseDto } from "@shared/dtos/getProjectResponse.dto";
import Image from "next/image";
import { getProjectById, getProjectIds } from "@/app/apiCalls/projectApis";
import { GlassCard } from "@/components/glass-card";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { name } = await getProjectById(params.id);
  return { title: `Project ${name}` };
}

export async function generateStaticParams() {
  const ids = await getProjectIds();
  return ids.map((id) => ({ id }));
}

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
      <section className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-10">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 lg:order-1">
            <GlassCard className="overflow-hidden p-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={`${project.name} thumbnail`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            </GlassCard>
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-2">{project.name}</h1>
              <p className="text-sm text-purple-400">{project.category}</p>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-sm px-2 sm:px-3 py-1 text-xs text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex gap-3">
                {project.githubLink ? (
                  <GlowButton asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </GlowButton>
                ) : null}
                {project.liveDemo ? (
                  <a
                    className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm text-gray-300 transition-all hover:border-purple-500/50 hover:bg-white/10 hover:text-white"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
              <Link
                href="/projects"
                className="sm:ms-auto text-sm text-gray-400 underline-offset-4 hover:text-purple-400 hover:underline text-center sm:text-right"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
