<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    use HasFactory;
    protected $fillable=['name','email','licenceNumber'];
    public function workouts(){
        return $this->hasMany(MyWorkoutPlan::class);
    }
}
