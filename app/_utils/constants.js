const PRODUCTION_DOMAIN = process.env.PRODUCTION_DOMAIN;
const DEVELOPMENT_DOMAIN = process.env.DEVELOPMENT_DOMAIN;

export const DOMAIN =
	process.env.NODE_ENV === "production"
		? PRODUCTION_DOMAIN
		: DEVELOPMENT_DOMAIN;
