import v from 'vkrun';
import { env } from './env';
import db from './database';

const corsCofig: v.CorsSetOptions = {
	origin: env.ALLOWED_DOMAINS
};

const cors = v.cors;
const app = v.App();

app.use(v.parseData());
app.use(cors(corsCofig));

app.get('/test', (req: v.Request, res: v.Response) => {
	res.send('Hello my friend!');
});


app.get('/links', async (req: v.Request, res: v.Response) => {

	const result = await db.execute({
		sql: 'SELECT * FROM links',
	});

	const links = result.rows;

	if(!links || links?.length === 0) {
		res.status(404).json({ message: 'Not found links' });
	}

	res.status(200).json({ links });

});



export { app };

