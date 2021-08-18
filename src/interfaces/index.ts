export type MovieRowProps = {
  id: number,
  results: Array<{
    id: number,
    name: string,
    title: string,
    poster_path: string
  }>
}

export type FeaturedMovieProps = {
  id: number,
  original_name: string,
  backdrop_path: string,
  overview: string,
  first_air_date: string,
  vote_average: number,
  number_of_seasons: number,
  genres: Array<{
    id: number,
    name: string
  }>,
}