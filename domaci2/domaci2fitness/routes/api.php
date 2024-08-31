<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CSVController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\GymController;
use App\Http\Controllers\MyWokroutPlanController;
use App\Http\Controllers\ResetPassController;
use App\Http\Controllers\StatistikeController;
use App\Http\Controllers\TrainerController;

use App\Http\Controllers\TrainerWorkoutPlanController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserMyWorkoutPlanController;

use App\Http\Controllers\WorkoutController;
use App\Http\Resources\UserCollection;
use App\Models\MyWorkoutPlan;
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
//Route::resource('workout',WorkoutController::class)->only(['index']);
Route::get('/workoutHome',[WorkoutController::class,'indexPagination']);
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('/workout.pdf',[ExportController::class,'exportPDF']);

Route::post('/reset',[ResetPassController::class,'reset']);
//bez obzira na ulogu u sistemu svi mogu da izvrse logout
Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('/logout',[AuthController::class,'logout']);
});
Route::middleware (['auth:sanctum','role:member'])->group( function () {
    
    Route::get('/myWorkouts', [MyWokroutPlanController::class, 'indexMembers']);
    Route::get('/myWorkouts/{id}', [MyWokroutPlanController::class, 'show']);
    Route::post('/myWorkouts', [MyWokroutPlanController::class, 'store']);
    Route::put('/myWorkouts/{id}', [MyWokroutPlanController::class, 'update']);
    Route::delete('/myWorkouts/{id}', [MyWokroutPlanController::class, 'destroy']);

    Route::get('user/{id}/workout',[UserMyWorkoutPlanController::class,'index']);
    Route::get('trainer/{id}/workout',[TrainerWorkoutPlanController::class,'index']);
   
    
   
});
Route::group(['middleware' => ['auth:sanctum','role:admin']], function () {
    
    Route::resource('trainers',TrainerController::class);
    Route::put('/trainersUpdate/{id}',[TrainerController::class,'update']);
    Route::delete('/trainers/{id}',[TrainerController::class,'destroy']);
    Route::get('user/{id}/workout',[UserMyWorkoutPlanController::class,'index']);
    Route::get('trainer/{id}/workout',[TrainerWorkoutPlanController::class,'index']);
    Route::resource('workouts', WorkoutController::class);
    Route::get('workouts/{id}',[WorkoutController::class,'show']);
    Route::delete('/workouts/{id}',[WorkoutController::class,'destroy']);
    Route::put('/workoutsUpdate/{id}',[WorkoutController::class,'update']); 
    Route::resource('gyms', GymController::class);
    Route::delete('/gyms/{id}',[GymController::class,'destroy']);
    Route::put('/gymsUpdate/{id}',[GymController::class,'update']); 
    Route::get('admin/stats', [StatistikeController::class, 'statistikeAdmin']);
    
    
   
});