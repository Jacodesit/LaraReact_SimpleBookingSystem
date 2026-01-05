<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', fn() => Inertia::render('welcome'));
Route::get('/home', fn() => Inertia::render('Mainpages/Home'))->name('booking.home');

require __DIR__.'/settings.php';
