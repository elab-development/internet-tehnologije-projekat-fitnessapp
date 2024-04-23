<?php

namespace App\Http\Controllers;

use App\Http\Resources\WorkoutCollection;
use App\Http\Resources\WorkoutResource;
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
        return WorkoutResource::collection(Workout::paginate(2));
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
            'price'=>'required|numeric',
            'title'=>'required|string',
            'calorie_counter'=>'required|numeric'
        ]);
        if($validation->fails()){
            return response()->json($validation->errors());
        }
        $workout=Workout::create([
            'duration'=>$request->duration,
            'description'=>$request->description,
            'price'=>$request->price,
            'title'=>$request->title,
            'calorie_counter'=>$request->calorie_counter
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
            'price'=>'required|numeric',
            'title'=>'required|string',
            'calorie_counter'=>'required|numeric'
           
        ]);
        if($validation->fails()){
            return response()->json($validation->errors());
        }
        $workout->duration=$request->duration;
        $workout->description=$request->description;
        $workout->price=$request->price;
        $workout->title=$request->title;
        $workout->calorie_counter=$request->calorie_counter;
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
    public function search(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'duration'=>'required|max:255',
            'description'=>'required|string|max:255',
            'price'=>'required|numeric',
            'title'=>'required|string',
            'calorie_counter'=>'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

    
        $query = Workout::query();

        
        if ($request->has('duration')) {
            $query->where('duration', $request->input('duration'));
        }

        if ($request->has('description')) {
            $query->where('description', 'like', '%' . $request->input('description') . '%');
        }

        if ($request->has('price')) {
            $query->where('price', $request->input('price'));
        }

        if ($request->has('title')) {
            $query->where('title', 'like', '%' . $request->input('title') . '%');
        }
        if ($request->has('calorie_counter')) {
            $query->where('calorie_counter', $request->input('calorie_counter'));
        }

        
        $workouts = $query->get();

        return WorkoutResource::collection($workouts);
    }
}
