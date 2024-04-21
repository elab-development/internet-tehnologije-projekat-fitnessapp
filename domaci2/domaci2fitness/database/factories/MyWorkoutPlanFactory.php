<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MyWorkoutPlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->number(),
            'trainer_id' => $this->faker->numberBetween(1, 5),
            'gym_id' => $this->faker->number(),
            'date' => $this->faker->time(),
            
        ];
    }
}
