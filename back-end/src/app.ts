import v from 'vkrun';
import { env } from './env';

const corsCofig: v.CorsSetOptions = {
	origin: env.ALLOWED_DOMAINS
};

console.log('ALLOWED_DOMAINS', env.ALLOWED_DOMAINS);

const cors = v.cors;
const app = v.App();

app.use(v.parseData());
app.use(cors(corsCofig));

app.get('/test', (req: v.Request, res: v.Response) => {
	res.send('Hello my friend!');
});



export { app };

