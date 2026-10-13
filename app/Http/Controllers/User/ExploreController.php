<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExploreController extends Controller
{
    public function index()
    {
        $posts = Post::with('user:id,name,email,slug')
            ->where('status', 'published')
            ->select('id', 'user_id', 'title', 'content', 'thumbnail', 'slug')
            ->get();

        return Inertia::render('User/Explore/Index', [
            'posts' => $posts
        ]);
    }
}
