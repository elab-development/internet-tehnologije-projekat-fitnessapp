<?php

namespace App\Http\Controllers;

use App\Http\Resources\WorkoutCollection;
use App\Models\Workout;
use Illuminate\Http\Request;

class TrainerWorkoutController extends Controller
{
    //sve vezbe koje drzi neki trener
    public function index($id)
    {
        $workout=Workout::get()->where('trainer_id',$id);
        if(is_null($workout)){
            return response()->json([
                'message' => 'Workout with that trainer does not exist',
                'status_code' => 404,
            ], 404);
        }
        return new WorkoutCollection($workout);
    }
}
