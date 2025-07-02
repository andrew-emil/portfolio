// Utility to validate client type for API access
export function validateClient(headers) {
	const userAgent = headers.get("user-agent");
	const appClient = headers.get("x-app-client");

	if (!appClient || appClient !== "myapp") {
		return {
			valid: false,
			message:
				"Unauthorized: Only mobile/desktop apps can access this endpoint.",
		};
	}

	if (userAgent && userAgent.includes("Mozilla")) {
		return {
			valid: false,
			message: "Unauthorized: Browser access is not allowed.",
		};
	}

	return { valid: true };
}
