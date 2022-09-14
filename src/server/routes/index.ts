import { Router } from 'express';
import gamesRouter from './home';

const routes = Router();
const baseUrl = '/api/v1';

routes.use(`${baseUrl}`, gamesRouter);

export default routes;
