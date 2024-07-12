<?php

namespace App\Http\Controllers;

use App\Http\Resources\MyWorkoutPlanCollection;
use App\Http\Resources\MyWorkoutPlanResource;
use App\Http\Resources\WorkoutCollection;
use App\Models\MyWorkoutPlan;

use Illuminate\Http\Request;

class UserMyWorkoutPlanController extends Controller
{
    public function index($id){
        $myWorkoutPlan=MyWorkoutPlan::get()->where('member_id',$id);
            
        return  MyWorkoutPlanResource::collection($myWorkoutPlan);
    }
}
