<?php

namespace App\Http\Controllers;

use App\Http\Resources\GymCollection;
use App\Http\Resources\GymResource;
use App\Models\Gym;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GymController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gym=Gym::all();
        return GymResource::collection($gym);
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
            'street'=>'required|max:100|string',
            'streetNumber'=>'required',
            'city'=>'required|string|max:30'
        ]);
        try{
        $gym=Gym::create([
            'name'=>$request->name,
            'street'=>$request->street,
            'streetNumber'=>$request->streetNumber,
            'city'=>$request->city

        ]);
        return response()->json([
            'message' => "Gym successfully created."
        ],200);
        }catch(\Exception $e){
            return response()->json([
                'message' => "Something went  wrong!"
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gym  $gym
     * @return \Illuminate\Http\Response
     */
    public function show(Gym $gym)
    {
        return new GymCollection($gym);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gym  $gym
     * @return \Illuminate\Http\Response
     */
    public function edit(Gym $gym)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gym  $gym
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        try {
            // Find product
            $gym = Gym::find($id);
            if(!$gym){
              return response()->json([
                'message'=>'Gym Not Found.'
              ],404);
            }
      
            
            $gym->name = $request->name;
            $gym->street = $request->street;
            $gym->streetNumber = $request->streetNumber;
            $gym->city = $request->city;
      
            // Update Gym
            $gym->save();
      
            // Return Json Response
            return response()->json([
                'message' => "Gym successfully updated."
            ],200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
       
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gym  $gym
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gym $gym)
    {
        $gym->delete();
        return response()->json('Gym is successfully deleted.');
    }
    
}
