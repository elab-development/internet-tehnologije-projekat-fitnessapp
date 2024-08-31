<?php

namespace App\Http\Controllers;

use App\Models\Workout;

use Barryvdh\DomPDF\Facade\Pdf as PDF;
use Illuminate\Http\Request;

class ExportController extends Controller
{
    public function getAllWorkouts(){
        $workout=Workout::all();
        return view('workoutsPDF',compact('workout'));
    }
    public function exportPDF(){
        $workout=Workout::all();
        $pdf=PDF::loadView('workoutsPDF',compact('workout'));
        return $pdf->download('workout.pdf');
    }
}
