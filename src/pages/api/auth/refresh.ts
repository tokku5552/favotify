import { withSessionRoute } from '@/lib/withSession';
import { SpotifyAuthApiResponse } from '@/types/SpotifyApi';
import axios from 'axios';
import moment from 'moment';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseBody {
  accessToken?: string;
  refreshToken?: string;
  message?: string;
}

const refresh = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { accessToken, refreshToken, authedTs, expiresIn, userId } = req.session.user!;
    const now = moment();
    try {
      await axios.get(`https://api.spotify.com/v1/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log('get success');
    } catch {
      if (refreshToken) {
        const response = await executeRefreshToken(refreshToken);
        req.session.user = {
          accessToken: response.access_token,
          userId,
          authedTs: now.format('YYYY-MM-DD HH:mm:ss'),
          expiresIn: response.expires_in,
        };
        await req.session.save();
        res.status(200);
        res.json({ accessToken: response.access_token, refreshToken: response.refresh_token });
      } else {
        res.status(401);
        res.json({ message: 'unauthorized' });
      }
    }
    res.status(200);
    res.json({ accessToken, refreshToken });
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
};

const executeRefreshToken = async (refreshToken: string) => {
  const clientBuffer = Buffer.from(
    `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.CLIENT_SECRET}`,
    'utf-8',
  );
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', refreshToken);
  const response = await axios.post<SpotifyAuthApiResponse>(
    'https://accounts.spotify.com/api/token',
    params,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${clientBuffer.toString('base64')}`,
      },
    },
  );
  return response.data;
};

export default withSessionRoute(refresh);
