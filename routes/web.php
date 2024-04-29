<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
	return Inertia('Home');
});

Route::get('/women', function () {
	return Inertia('Women');
});