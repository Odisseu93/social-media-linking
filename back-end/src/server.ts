import { env } from './env';
import { app } from './app';

const port = env.APP_PORT;

app.server().listen(port, () =>  console.log(`Listen on: http://localhost:${port}`));
