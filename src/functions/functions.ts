import { FeaturedMovieProps } from '../interfaces'

type IProps = {
  data?: Array<FeaturedMovieProps>;
}

const basicFetch = async (
  endpoint: string,
  API_BASE: string,
  API_KEY: string,
): Promise<IProps> => {
  const req = await fetch(`${API_BASE}${endpoint}&language=pt-BR&api_key=${API_KEY}`)
  const json = await req.json()
  return json
}

export default basicFetch
