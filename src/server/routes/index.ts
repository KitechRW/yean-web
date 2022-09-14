import { Router } from 'express';
import gamesRouter from './home';

const routes = Router();
const baseUrl = '/api/v1';

routes.use(`${baseUrl}/games`, gamesRouter);

export default routes;
