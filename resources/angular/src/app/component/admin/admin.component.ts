import {  Component, OnChanges, SimpleChanges,ChangeDetectorRef   } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../../model/movie.model';
import { MovieService } from '../../service/movie.service';
import { Category } from '../../model/category.model';
import { CategoryService } from '../../service/category.service';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../service/auth.service';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
    movies: Movie[] = [];
    filteredMovies: any[] = [];
    page_data:any;
    unFilteredMovies:boolean=false;
    searchKey: string = '';
    category_id:any='0';
    show :number =1;
    selectedCategory: Category =new Category();
  categories: Category[]=[];
  isEditing :any[]= [];
  selectedMovie: Movie = new Movie();
  genreOptions = ['Romance', 'Drama', 'Action', 'Comedy', 'Sci-Fi', 'Thriller', 'Horror', 'Other'];
  movieForm: NgForm | undefined;

    constructor(private movieService: MovieService, private categoryService: CategoryService,private cdr: ChangeDetectorRef,
        private main:AppComponent,private auth:AuthService) {}

    ngOnInit(): void {
      this.getMovies();
      this.getCategories();
      console.log("auth",this.auth.getToken());
      console.log("auth api",this.auth.apiUrl);
    }
/*
    getMovies() {
      this.movieService.getMovies().subscribe((data: Movie[]) => {
        this.movies = data;
        this.filteredMovies = this.movies; // Initialize the filtered list
      });
    }
*/
toggleEditing(movie:any) {
    if (this.isEditing[movie.id]) {
        this.isEditing[movie.id]=false;
        this.editMovie(movie);
        this.getMovies();
    } else {
      this.isEditing[movie.id] = true;
    }
  }
  toggleEditingCategories(category:any) {
    if (this.isEditing[category.id]) {
        this.isEditing[category.id]=false;
        this.editCategory(category);
        this.getCategories();
    } else {
      this.isEditing[category.id] = true;
    }
  }

     filterMovies() {
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
getMovies() {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies.data;
      this.filteredMovies=this.movies;
      this.page_data =movies;
      this.unFilteredMovies=true;
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }


  addMovie() {

    const observer: Observer<any> = {
        next: response => {
            this.getMovies();
            this.selectedMovie = new Movie();
            this.main.showMessage('Success','Successfully created a new movie.','');
        },
        error: error => {
          console.log('Error:', error.error);
          this.main.showMessage('Error :'+error.status,error.error.message,'',1);
        },
        complete: () => {
          console.log('Complete');
        }
      };
    this.movieService.createMovie(this.selectedMovie).subscribe(observer);

    this.movieService.createMovie(this.selectedMovie).subscribe(() => {
      this.getMovies();
      this.selectedMovie = new Movie();
      this.main.showMessage('Success','Successfully created a new movie.','');
    });
  }

  editMovie(movie: Movie) {
    this.movieService.updateMovie(movie.id, movie).subscribe(() => {
      this.getMovies();
      this.main.showMessage('Success','Movie successfully updated','');
    });
  }

  deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie.id).subscribe(() => {
      this.getMovies();
      this.main.showMessage('Success','Movie successfully deleted','');
    });
  }

  addCategory() {

    this.categoryService.createCategory(this.selectedCategory).subscribe(() => {
      this.getCategories();
      this.selectedCategory = new Category();
      this.main.showMessage('Success','Successfully created a new category.','');
    });

  }

  editCategory(category: Category) {

    this.categoryService.updateCategory(category.id, category).subscribe(() => {
      this.getCategories();
      this.main.showMessage('Success','Category successfully updated','');
    });

  }
  removeRating(index: number): void {
    this.selectedMovie.ratings.splice(index, 1);
  }

  addRating(): void {
    this.selectedMovie.ratings.push({ source: '', value: '', total: '' });
  }
  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category.id).subscribe(() => {
      this.getCategories();
      this.main.showMessage('Success','Category successfully deleted','');
    });
  }
}
