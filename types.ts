export interface Genre {
    id: number
    name: string
  }
  
 /*  export interface Movie {
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
  } */

  export interface Props {
    netflixOriginals: movie[]
    trendingNow: movie[]
    topRated: movie[]
    actionMovies: movie[]
    comedyMovies: movie[]
    horrorMovies: movie[]
    romanceMovies: movie[]
    documentaries: movie[]
  } 
  
  export interface Props2 {
    netflixOriginals: Completemovie[]
    trendingNow: Completemovie[]
    topRated: Completemovie[]
    actionMovies: Completemovie[]
    comedyMovies: Completemovie[]
    horrorMovies: Completemovie[]
    romanceMovies: Completemovie[]
    documentaries: Completemovie[]
  } 
  
  export interface movie {
    title: string;
    overview: string;
    vote_average: number;
    adult: boolean;
    poster_path: string;
    backdrop_path: string;
    media_type?: string;
    id: number;
  }

  export interface Completemovie {
    _id:string;
    title: string;
    overview: string;
    vote_average: number;
    adult: boolean;
    poster_path: string;
    backdrop_path: string;
    media_type?: string
    id: number
  }

  export const baseUrl = 'https://image.tmdb.org/t/p/original/'
  
  export interface videoEle {
    type:
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
  }