"use client";

import { useState } from "react";
import Project from "./Project";

const categories = [
	"All",
	"Application",
	"Web Development",
	"Backend Development",
];

export default function ProjectsSection({ projects }) {
	const [activeCategory, setActiveCategory] = useState(categories[0]);
	const [filterProjects, setFilterProjects] = useState(projects);
	

	function handleFilterClick(category) {
		switch (category) {
			case "All":
				setFilterProjects(projects);
				setActiveCategory(categories[0]);
				break;
			case "Application":
				setFilterProjects(
					projects.filter((project) => project.category === "Application")
				);
				setActiveCategory(categories[1]);
				break;
			case "Web Development":
				setFilterProjects(
					projects.filter((project) => project.category === "Web Development")
				);
				setActiveCategory(categories[2]);
				break;
			case "Backend Development":
				setFilterProjects(
					projects.filter(
						(project) => project.category === "Backend Development"
					)
				);
				setActiveCategory(categories[3]);
				break;
		}
		
	}

	return (
		<>
			<nav className="flex flex-row justify-between items-start gap-4">
				{categories.map((category) => (
					<button
						key={category}
						onClick={() => handleFilterClick(category)}
						className={`flex flex-1 whitespace-nowrap transition cursor-pointer hover:text-[#c084fc]
						${activeCategory === category ? "text-[#c084fc]" : "text-foreground"}
						`}>
						{category}
					</button>
				))}
			</nav>
			<div className="p-2 m-auto grid grid-cols-3">
				{filterProjects.map((project) => (
					<Project project={project} key={project._id} />
				))}
			</div>
		</>
	);
}
