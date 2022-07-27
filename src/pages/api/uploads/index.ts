import Response from 'apis/utils/helpers/response';
import { FormidableError, parseForm } from 'apis/utils/libForm';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    data: {
      url: string | string[];
    } | null;
    error: string | null;
  }>,
) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({
      data: null,
      error: 'Method Not Allowed',
    });
    return;
  }
  // Just after the "Method Not Allowed" code
  try {
    const { fields, files } = await parseForm(req);
    const getPath = (path: string) => {
      const arr = path.split('public');
      if (arr.length > 1) {
        return arr[1];
      }
      return path;
    };

    const file = files.media;
    let url = Array.isArray(file)
      ? file.map(f => getPath(f.filepath))
      : getPath(file.filepath);

    return Response.success(res, 200, { url });
  } catch (e) {
    if (e instanceof FormidableError) {
      return Response.error(res, 400, { message: `${e.message}` });
    } else {
      console.error(e);
      return Response.error(res, 500, {
        message: 'Internal Server Error',
      });
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
