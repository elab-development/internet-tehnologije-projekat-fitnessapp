<?php

namespace Database\Seeders;

use App\Models\Gym;
use App\Models\MyWorkoutPlan;
use App\Models\Trainer;
use App\Models\User;
use App\Models\Workout;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
        
        //1 admin
        User::create([
            'name' => 'Jelena',
            'email' => 'member1@gmail.com',
            'password' => Hash::make('Jelena18*'),  
            'role' => 'member',
        ]);

        User::create([
            'name' => 'Jeja',
            'email' => 'member2@gmail.com',
            'password' => Hash::make('Jelena18*'),  
            'role' => 'member',
        ]);
   
        User::create([
            'name' => 'admin',
            'email' => 'admin1@gmail.com',
            'password' => Hash::make('Admin18*'),  
            'role' => 'admin',
        ]);
        User::create([
            'name' => 'trainer',
            'email' => 'trainer1@gmail.com',
            'password' => Hash::make('Trainer18*'),  
            'role' => 'trainer',
        ]);
        
        
        
        
        Workout::create([
            'title'=>'Cardio',
            'duration'=>60,
            'description'=>'Cardiovascular exercise is any vigorous activity that increases heart rate and respiration and raises oxygen and blood flow throughout the 
            body ',
            'price'=>1500,
            'image'=>'cardio.png',
        ]);
        Workout::create([
            'title'=>'Strength',
            'duration'=>30,
            'description'=>'Strength training, also known as weight training, involves the performace 
            of physical exercises that are designed to improve strength and edurance.',
            'price'=>2000,
            'image'=>'strength.png'
        ]);
        Workout::create([
            'title'=>'Pilates',
            'duration'=>60,
            'description'=>'A system of exercises using special aparatus, designed to improve physical 
            strength, flexibility and posture.',
            'price'=>2500,
            'image'=>'pilates.png'
        ]);
        Workout::create([
            'title'=>'Stretching',
            'duration'=>30,
            'description'=>'Stretching is a form of physical exercise in which a 
            specific muscle or tendon is deliberately expanded and flexed 
            in order to improve the muscles felt elasticity and achieve comfortable muscle tone.',
            'price'=>500,
            'image'=>'stretching.png'
        ]);
        Workout::create([
            'title'=>'Yoga',
            'duration'=>60,
            'description'=>'Yoga is a group of physical, mental, and spiritual practices or 
            disciplines which originated in ancient India and aim to control and still the mind.',
            'price'=>2900,
            'image'=>'yoga.png'
        ]);
        Workout::create([
            'title'=>'HIIT',
            'duration'=>30,
            'description'=>'HIIT exercises involve short bursts of intense movements followed
             by brief periods of rest or low-intensity activity.',
            'price'=>3000,
            'image'=>'hiit.png'
        ]);
    
        
        //5 trenera
        Trainer::factory(5)->create();
        //kreiranje teretana
        $this->call(GymSeeder::class);
        //10 licnih planova vezbi
        MyWorkoutPlan::factory(10)->create();
        
        
    }
}
