<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GymFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id'=>$this->faker->randomDigit(),
            'name' => $this->faker->string(),
            'street' => $this->faker->string(),
            'street_number' => $this->faker->randomDigit(),
            'city' => $this->faker->string()
            
        ];
    }
}
