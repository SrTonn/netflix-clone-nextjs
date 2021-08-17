export type ItemsType = {
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
}