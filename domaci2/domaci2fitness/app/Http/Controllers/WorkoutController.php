<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkoutStoreRequest;
use App\Http\Resources\WorkoutCollection;
use App\Http\Resources\WorkoutResource;
use App\Models\Workout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

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
    public function store(WorkoutStoreRequest $request)
    {
       try{
        $imageName=Str::random(6).".".$request->image->getClientOriginalExtension();
        Workout::create([
            'duration'=>$request->duration,
            'description'=>$request->description,
            'price'=>$request->price,
            'title'=>$request->title,
            'calorie_burn'=>$request->calorie_burn,
            'image'=>$request->image,
        ]);
        Storage::disk('public')->put($imageName,file_get_contents($request->image));
        return response()->json([
            'message'=>'Workout succesfully created'
        ],200);
       }catch(\Exception $e){
            return response()->json([
                'message'=>'Something went wrong'
            ],500);
       }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Workout  $workout
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $workout=Workout::find($id);
        if(!$workout){
            return response()->json([
                'message'=>'Workout not found'
            ],404);
        }
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
    public function update(WorkoutStoreRequest $request,$id)
    {
       try{
        $workout=Workout::find($id);
        if(!$workout){
            return response()->json([
                'message'=>'Workout not found'
            ],404);
        }
            echo "request:$request->title";
            echo "request:$request->duration";
            echo "request:$request->description";
            echo "request:$request->calorie_burn";
            echo "request:$request->price";
            $workout->title=$request->title;
            $workout->duration=$request->duration;
            $workout->description=$request->description;
            $workout->calorie_burn=$request->calorie_burn;
            $workout->price=$request->price;
            if($request->image){
                $storage=Storage::disk('public');
                if($storage->exists($workout->image)){
                    $storage->delete($workout->image);
                }
                $imageName=Str::random(6).".".$request->image->getClientOriginalExtension();
                $workout->image=$imageName;
                $storage->put($imageName,file_get_contents($request->image));
            }
            $workout->save();
           
            return response()->json([
                'message'=>'Workout succesfully updated'
            ],200);
       }catch(\Exception $e){
        return response()->json([
            'message'=>'Something went wrong'
        ],500);
       }
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
            'calorie_burn'=>'required|numeric'
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
        if ($request->has('calorie_burn')) {
            $query->where('calorie_burn', $request->input('calorie_counter'));
        }

        
        $workouts = $query->get();

        return WorkoutResource::collection($workouts);
    }
}
