<?php

use App\Http\Controllers\ExportController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\WorkoutController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/workoutsPDF',[ExportController::class,'getAllWorkouts']);
Route::get('/workout.pdf',[ExportController::class,'exportPDF']);
