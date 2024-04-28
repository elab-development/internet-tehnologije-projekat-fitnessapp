<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator=Validator::make($request->all(),[
            'name' => 'required|string|max:100',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|regex:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"'
            //pass mora da sadrzi bar jedno malo slovo, jedno veliko slovo, broj i specijalni znak!!!
        ]);
        
        if ($validator->fails()){
            return response()->json($validator->errors());
        }
    
         $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        ]);
        
        $token = $user->createToken('authToken')->plainTextToken;
        return response()->json(['data'=>$user,'token'=>$token,'token_type'=>'Bearer']);
    }
    public function login(Request $request){
        if(!Auth::attempt($request->only('email', 'password'))){
            return response()->json(['message'=>'Invalid parameters'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([ 'message'=>'Login succesfull', 'token' => $token,'user'=>$user], 200);
    }
    public function logout(Request $request)
    {
        
        Session::flush(); 
        return response()->json(['message'=>'User successfully signed out!'],200);
    }
}
