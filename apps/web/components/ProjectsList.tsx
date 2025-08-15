"use client";

import { ProjectCard } from "@/components/project-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { GetAllProjectsResponseDto } from "@shared/dtos/getAllProjectsResponse.dto";
import { ProjectCategory } from "@shared/enums/projectCategory.enum";
import { useMemo, useState } from "react";

type Category = "All" | ProjectCategory;

export default function ProjectsList({
  projects,
}: {
  projects: GetAllProjectsResponseDto[];
}) {
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((p) => p.category === category);
  }, [projects, category]);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-100">Projects</h1>
      </div>

      <Tabs
        value={category}
        onValueChange={(v) => setCategory(v as Category)}
        className="mb-6 sm:mb-8"
      >
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-gray-900/50 border border-gray-800 h-auto">
          {["All", "Application", "Web Development", "Backend Development"].map(
            (c) => (
              <TabsTrigger
                key={c}
                value={c}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-fuchsia-600 data-[state=active]:text-white text-gray-300 text-xs sm:text-sm py-2 sm:py-2.5 px-2 sm:px-3"
              >
                <span className="truncate">{c}</span>
              </TabsTrigger>
            )
          )}
        </TabsList>
      </Tabs>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard project={p} key={p._id} />
        ))}
      </div>
    </section>
  );
}
