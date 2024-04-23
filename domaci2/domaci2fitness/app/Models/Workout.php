<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;
    protected $fillable=['duration','description','title','calorie_counter','price'];
    public function myWorkoutPlans()
    {
        return $this->hasMany(MyWorkoutPlan::class );
    }
    
    
}
