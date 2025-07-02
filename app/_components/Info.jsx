import { CustomCard, CustomIconButton } from "./StyledComponents";

export default function Info({ icon, socialObject }) {
	return (
		<div className="flex justify-start items-start gap-2 flex-row py-4 w-full relative">
			<CustomIconButton>{icon}</CustomIconButton>
			<div className="flex justify-start items-start gap-2 flex-col truncate">
				<p className="text-sm text-[var(--card-border)] capitalize">
					{socialObject.name}
				</p>
				<p className="text-sm text-foreground">{socialObject.url}</p>
			</div>
		</div>
	);
}
