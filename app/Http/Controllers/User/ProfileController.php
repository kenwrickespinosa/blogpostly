<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index() 
    {
        return Inertia::render('User/Profile/Show');
    }

    public function show(User $user)
    {
        return Inertia::render('User/Profile/Show');
    }
}
