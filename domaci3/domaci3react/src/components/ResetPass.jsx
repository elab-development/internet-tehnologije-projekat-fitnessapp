import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPass() {
   
        const[userData, setUserData]=useState({
            email:'',
            password:'',
            
          })
    
        useEffect(()=>{
            const query=new URLSearchParams(window.location.search);
            const email=query.get('email');
            
    
            setUserData({
                ...userData,
                email: email,
                
            })
        }, []);
    
        const[errors, setErrors]=useState();
    
        const navigate=useNavigate();
    
        function handleInput(e){
            setUserData(prevData => ({
              ...prevData,
              [e.target.name]: e.target.value
            }));
        }
        
        function handleReset(e){
            e.preventDefault();
            setErrors();
            axios.post('/api/reset', userData).then((response)=>{
             console.log(response.data);
             alert(response.data);
             navigate('/login');                
            }).catch((e)=>{
              console.log(e);
              if(e.response.status===400){
                alert(e.response.data);
                setErrors();
              }else{
              setErrors(e.response.data.message)
              }
            });
        } 
    
      return (
        <div className='register-page'>
          <div className='login-form-container'>
            <div className='register-header'>
              
              <h1 className='header-text'>Enter new password</h1>
            </div>
            <form className='register-form' onSubmit={handleReset}>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' className='form-control' onInput={handleInput} required />
                {errors ? <span className='error-message'>{errors}</span> : <></>}
              </div>
              <button type='submit' className='button'>Change Password</button>
            </form>
            </div>
          </div>
      );
}


export default ResetPass