import { GetAllProjectsResponseDto } from "@shared/dtos/getAllProjectsResponse.dto";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "./glass-card";

export function ProjectCard({
  project,
}: {
  project: GetAllProjectsResponseDto;
}) {
  return (
    <Link
      href={`/projects/${project._id}`}
      className="group block overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_18px_40px_rgba(168,85,247,0.18)]"
    >
      <GlassCard className="overflow-hidden group">
        <div className="relative h-32 sm:h-40 lg:h-48 w-full overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={`${project.name} thumbnail`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex items-center justify-between p-3 sm:p-4 relative z-10">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-100 text-sm sm:text-base truncate">{project.name}</h3>
            <p className="text-xs text-purple-400 truncate">{project.category}</p>
          </div>
          <span className="text-xs text-purple-400 group-hover:text-purple-300 ml-2 flex-shrink-0 transition-colors">
            View →
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}
