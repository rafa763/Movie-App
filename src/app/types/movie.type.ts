export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  type: string;
}

export interface MovieX {
  id: number;
  title: string;
  name: string | null;
  original_language: string;
  original_title: string;
  original_name: string | null;
  overview: string;
  poster_path: string;
  media_type: string | null;
  popularity: number;
  release_date: string;
  first_air_date: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  type: string;
}
