<?php

namespace App\Http\Controllers;

use App\Models\Trainer;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Http\Request;

class StatistikeController extends Controller
{
    public function statistikeAdmin(){
        try {
            $statistike = [];
    
            // Ukupan broj trenera
            $statistike['number_of_traners'] =Trainer::count();
    
            // Ukupan broj treninga
            $statistike['number_of_workouts'] = Workout::count();
    
            // Ukupan broj prijavljenih korisnika
            $statistike['number_of_members'] = User::where('role', 'members')->count();
    
          
            // Ukupan broj rezervacija za svaku uslugu
            $reservations = Workout::withCount('myWorkoutPlans')->get();
            $statistike['number_of_reservations_by_workout'] = $reservations->pluck('myWorkoutPlans_count', 'name');
           
            // Ukupan broj rezervacija po zaposlenom
            $trainer = Trainer::withCount('myWorkoutPlans')->get();
            $statistike['ukupan_broj_rezervacija_po_zaposlenom'] = $trainer->pluck('myWorkoutPlans_count', 'name');
          
            
            
         
            return response()->json($statistike, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Greška prilikom dobavljanja statistika.'], 500);
        }
    }
}

