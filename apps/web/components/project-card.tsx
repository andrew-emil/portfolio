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
      <Image
        src={project.thumbnail || "/placeholder.svg"}
        alt={`${project.name} thumbnail`}
        fill
        priority={false}
        quality={80}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="font-semibold text-gray-100">{project.name}</h3>
          <p className="text-xs text-gray-400">{project.category}</p>
        </div>
        <span className="text-xs text-purple-400 group-hover:underline">
          View
        </span>
      </div>
    </Link>
  );
}
