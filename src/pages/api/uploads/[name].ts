export const config = {
  api: { externalResolver: true },
};

import express from 'express';
const handler = express();

const serveFiles = express.static('public/uploads');
handler.use(['/api/uploads', '/uploads'], serveFiles);
//               ^              ^
// Multiple endpoints are passed. The first one is used when visiting /api/images.
// The second one is used when visiting /images using the middleware rewrite I mention below.

// express is just a function that takes (http.IncomingMessage, http.ServerResponse),
// which Next.js supports when externalResolver is enabled.
export default handler;
