<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Barryvdh\DomPDF\Facade\Pdf as PDF;

use Illuminate\Http\Request;

class PDFController extends Controller
{
    public function getAll(){
        $workout=Workout::all();
        return view('views',compact('workout'));
    }
    public function downloadPDF(){
        $workout=Workout::all();
        $pdf=PDF::loadView('views',compact('workout'));
        return $pdf->download('views.pdf');
    }
}
