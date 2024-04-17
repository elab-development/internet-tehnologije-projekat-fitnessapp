<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class WorkoutCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

     public static $wrap='workouts';
    public function toArray($request)
    {
        return [
            'id'=>$this->resource->id,
            'duration'=>$this->resource->duration,
            'description'=>$this->resource->description,
            
            
            'trainer'=>new TrainerResource($this->resource->trainer),
            'user'=>new UserResource($this->resource->user),
            'workoutType'=>new WorkoutTypeResource($this->resource->workoutType)
        ];
    }
}
