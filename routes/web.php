<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\SignupController;
use App\Http\Controllers\User\ExploreController;
use App\Http\Controllers\User\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage/Index');
});

Route::get('/auth/signup', [SignupController::class, 'create']);
Route::get('/auth/login', [LoginController::class, 'create']);

Route::get('/explore', [ExploreController::class, 'index']);
Route::get('/{user:slug}/{post:slug}', [PostController::class, 'show'])->name('posts.show');