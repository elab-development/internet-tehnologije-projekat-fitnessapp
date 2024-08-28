<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Workout;
use Illuminate\Http\Request;

class StatistikeController extends Controller
{
    public function statistikeAdmin(){
        $statistike=[];
        $statistike['number_of_trainers']=User::where('role','trainer')->count();
        $statistike['number_of_members']=User::where('role','member')-count();
        $statisike['number_of_workouts']=Workout::count();
        return response()->json($statistike, 200);
    }
}
