<?php

namespace Database\Seeders;

use App\Models\Trainer;
use App\Models\User;
use App\Models\Workout;
use App\Models\WorkoutType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Trainer::truncate();
        User::truncate();
        Workout::truncate();
        
        WorkoutType::truncate();
        User::insert(['name'=>'pera','email'=>'pera@gmail.com','password'=>bcrypt('1234')]);
        User::factory(10)->create();
        Trainer::factory(10)->create();
        WorkoutType::insert(['type'=>'cardio']);
        $workout1=new Workout();
        $workout1->duration=60;
        $workout1->description="60 min cardio";
        $workout1->trainer_id=1;
        $workout1->type_id=1;
        $workout1->user_id=1;
        $workout1->save();
        WorkoutType::insert(['type'=>'HIIT']);
        Workout::create(['duration'=>30,'description'=>'short HIIT','trainer_id'=>2,'type_id'=>2,'user_id'=>2]);
        
        
    }
}
