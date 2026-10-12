<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        foreach ($users as $user) {
            Post::factory()
                ->count(fake()
                    ->numberBetween(1, 4))
                ->for($user)
                ->create([
                    'user_id' => $user->id,
                    'status' => 'published',
                ]);
        }
    }
}
