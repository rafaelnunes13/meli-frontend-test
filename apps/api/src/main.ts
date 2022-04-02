import * as express from 'express';
import * as cors from 'cors';
import router from './router';

const app = express();

app.use(cors());
app.options('*', cors());

app.use('/api', router);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
