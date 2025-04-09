import  {  createClient } from '@libsql/client';
import { env } from '../env';
import { loadEnv } from 'vkrun';

loadEnv();

const databaseConfig = {
	url: env.TURSO_DATABASE_URL as string,
	authToken: env.TURSO_AUTH_TOKEN as string,
};

const db = createClient(databaseConfig);

export default db;

