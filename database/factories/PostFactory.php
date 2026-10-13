<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(fake()->numberBetween(3, 6));

        return [
            'id' => fake()->uuid(),
            'title' => $title,
            'content' => fake()->paragraphs(fake()->numberBetween(3, 24), true),
            'slug' => Str::slug($title) . '-' . Str::lower(Str::random(6))
        ];
    }
}
