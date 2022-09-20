import { parse, UrlWithParsedQuery } from 'url';
import express from 'express';
import next from 'next';
import dotenv from 'dotenv';
import routes from './routes';
import DB from '../apis/database';

dotenv.config();

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, port });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();
  server.use(express.static('public'));

  server.use(routes);

  server.get('*', (req, res) => {
    const parsedUrl: UrlWithParsedQuery = parse(req.url, true);

    const { pathname } = parsedUrl;
    console.log(pathname);
    return handle(req, res);
  });

  server.post('*', (req, res) => {
    return handle(req, res);
  });

  server.patch('*', (req, res) => {
    return handle(req, res);
  });

  server.delete('*', (req, res) => {
    return handle(req, res);
  });

  server.put('*', (req, res) => {
    return handle(req, res);
  });
  try {
    await DB.sequelize.sync({ force: false, alter: dev });
  } catch (error: any) {
    console.log(error.message);
  }
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
