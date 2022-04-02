import * as express from 'express';
import items from './app/items/items';

const router = express.Router();

router.get('/items', items.list);
router.get('/items/:id',  items.details);

export default router;
