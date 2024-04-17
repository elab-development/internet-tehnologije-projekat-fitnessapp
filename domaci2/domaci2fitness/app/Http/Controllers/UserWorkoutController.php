<?php

namespace App\Http\Controllers;

use App\Http\Resources\WorkoutCollection;
use App\Models\Workout;
use Illuminate\Http\Request;

class UserWorkoutController extends Controller
{
    public function index($id){
        $workouts=Workout::get()->where('user_id',$id);
            if(is_null($workouts)){
            return response()->json([
                'message' => 'Workout does not exist',
                'status_code' => 404,
                ], 404);
            }
        return new WorkoutCollection($workouts);
    }
}
