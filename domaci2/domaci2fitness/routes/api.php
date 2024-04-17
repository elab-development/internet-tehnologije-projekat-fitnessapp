<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\TrainerController;
use App\Http\Controllers\TrainerWorkoutController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserWorkoutController;
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
Route::resource('workout',WorkoutController::class)->only(['index']);
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::resource('trainers',TrainerController::class);
    Route::resource('workouts',WorkoutController::class);
    Route::post('/logout',[AuthController::class,'logout']);
    Route::get('user/{id}/workout',[UserWorkoutController::class,'index']);
    Route::get('/users',[UserController::class,'index']);
    Route::get('/users/{id}',[UserController::class,'show']);
    Route::get('trainer/{id}/workout',[TrainerWorkoutController::class,'index']);
   
});