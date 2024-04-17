<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;
    protected $fillable=['duration','description','user_id','trainer_id','type_id'];
    public function trainer(){
        return $this->belongsTo(Trainer::class);
    }
    public function workoutType(){
        return $this->belongsTo(WorkoutType::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
