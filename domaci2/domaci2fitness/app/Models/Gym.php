<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gym extends Model
{
    use HasFactory;
    protected $fillable=['name','street','streetNumber','city'];
    public function myWorkoutPlans()
    {
        return $this->hasMany(MyWorkoutPlan::class );
    }
}
