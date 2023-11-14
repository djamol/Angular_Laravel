<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BooksController;
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
    Route::apiResource('books', BooksController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::get('refresh', 'App\Http\Controllers\AuthController@refresh');
});
Route::get('categories', [CategoryController::class, 'index']);
Route::get('books', [BooksController::class, 'index']);
Route::get('books/{book}/category', [BooksController::class, 'category']);
