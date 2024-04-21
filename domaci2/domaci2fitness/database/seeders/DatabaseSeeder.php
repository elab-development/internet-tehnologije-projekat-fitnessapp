<?php

namespace Database\Seeders;

use App\Models\Gym;
use App\Models\MyWorkoutPlan;
use App\Models\Trainer;
use App\Models\User;
use App\Models\Workout;

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
        
        
        User::factory(1)->create(['role' => 'admin']);
        User::factory(10)->create(['role' => 'user']);
        User::factory(5)->create(['role' => 'member']);
        
        Workout::create([
            'title'=>'Cardio workout',
            'duration'=>60,
            'description'=>'Cardiovascular exercise is any vigorous activity that increases heart rate and respiration and raises oxygen and blood flow throughout the 
            body while using large muscle groups of the body repetitively and rhythmically.',
            'calorie_burn'=>450
        ]);
        Workout::create([
            'title'=>'Strength workout',
            'duration'=>30,
            'description'=>'Strength training, also known as weight training, involves the performace 
            of physical exercises that are designed to improve strength and edurance.',
            'calorie_burn'=>500
        ]);
        Workout::create([
            'title'=>'Pilates',
            'duration'=>60,
            'description'=>'A system of exercises using special aparatus, designed to improve physical 
            strength, flexibility and posture.',
            'calorie_burn'=>300
        ]);
        Workout::create([
            'title'=>'Stretching',
            'duration'=>30,
            'description'=>'Stretching is a form of physical exercise in which a 
            specific muscle or tendon is deliberately expanded and flexed 
            in order to improve the muscles felt elasticity and achieve comfortable muscle tone.',
            'calorie_burn'=>50
        ]);
        Workout::create([
            'title'=>'Yoga',
            'duration'=>60,
            'description'=>'Yoga is a group of physical, mental, and spiritual practices or 
            disciplines which originated in ancient India and aim to control and still the mind,
             recognizing a detached witness-consciousness untouched by the mind and mundane suffering.',
            'calorie_burn'=>50
        ]);
        Workout::create([
            'title'=>'HIIT',
            'duration'=>30,
            'description'=>'HIIT exercises involve short bursts of intense movements followed
             by brief periods of rest or low-intensity activity.',
            'calorie_burn'=>500
        ]);
        Gym::create([
            'city'=>'Beograd',
            'street'=>'Kralja Milana',
            'street_number'=>20
        ]);
        Gym::create([
            'city'=>'Beograd',
            'street'=>'Cara Dusana',
            'street_number'=>150
        ]);
        Gym::create([
            'city'=>'Beograd',
            'street'=>'Vojvode Stepe',
            'street_number'=>14
        ]);
        MyWorkoutPlan::factory(10)->create();
        
        
        
        
    }
}
