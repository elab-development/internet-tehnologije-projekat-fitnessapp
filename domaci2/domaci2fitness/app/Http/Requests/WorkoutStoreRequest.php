<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorkoutStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules():array
    {
        if(request()->isMethod('post')){
            return [
                'duration'=>'required|max:255',
                'description'=>'required|string|max:255',
                'price'=>'required|numeric',
                'title'=>'required|string',
               
                'image'=>'required|image|mimes:jpg,png,jpeg,gif'
            ];
        }else{
            return [
                'duration'=>'required|max:255',
                'description'=>'required|string|max:255',
                'price'=>'required|numeric',
                'title'=>'required|string',
                
                'image'=>'nullable|image|mimes:jpg,png,jpeg,gif'
            ];
        }
    }
    public function messages()
    {
        if(request()->isMethod('post')){
            return [
                'duration.required'=>'Duration is required',
                'description.required'=>'Description is required',
                'price.required'=>'Price is required',
                'title.required'=>'Title is required',
                
                'image.required'=>'Image is required'
            ];
        }else{
            return [
                'duration.required'=>'Duration is required',
                'description.required'=>'Description is required',
                'price.required'=>'Price is required',
                'title.required'=>'Title is required',
                
            ];
        }
    }
}
