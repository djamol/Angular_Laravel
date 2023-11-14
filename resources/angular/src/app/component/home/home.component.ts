import {  Component, OnChanges, SimpleChanges,ChangeDetectorRef   } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../../model/book.model';
import { Category } from '../../model/category.model';
import { BookService } from '../../service/book.service';
import { CategoryService } from '../../service/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    books: Book[] = [];
    filteredBooks: any[] = [];
    categories: Category[]=[];
    searchKey: string = '';
    page_data:any;
    category_id:any='0';
    login_b:boolean=true;
    unFilteredBooks:boolean=false;
    constructor(private bookService: BookService,private cdr: ChangeDetectorRef, private categoryService: CategoryService) {}
    ngOnInit(): void {
    //this.login();
    this.getBooks();
    this.getCategories();
    }
/*
    login() {
      this.AuthService.login({
        "name":"amol",
        "email":"amol@asf.in",
        "password":"password"
    }).subscribe((data: any) => {
        this.AuthService.cookie.storeCookie('token',data.token);
        console.log("login",data.token);
    });
    } */
    buttonToogle(){
        this.login_b=!this.login_b;
    }
    getBooks() {
        this.bookService.getBooks().subscribe(books => {
            this.books = books.data;
            this.filteredBooks=this.books;
            this.page_data =books;
            this.unFilteredBooks=true;
        });
      }

      filterBooks() {
        if(this.category_id=='All' ||this.category_id==0){
        this.filteredBooks = this.books.filter(book =>
                book.title.toLowerCase().includes(this.searchKey.toLowerCase()));
        this.unFilteredBooks=true;
        return;
        }
        this.unFilteredBooks=false;
        this.filteredBooks = this.books.filter(book =>
          book.title.toLowerCase().includes(this.searchKey.toLowerCase()) && book.category_id == this.category_id)
        ;
        this.cdr.detectChanges();

       }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
