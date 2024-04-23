<?php

namespace App\Http\Controllers;

use App\Http\Resources\MyWorkoutPlanCollection;
use App\Http\Resources\WorkoutCollection;
use App\Models\MyWorkoutPlan;

use Illuminate\Http\Request;

class UserMyWorkoutPlanController extends Controller
{
    public function index($id){
        $myWorkoutPlan=MyWorkoutPlan::get()->where('member_id',$id);
            if(is_null($myWorkoutPlan)){
            return response()->json([
                'message' => 'Workout plan does not exist',
                'status_code' => 404,
                ], 404);
            }
        return new MyWorkoutPlanCollection($myWorkoutPlan);
    }
}
