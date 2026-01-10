<?php

use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', fn() => Inertia::render('welcome'));
Route::get('/home', [BookingController::class, 'index'])->name('booking.home');
Route::put('/bookings/{booking}/status', [BookingController::class, 'updateStatus'])->name('booking.update.status');
Route::resource('bookings', BookingController::class)->except('index');

require __DIR__.'/settings.php';
