<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GymResource extends JsonResource
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
        'name'=>$this->resource->name,
        'street'=>$this->resource->street,
        'street_number'=>$this->resource->street_number,
        'city'=>$this->resource->city
        ];
    }
}
