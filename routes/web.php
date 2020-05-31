<?php

use Illuminate\Support\Facades\Route;

Route::view('/products', 'app');
Route::view('/product/edit/{id}', 'app');
Route::view('/product/delete/{id}', 'app');
Route::view('/product/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');