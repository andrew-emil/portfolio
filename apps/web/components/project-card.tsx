import Link from "next/link";
import { ProjectCategory } from "@shared/enums/projectCategory.enum";
import { GetAllProjectsResponseDto } from "@shared/dtos/getAllProjectsResponse.dto";
import Image from "next/image";

export type ProjectListItem = {
  slug: string;
  name: string;
  category: "All" | ProjectCategory;
  thumbnail: string;
};

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
      <div className="relative h-32 sm:h-40 lg:h-48 w-full overflow-hidden">
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          alt={`${project.name} thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex items-center justify-between p-3 sm:p-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-100 text-sm sm:text-base truncate">
            {project.name}
          </h3>
          <p className="text-xs text-gray-400 truncate">{project.category}</p>
        </div>
        <span className="text-xs text-purple-400 group-hover:underline ml-2 flex-shrink-0">
          View
        </span>
      </div>
    </Link>
  );
}
