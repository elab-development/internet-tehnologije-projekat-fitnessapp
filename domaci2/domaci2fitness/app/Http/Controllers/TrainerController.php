<?php

namespace App\Http\Controllers;

use App\Http\Resources\TrainerCollection;
use App\Http\Resources\TrainerResource;
use App\Models\Trainer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TrainerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trainer=Trainer::all();
        return TrainerResource::collection($trainer);
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
            'name'=>'required|max:100|string',
            'licenceNumber'=>'required|min:5',
            'email'=>'required|email|unique:trainers'
        ]);
       
       
        
        try {
            
      
           
            $trainer=Trainer::create([
                'name'=>$request->name,
                'licenceNumber'=>$request->licenceNumber,
                'email'=>$request->email
    
            ]);
      
            
            return response()->json([
                'message' => "Workout successfully created."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Trainer  $trainer
     * @return \Illuminate\Http\Response
     */
    public function show(Trainer $trainer)
    {
        return new TrainerCollection($trainer);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Trainer  $trainer
     * @return \Illuminate\Http\Response
     */
    public function edit(Trainer $trainer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Trainer  $trainer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Trainer $trainer)
    {
        $validation=Validator::make($request->all(),[
            'name'=>'required|string|max:20',
            'licenceNumber'=>'required|max:20|numeric',
            'email'=>'required|email|unique:trainers'
        ]);
        try{
        $trainer->name=$request->name;
        $trainer->licenceNumber=$request->licenceNumber;
        $trainer->email=$request->email;
        $trainer->save();
        return response()->json([
            'message'=>'Trainer succesfully updated'
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
     * @param  \App\Models\Trainer  $trainer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trainer $trainer)
    {
        $trainer->delete();
        return response()->json('Trainer is successfully deleted.');
    }
}
