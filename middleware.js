import { NextResponse } from "next/server";
import { DOMAIN } from "./app/_utils/constants";

export function middleware(request) {
	if (request.nextUrl.pathname.includes("/api/")) {
		const response = NextResponse.next();

		response.headers.set("Access-Control-Allow-Origin", DOMAIN);
		response.headers.set(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		);
		response.headers.set(
			"Access-Control-Allow-Headers",
			"Content-Type, Authorization"
		);

		if (request.method === "OPTIONS") {
			return new NextResponse(null, { status: 200, headers: response.headers });
		}

		return response;
	}

	return NextResponse.next();
}

export const config = {
	matcher: "/api/:path*",
};
