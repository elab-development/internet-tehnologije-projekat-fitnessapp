<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Workout extends Model
{
    use HasFactory;
    protected $fillable=['duration','description','title','price','image'];
    public function myWorkoutPlans()
    {
        return $this->hasMany(MyWorkoutPlan::class );
    }
    public static function getAllWorkouts(){
        $result=DB::table('workouts')
        ->select('id','duration','description','price','title')->get()->toArray();
        return $result;
    }
    
    
}
