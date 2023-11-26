<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MoviesController;
use App\Http\Controllers\CategoryController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/



Route::post('register', 'App\Http\Controllers\AuthController@register');
Route::post('login', 'App\Http\Controllers\AuthController@login');

Route::middleware('auth:api')->group(function () {
    Route::apiResource('movies', MoviesController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::get('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::get('admin', 'App\Http\Controllers\AuthController@admin');
    Route::post('rating/add', [MoviesController::class,'addRating']);

});
Route::get('categories', [CategoryController::class, 'index']);
Route::get('movies', [MoviesController::class, 'index']);
Route::get('dashboard', [MoviesController::class, 'view']);
Route::get('movies/{movie}/category', [MoviesController::class, 'category']);

Route::get('movies/{movie}', [MoviesController::class, 'show']);
