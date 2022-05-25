import { NextApiRequest, NextApiResponse } from 'next'
import basicFetch from '../../../../functions/functions'

const API_KEY = process.env.NEXT_PUBLIC_APP_TMDB_API_KEY
const API_BASE = 'https://api.themoviedb.org/3'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  let info = {}
  const [type, movieId] = req.query.slug

  if (movieId) {
    switch (type) {
    case 'movie':
      info = await basicFetch(
        `/movie/${movieId}?language=pt-BR`,
        API_BASE,
        API_KEY,
      )
      break
    case 'tv':
      info = await basicFetch(
        `/tv/${movieId}?language=pt-BR`,
        API_BASE,
        API_KEY,
      )
      break
    default:
      info = null
      break
    }
  }
  res.status(200).json(info)
}
