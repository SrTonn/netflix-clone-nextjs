import { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.NEXT_PUBLIC_APP_TMDB_API_KEY
const API_BASE = 'https://api.themoviedb.org/3'

/**
 * originais da netflix
 * recomendados (trending)
 * em alta (top rated)
 * ação
 * comédia
 * terror
 * romance
 * documentários
*/

const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${API_BASE}${endpoint}&api_key=${API_KEY}`)
  const json = await req.json()
  return json
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.status(200).json([
    {
      slug: 'originals',
      title: 'Originals do Netflix',
      items: await basicFetch('/discover/tv?width_network=213&language=pt-BR'),
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await basicFetch('/trending/all/week?language=pt-BR'),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFetch('/movie/top_rated?language=pt-BR'),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch('/discover/movie?with_genres=28&language=pt-BR'),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch('/discover/movie?with_genres=35&language=pt-BR'),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch('/discover/movie?with_genres=27&language=pt-BR'),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch('/discover/movie?with_genres=27&language=pt-BR'),
    },
    {
      slug: 'documentary',
      title: 'Documentário',
      items: await basicFetch('/discover/movie?with_genres=99&language=pt-BR'),
    },
  ])
}
