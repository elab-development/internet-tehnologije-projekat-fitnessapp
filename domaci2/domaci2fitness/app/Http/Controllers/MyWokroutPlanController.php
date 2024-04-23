<?php

namespace App\Http\Controllers;

use App\Http\Resources\MyWorkoutPlanCollection;
use App\Http\Resources\MyWorkoutPlanResource;
use App\Models\MyWorkoutPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;

class MyWokroutPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexMembers(Request $request)
    {
        //prikaz samo rezervacija odredjenog ulogovanog korisnika
        $user = $request->user();
        $myWorkoutPlan = MyWorkoutPlan::where('member_id', $user->id)->get();
        return new MyWorkoutPlanCollection($myWorkoutPlan);
    }
    public function indexAdmin(Request $request)
    {
        //prikaz samo rezervacija odredjenog ulogovanog korisnika
        $myWorkoutPlan=MyWorkoutPlan::all();
        if(is_null($myWorkoutPlan)){
            return response()->json(['message'=>"Workout plans cannot be found",
            'status_code'=>404],404);
        }
        return new MyWorkoutPlanCollection($myWorkoutPlan);
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
            'member_id'=>'required|numeric',
            'workout_id'=>'required|numeric',
            'gym_id'=>'required|numeric',
            'date' => 'required|date|after_or_equal:today',
            'time' => 'required|date_format:H:i',
            'trainer_id'=>['required|numeric',
            function ($attribute, $value, $fail) use ($request) {
                $startDateTime = Carbon::createFromFormat('Y-m-d H:i', $request->date . ' ' . $request->time);
                $endDateTime = (clone $startDateTime)->addHour(); 

                //da li postoji rezervisan termin trenera u tom vremenskom razmaku
                $check = MyWorkoutPlan::where('trainer_id', $request->trainer_id)
                    ->where(function ($query) use ($startDateTime, $endDateTime) {
                        $query->whereBetween('date', [$startDateTime, $endDateTime])
                            ->orWhereBetween('time', [$startDateTime->format('H:i'), $endDateTime->format('H:i')]);
                    })->exists();

                         if ($check) {
                                 $fail('Trainer already has appointment at this date and time.');
                         }
                    },
                ]
        ]);
        if ($validation->fails()) {
            return response()->json(['error' => $validation->errors()], 400);
        }
        $user=$request->user();
        $request->merge(['member_id' => $user->id]);
        $myWorkoutPlan = MyWorkoutPlan::create($request->all());
        return new MyWorkoutPlanResource($myWorkoutPlan);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MyWorkoutPlan  $myWorkoutPlan
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new MyWorkoutPlanResource(MyWorkoutPlan::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MyWorkoutPlan  $myWorkoutPlan
     * @return \Illuminate\Http\Response
     */
    public function edit(MyWorkoutPlan $myWorkoutPlan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MyWorkoutPlan  $myWorkoutPlan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $myWorkoutPlan = MyWorkoutPlan::findOrFail($id);
        $user = $request->user();
        if ($myWorkoutPlan->member_id !== $user->id) {
            return response()->json(['error' => 'You cannot access this workout plan!'], 403);
        }
        $validation=Validator::make($request->all(),[
            'member_id'=>'required|numeric',
            'workout_id'=>'required|numeric',
            'gym_id'=>'required|numeric',
            'date' => 'date|after_or_equal:today',
            'time' => '',
            'trainer_id'=>'required|numeric',
        ]);
        if ($validation->fails()) {
            return response()->json(['Try again' => $validation->errors()], 400);
        }
        $myWorkoutPlan->update($request->all());
        return response()->json([
            'message' => 'Workout plan successfully updated!',
            'plan' => new MyWorkoutPlanResource($myWorkoutPlan)
        ], 200);
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MyWorkoutPlan  $myWorkoutPlan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $user = $request->user();
        $myWorkoutPlan = MyWorkoutPlan::findOrFail($id);
        if ($myWorkoutPlan->member_id !== $user->id) {
            return response()->json(['error' => 'You cannot delete plans that are not yours!'], 403);
        }
        $myWorkoutPlan->delete();
        return response()->json(['message' => 'Workout plan deleted!'], 200);
    }
}
