<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    use HasFactory;
    protected $fillable=['name','email','licence_number'];
    public function workouts(){
        return $this->hasMany(MyWorkoutPlan::class);
    }
}
