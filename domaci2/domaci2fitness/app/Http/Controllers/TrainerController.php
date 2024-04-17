<?php

namespace App\Http\Controllers;

use App\Http\Resources\TrainerCollection;
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
        if(is_null($trainer)){
            return response()->json(['message'=>"Data not found",'status_code'=>404],404);
        }
        return new TrainerCollection($trainer);
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
            'licence_number'=>'required|min:5',
            'email'=>'required|email|unique'
        ]);
        if($validation->fails()){
            return response()->json($validation->errors());
        }
        $trainer=Trainer::create([
            'name'=>$request->name,
            'licence_number'=>$request->licence_number,
            'email'=>$request->email

        ]);
        return response()->json($trainer);
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
            'licence_number'=>'required|max:20|numeric|unique:trainers',
            'email'=>'required|email|unique:trainers'
        ]);
        if($validation->fails()){
            return response()->json($validation->errors());
        }
        $trainer->name=$request->name;
        $trainer->licence_number=$request->licence_number;
        $trainer->email=$request->email;
        $trainer->save();
        return response()->json('Trainer is updated successfully.',200);
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
