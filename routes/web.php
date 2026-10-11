<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\SignupController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage/Index');
});

Route::get('/auth/signup', [SignupController::class, 'create']);
Route::get('/auth/login', [LoginController::class, 'create']);