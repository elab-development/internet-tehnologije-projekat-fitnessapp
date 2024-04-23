<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyWorkoutPlan extends Model
{
    use HasFactory;
    protected $fillable = [
        'member_id', 'workout_id', 'trainer_id', 'gym_id','date','time'
    ];
    public function trainer(){
        return $this->belongsTo(Trainer::class,'trainer_id');
    }
   
    public function member(){
        return $this->belongsTo(User::class,'member_id');
    }
    public function gym(){
        return $this->belongsTo(Gym::class,'gym_id');
    }
    public function workout(){
        return $this->belongsTo(Workout::class,'workout_id');
    }
}
