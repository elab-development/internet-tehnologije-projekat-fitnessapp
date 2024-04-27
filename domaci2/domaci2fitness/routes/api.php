<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\GymController;
use App\Http\Controllers\MyWokroutPlanController;
use App\Http\Controllers\TrainerController;

use App\Http\Controllers\TrainerWorkoutPlanController;

use App\Http\Controllers\UserMyWorkoutPlanController;

use App\Http\Controllers\WorkoutController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('trainer',TrainerController::class)->only(['index']);
Route::resource('gym',GymController::class)->only(['index']);
Route::resource('workout',WorkoutController::class)->only(['index']);
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
//bez obzira na ulogu u sistemu svi mogu da izvrse logout
Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('/logout',[AuthController::class,'logout']);
});
Route::middleware (['auth:sanctum','role:member'])->group( function () {
    
    Route::resource('myWorkouts',MyWokroutPlanController::class);
    Route::get('user/{id}/workout',[UserMyWorkoutPlanController::class,'index']);
    Route::get('trainer/{id}/workout',[TrainerWorkoutPlanController::class,'index']);
    Route::resource('workouts', WorkoutController::class);//ovo samo za testiranje
    
   
});
Route::group(['middleware' => ['auth:sanctum','role:admin']], function () {
    
    Route::resource('trainers',MyWokroutPlanController::class);
    Route::get('user/{id}/workout',[UserMyWorkoutPlanController::class,'index']);
    Route::get('trainer/{id}/workout',[TrainerWorkoutPlanController::class,'index']);
    
   
});