<?php

namespace App\Http\Controllers;

use App\Http\Resources\WorkoutCollection;
use App\Models\Workout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class WorkoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $workout=Workout::all();
        return new WorkoutCollection($workout);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation=Validator::make($request->all(),[
            'duration'=>'required|max:255',
            'description'=>'required|string|max:255',
            'user_id'=>'required',
            'trainer_id'=>'required',
           
        ]);
        if($validation->fails()){
            return response()->json($validation->errors());
        }
        $workout=Workout::create([
            'duration'=>$request->duration,
            'description'=>$request->description,
            'user_id'=>$request->user_id,
            'trainer_id'=>$request->trainer_id,
            
            
            
            ]);
            return response()->json($workout);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workout  $workout
     * @return \Illuminate\Http\Response
     */
    public function show(Workout $workout)
    {
        return new WorkoutCollection($workout);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Workout  $workout
     * @return \Illuminate\Http\Response
     */
    public function edit(Workout $workout)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Workout  $workout
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Workout $workout)
    {
        $validation=Validator::make($request->all(),[
            'duration'=>'required|max:255',
            'description'=>'required|string|max:255',
            'user_id'=>'required',
            'trainer_id'=>'required',
           
        ]);
        if($validation->fails()){
            return response()->json($validation->errors());
        }
        $workout->duration=$request->duration;
        $workout->description=$request->description;
        $workout->user_id=$request->user_id;
        $workout->trainer_id=$request->trainer_id;
        
        $workout->save();
        return response()->json('Workout is updated successfully.',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Workout  $workout
     * @return \Illuminate\Http\Response
     */
    public function destroy(Workout $workout)
    {
        $workout->delete();
        return response()->json("Workout deleted!");
    }
}
