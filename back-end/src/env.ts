import { loadEnv } from 'vkrun';

loadEnv();

const env = {
	APP_PORT : process.env.APP_PORT || 8080,
	ALLOWED_DOMAINS: process.env.ALLOWED_DOMAINS?.split(',') ?? undefined,
	TURSO_DATABASE_URL:	process.env.TURSO_DATABASE_URL as string,
	TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN as string,
};

export { env };