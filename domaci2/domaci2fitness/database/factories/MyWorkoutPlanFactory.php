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
            'member_id' => $this->faker->randomDigit(),
            'trainer_id' => $this->faker->randomDigit(),
            'gym_id' => $this->faker->randomDigit(),
            'date' => $this->faker->date(),
            'time'=>$this->faker->time(),
            'workout_id'=>$this->faker->randomDigit()
            
        ];
    }
}
