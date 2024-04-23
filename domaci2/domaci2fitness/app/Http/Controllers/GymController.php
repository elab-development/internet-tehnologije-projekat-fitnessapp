<?php

namespace App\Http\Controllers;

use App\Http\Resources\GymCollection;
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
        if(is_null($gym)){
            return response()->json(['message'=>"Gym not found",'status_code'=>404],404);
        }
        return new GymCollection($gym);
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
            'street_number'=>'required|min:5',
            'city'=>'required|string|max:30'
        ]);
        if($validation->fails()){
            return response()->json($validation->errors());
        }
        $gym=Gym::create([
            'name'=>$request->name,
            'street'=>$request->street,
            'street_number'=>$request->street_number,
            'city'=>$request->city

        ]);
        return response()->json($gym);
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
    public function update(Request $request, Gym $gym)
    {
        $validation=Validator::make($request->all(),[
            'name'=>'required|string|max:20',
            'street'=>'required|max:100|string',
            'street_number'=>'required|min:5',
            'city'=>'required|string|max:30'
        ]);
        if($validation->fails()){
            return response()->json($validation->errors());
        }
        $gym->name=$request->name;
        $gym->street=$request->strret;
        $gym->street_number=$request->street_number;
        $gym->city=$request->city;
        $gym->save();
        return response()->json('Gym is updated successfully.',200);
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
