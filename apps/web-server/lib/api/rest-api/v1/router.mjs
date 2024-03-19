import express from 'express';
import controllers from './controllers/index.mjs';

const router = express.Router();

router.get('/users', controllers.access.handleReqIp, controllers.users.getAll);
router.get('/users/:uid', controllers.access.handleReqIp, controllers.users.get);
router.post('/users', controllers.access.handleReqIp, controllers.users.post);
router.delete('/users/:uid', controllers.access.handleReqIp, controllers.users.del);

router.get('/req_info', controllers.req_info.get);

export default router;
