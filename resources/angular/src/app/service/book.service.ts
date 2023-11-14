import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class BookService {

    public apiUrl: any;
    public token = '';
  constructor(private http: HttpClient,private location:Location,private auth:AuthService) {
this.apiUrl=this.auth.apiUrl;
console.log("api-book",this.apiUrl);
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
  // Fetch all books
  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl+ "/books");
  }

  // Create a new book
  createBook(book: Book): Observable<Book> {
    this.setHeader();
    return this.http.post<Book>(this.apiUrl+ "/books", book, this.httpOptions);
  }


  // Update an existing book
  updateBook(id: number, book: Book): Observable<Book> {
    this.setHeader();
    const url = `${this.apiUrl}/books/${id}`;
    return this.http.put<Book>(url, book, this.httpOptions);
  }

  // Delete a book by ID
  deleteBook(id: number): Observable<void> {
    this.setHeader();
    const url = `${this.apiUrl}/books/${id}`;
    return this.http.delete<void>(url, this.httpOptions);
  }

}
