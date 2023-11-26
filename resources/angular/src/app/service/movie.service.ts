import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

    public apiUrl: any;
    public token = '';
  constructor(private http: HttpClient,private location:Location,private auth:AuthService) {
this.apiUrl=this.auth.apiUrl;
console.log("api-movie",this.apiUrl);
  }
  // HTTP headers, if needed
  httpOptions = {};
  setHeader(){
    let auth = 'Bearer ' + this.auth.getToken();
    console.log("auth test->",auth.replaceAll('"',''));
    this.httpOptions ={
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': auth.replaceAll('"','')
        })
      };
  }
  // Fetch all movies
  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl+ "/movies");
  }
  getDashboard(): Observable<any> {
    return this.http.get<any>(this.apiUrl+ "/dashboard");
  }
  // Create a new movie
  createMovie(movie: Movie): Observable<Movie> {
    this.setHeader();
    return this.http.post<Movie>(this.apiUrl+ "/movies", movie, this.httpOptions);
  }

  addRating(data: any): Observable<any> {
    this.setHeader();
    return this.http.post<Movie>(this.apiUrl+ "/rating/add", data, this.httpOptions);
  }

  // Update an existing movie
  updateMovie(id: number, movie: Movie): Observable<Movie> {
    this.setHeader();
    const url = `${this.apiUrl}/movies/${id}`;
    return this.http.put<Movie>(url, movie, this.httpOptions);
  }

  // Delete a movie by ID
  deleteMovie(id: number): Observable<void> {
    this.setHeader();
    const url = `${this.apiUrl}/movies/${id}`;
    return this.http.delete<void>(url, this.httpOptions);
  }

}
