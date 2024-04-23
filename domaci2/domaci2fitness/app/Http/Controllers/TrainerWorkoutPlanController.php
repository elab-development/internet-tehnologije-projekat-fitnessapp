<?php

namespace App\Http\Controllers;

use App\Http\Resources\MyWorkoutPlanCollection;
use App\Http\Resources\WorkoutCollection;
use App\Models\MyWorkoutPlan;

use Illuminate\Http\Request;

class TrainerWorkoutPlanController extends Controller
{
    //sve rezervisane termine koje drzi neki trener
    public function index($id)
    {
        $myWorkoutPlan=MyWorkoutPlan::get()->where('trainer_id',$id);
        if(is_null($myWorkoutPlan)){
            return response()->json([
                'message' => 'Workout plan with that trainer does not exist',
                'status_code' => 404,
            ], 404);
        }
        return new MyWorkoutPlanCollection($myWorkoutPlan);
    }
}
