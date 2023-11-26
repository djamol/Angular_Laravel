export class Movie {
    id: number=0;
    title: string='';
    year: string='';
    rated: string='';
    released: string='';
    runtime: string='';
    genre: string[]=[]; // Assuming genre is an array of strings
    director: string='';
    writer: string='';
    actors: string='';
    plot: string='';
    language: string='';
    country: string='';
    awards: string='';
    poster: string='';
    ratings: Rating[]=[];
    meta_score: string='';
    imdb_rating: string='';
    imdb_votes: string='';
    imdb_id: string='';
    type: string='';
    dvd: string='';
    box_office: string='';
    production: string='';
    category_id: number=0;
  }

  export interface Rating {
    source: string;
    value: string;
    total:string;
  }
