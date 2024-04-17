<?php

namespace Database\Factories;

use App\Models\Trainer;
use App\Models\User;
use App\Models\WorkoutType;
use Illuminate\Database\Eloquent\Factories\Factory;

class WorkoutFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'description'=>$this->faker->paragraph(),
            'duration'=>$this->faker->randomNumber(),
            'user_id' => User::factory(),
            
            'trainer_id'=>Trainer::factory(),
            'type_id'=>WorkoutType::factory()
        ];
    }
}
