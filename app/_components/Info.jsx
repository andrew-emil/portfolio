import Link from "next/link";
import { CustomIconButton } from "./StyledComponents";

export default function Info({ icon, socialObject, link }) {
	return (
		<div className="flex justify-start items-start gap-2 flex-row py-4 w-full relative">
			<Link href={link} target="_blank" rel="noopener noreferrer">
				<CustomIconButton>{icon}</CustomIconButton>
			</Link>
			<div className="flex justify-start items-start gap-2 flex-col truncate">
				<p className="text-sm text-[var(--card-border)] capitalize">
					{socialObject.name}
				</p>
				<p className="text-sm text-foreground">{socialObject.url}</p>
			</div>
		</div>
	);
}
