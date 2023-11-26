import {  Component, OnChanges, SimpleChanges,ChangeDetectorRef   } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../../model/movie.model';
import { Category } from '../../model/category.model';
import { MovieService } from '../../service/movie.service';
import { CategoryService } from '../../service/category.service';
import { Observer } from 'rxjs';
import { AppComponent } from '../../../app/app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    movies: Movie[] = [];
    filteredMovies: any[] = [];
    categories: Category[]=[];
    searchKey: string = '';
    page_data:any;
    category_id:any='0';
    login_b:boolean=true;
    unFilteredMovies:boolean=false;
    constructor(private movieService: MovieService,private cdr: ChangeDetectorRef, private categoryService: CategoryService,private main:AppComponent) {}    ngOnInit(): void {
    //this.login();
    this.getMovies();
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
    getMovies() {
        this.movieService.getDashboard().subscribe(movies => {
            this.movies = movies;
            this.filteredMovies=this.movies;
            this.page_data =movies;
            this.unFilteredMovies=true;
        });
      }

      filterMovies() {
        console.log('cat',this.category_id);
        console.log('cat',this.searchKey);

        if(this.category_id=='All' ||this.category_id==0){
        this.filteredMovies = this.movies.filter(movie =>
                movie.title.toLowerCase().includes(this.searchKey.toLowerCase()));
        this.unFilteredMovies=true;
        return;
        }
        this.unFilteredMovies=false;
        this.filteredMovies = this.movies.filter(movie =>
          movie.title.toLowerCase().includes(this.searchKey.toLowerCase()) && movie.category_id == this.category_id)
        ;
        this.cdr.detectChanges();

       }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  addRating(id:number,rating:number){
    console.log("id",id);
    console.log("rating",rating);
    const observer: Observer<any> = {
        next: response => {
          console.log("response",response);
          this.main.showMessage('Success','Successfully added rating.','');
        },
        error: error => {
          console.log('Error:', error.error);
          this.main.showMessage('Error :'+error.status,error.error.message,'',1);
        },
        complete: () => {
          console.log('Complete');
        }
      };
    this.movieService.addRating({id:id,rating:rating}).subscribe(observer);
  }
  getStarsArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    const starsArray: number[] = [];

    for (let i = 0; i < fullStars; i++) {
      starsArray.push(99);
    }

    if (hasHalfStar) {
      starsArray.push(0.5);
    }

    for (let i = 0; i < emptyStars; i++) {
      starsArray.push(0);
    }

    return starsArray;
  }

}
