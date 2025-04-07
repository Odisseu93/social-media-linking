import { loadEnv } from 'vkrun';

loadEnv();

export const env = {
	APP_PORT : process.env.PORT || 8080,
	ALLOWED_DOMAINS: process.env.ALLOWED_DOMAINS?.split(',') ?? undefined
};
