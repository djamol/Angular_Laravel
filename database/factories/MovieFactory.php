<?php

namespace Database\Factories;
use App\Models\Category;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MovieFactory extends Factory
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
            'title' => $this->faker->sentence(3),
            'year' => $this->faker->year,
            'rated' => $this->faker->randomElement(['G', 'PG', 'PG-13', 'R']),
            'released' => $this->faker->date('d M Y'),
            'runtime' => $this->faker->numberBetween(60, 180) . ' min',
            'genre' => json_encode( $this->faker->randomElements(['Drama', 'Comedy', 'Action', 'Romance'], 2)),
            'director' => $this->faker->name,
            'writer' => $this->faker->name,
            'actors' => $this->faker->name . ', ' . $this->faker->name . ', ' . $this->faker->name,
            'plot' => $this->faker->paragraph(3),
            'language' => $this->faker->languageCode,
            'country' => $this->faker->country,
            'awards' => $this->faker->sentence(4),
            'poster' => $this->faker->imageUrl(300, 400),
            'ratings' => json_encode([
                [
                    'source' => 'Internet Movie Database',
                    'value' => $this->faker->randomFloat(1, 0, 10),
                    'total'=> 10
                ],
                [
                    'source' => 'Rotten Tomatoes',
                    'value' => $this->faker->randomNumber(2),
                    'total'=> 100
                ],
                [
                    'source' => 'Metacritic',
                    'value' => $this->faker->randomNumber(2),
                    'total'=> 100
                ],
            ]),
            'meta_score' => $this->faker->numberBetween(0, 100),
            'imdb_rating' => $this->faker->randomFloat(1, 0, 10),
            'imdb_votes' => $this->faker->randomNumber(5),
            'imdb_id' => $this->faker->unique()->regexify('[A-Za-z0-9]{9}'),
            'type' => 'movie',
            'dvd' => $this->faker->date('d M Y'),
            'box_office' => $this->faker->randomNumber(7),
            'production' => $this->faker->company,
          //  'image'=>'/assets/images/1.png',
            'category_id' => $this->faker->randomElement($catIds),
        ];
    }
}
