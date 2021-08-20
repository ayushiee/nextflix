import { NextApiResponse, NextApiRequest } from 'next';
import { MediaType, Media } from '../../types';
import { parse } from '../../utils/apiResolvers';
import getInstance from '../../utils/axios';

interface Response {
  data: Media[];
}

const apiKey = process.env.TMDB_KEY;

export default async function handler(request: NextApiRequest, response: NextApiResponse<Response>) {
  const axios = getInstance();
    const { type, genre } = request.query;

  try {
    const result = await axios.get(`/discover/${type}`, {
      params: {
        api_key: apiKey,
        with_genre: genre,
        watch_region: 'US'
      }
    });
    const data = parse(result.data.results, type as MediaType);

    response.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
}


