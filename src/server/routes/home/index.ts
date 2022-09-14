import { Router } from 'express';

const gamesRouter = Router();

gamesRouter.get('/', (req, res) => {
  res.send('Welcome to yean api');
});

export default gamesRouter;
