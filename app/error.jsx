"use client";
import Link from "next/link";
import { CustomCard } from "./_components/StyledComponents";

const ErrorPage = ({ error, reset }) => {
	return (
		<div className="flex justify-center items-center min-h-[60vh]">
			<CustomCard>
				<div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
					Something went wrong
				</div>
				<h2 className="text-foreground my-3 text-xl">
					Error Message: <span className="text-pink-400">{error.message}</span>
				</h2>
				<button onClick={() => reset()} className="button-primary mt-4">
					Try again
				</button>
				<Link
					className="text-lg underline text-purple-300 hover:text-pink-300 block mt-6 transition-colors duration-200"
					href="/">
					Go to home page
				</Link>
			</CustomCard>
		</div>
	);
};

export default ErrorPage;
