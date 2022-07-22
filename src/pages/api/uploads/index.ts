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

    res.status(200).json({
      data: {
        url,
      },
      error: null,
    });
  } catch (e) {
    if (e instanceof FormidableError) {
      res
        .status(e.httpCode || 400)
        .json({ data: null, error: e.message });
    } else {
      console.error(e);
      res
        .status(500)
        .json({ data: null, error: 'Internal Server Error' });
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
