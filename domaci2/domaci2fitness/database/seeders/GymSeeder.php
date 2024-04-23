<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GymSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $gyms = [
            [
                'name' => 'FitCentar',
                'city'=>'Beograd',
                'street'=>'Kralja Milana',
                'street_number'=>20
               
            ],
            [
                'name'=>'Mojo',
                'city'=>'Beograd',
                'street'=>'Cara Dusana',
                'street_number'=>150
                
            ],
            [
                'name'=>'ProFitness',
                'city'=>'Beograd',
                'street'=>'Vojvode Stepe',
                'street_number'=>14
              
            ]
           
        ];

        
        DB::table('gyms')->insert($gyms);

    }
    
}
