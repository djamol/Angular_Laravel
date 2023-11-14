

## About 
## Run
```composer install```

## Edit .env (Database Config)
```
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```
## Run
```
php artisan migrate
```
## Run (For dummy Categories and Books data)
```
php artisan db:seed --class=CategoriesTableSeeder
php artisan db:seed --class=BooksTableSeeder
```
