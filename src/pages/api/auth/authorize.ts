import { withSessionRoute } from '@/lib/withSession';
import { SpotifyAuthApiResponse } from '@/types/SpotifyApi';
import axios from 'axios';
import moment from 'moment';
import type { NextApiRequest, NextApiResponse } from 'next';

interface SpotifyUserResponse {
  country: string;
  display_name: string;
  id: string;
}

const authorize = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { code, state } = req.query;

    const clientBuffer = Buffer.from(
      `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.CLIENT_SECRET}`,
      'utf-8',
    );
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code as string);
    params.append('redirect_uri', process.env.NEXT_PUBLIC_RETURN_TO as string);

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
    const userResponse = await axios.get<SpotifyUserResponse>(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${response.data.access_token}`,
      },
    });

    req.session.user = {
      userId: userResponse.data.id,
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      authedTs: moment().format('YYYY-MM-DD HH:mm:ss'),
      expiresIn: response.data.expires_in,
    };
    await req.session.save();
    res
      .status(200)
      .redirect(`/top?access_token=${response.data.access_token}&user_id=${userResponse.data.id}`);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
};

export default withSessionRoute(authorize);
