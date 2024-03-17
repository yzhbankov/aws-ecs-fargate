import express from 'express';
import controllers from './controllers/index.mjs';

const router = express.Router();

router.get('/users', controllers.users.getAll);
router.get('/users/:uid', controllers.users.get);
router.post('/users', controllers.users.post);
router.delete('/users/:uid', controllers.users.del);

export default router;
