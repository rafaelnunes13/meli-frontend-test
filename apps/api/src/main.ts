import * as express from 'express';
import items from './app/items/items';

const app = express();

app.get('/api/items', items.list);
app.get('/api/items/:id/:description?',  items.details);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
