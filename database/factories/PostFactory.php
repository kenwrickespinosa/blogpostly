<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        return [
            'id' => fake()->uuid(),
            'title' => fake()->sentence(fake()->numberBetween(6, 12)),
            'content' => fake()->paragraphs(fake()->numberBetween(3, 24), true),
        ];
    }
}
