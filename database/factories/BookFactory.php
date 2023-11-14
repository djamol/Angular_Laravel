<?php

namespace Database\Factories;
use App\Models\Category;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $catIds = Category::pluck('id')->toArray();
        return [
            'author' => $this->faker->randomElement(['Alex Roy', 'Ankush Shinde', 'Tom Vay']),
            'title' => $this->faker->word,
            'description' => $this->faker->sentence,
            'publication_date' => $this->faker->dateTimeBetween( '-1 year','now'),
            'isbn' => $this->faker->randomElement(['all', 'specific']),
            'genre' => $this->faker->randomElement(['1', '2']),
            'image'=>'/assets/images/1.png',
            'category_id' => $this->faker->randomElement($catIds),
        ];
    }
}
