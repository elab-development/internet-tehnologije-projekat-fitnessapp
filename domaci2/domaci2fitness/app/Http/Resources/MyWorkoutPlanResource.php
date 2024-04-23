<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MyWorkoutPlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->resource->id,
            'date'=>$this->resource->date,
            'time'=>$this->resource->time,
            'member'=>new UserResource($this->member),
            'trainer'=>new TrainerResource($this->trainer),
            'gym'=>new GymResource($this->gym),
            'workout'=> new WorkoutResource($this->workout),
           
        ];
    }
}
