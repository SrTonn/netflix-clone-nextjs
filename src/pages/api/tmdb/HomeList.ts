import { NextApiRequest, NextApiResponse } from 'next'
import basicFetch from '../../../functions/functions'

const API_KEY = process.env.NEXT_PUBLIC_APP_TMDB_API_KEY
const API_BASE = 'https://api.themoviedb.org/3'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.status(200).json([
    {
      slug: 'originals',
      title: 'Originals do Netflix',
      items: await basicFetch(
        '/discover/tv?width_network=213',
        API_BASE,
        API_KEY,
      ),
    }, {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await basicFetch(
        '/trending/all/week?',
        API_BASE,
        API_KEY,
      ),
    }, {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFetch(
        '/movie/top_rated?',
        API_BASE,
        API_KEY,
      ),
    }, {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch('/discover/movie?with_genres=28',
        API_BASE,
        API_KEY),
    }, {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch('/discover/movie?with_genres=35',
        API_BASE,
        API_KEY),
    }, {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('/discover/movie?with_genres=27',
        API_BASE,
        API_KEY),
    }, {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch('/discover/movie?with_genres=10749',
        API_BASE,
        API_KEY),
    }, {
      slug: 'documentary',
      title: 'Documentário',
      items: await basicFetch('/discover/movie?with_genres=99',
        API_BASE,
        API_KEY),
    },
  ])
}
