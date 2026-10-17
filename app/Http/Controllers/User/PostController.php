<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function show(User $user, Post $post)
    {
        return Inertia::render('User/Post/Show', [
            'user' => $user->name,
            'post' => [
                'title' => $post->title,
                'content' => $post->content,
                'thumbnail' => $post->thumbnail,
                'created_at' => $post->created_at
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('User/Post/Create');
    }

    public function store() {}
}
