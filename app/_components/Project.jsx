import Link from "next/link";
import Image from "next/image";
import { convertImage } from "../_utils/convertImage";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Project({ project }) {
	const image = convertImage(project.thumbnail.data);

	return (
		<Link href={`/projects/${project._id}`} className="block group">
			<div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
				<div className="relative w-full aspect-video overflow-hidden">
					{project.thumbnail && (
						<>
							<Image
								src={image}
								alt={project.name}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
								priority={false}
								quality={80}
							/>
							{/* Eye icon overlay */}
							<span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
								<VisibilityIcon
									fontSize="medium"
									sx={{color: "purple"}}
								/>
							</span>
						</>
					)}
				</div>
				<div className="p-4 flex flex-col flex-1">
					<h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
						{project.name}
					</h3>
					<span className="text-sm text-gray-500 dark:text-gray-400">
						{project.category}
					</span>
				</div>
			</div>
		</Link>
	);
}
