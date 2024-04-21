<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;
    protected $fillable=['duration','description','title','calorie_counter'];
    public function trainer(){
        return $this->belongsTo(Trainer::class);
    }
   
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function gym(){
        return $this->belongsTo(Gym::class);
    }
}
