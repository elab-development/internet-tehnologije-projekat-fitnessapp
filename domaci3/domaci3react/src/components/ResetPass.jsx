import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
function ResetPass() {
  const[userData, setUserData]=useState({
    email:'',
    password:'',
    token:''
  })

useEffect(()=>{
    const query=new URLSearchParams(window.location.search);
    const email=query.get('email');
    const token=query.get('token');

    setUserData({
        ...userData,
        email: email,
        token: token
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
    axios.post('api/reset', userData).then((response)=>{
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
      <section className="h-100 gradient-form" style={{backgroundColor: "white"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
  
                  <div className="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style={{width: 185 + "px"}} alt="logo"/>
                    <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                  </div>
  
                  <form onSubmit={handleReset}>
                   
  
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form2Example11" 
                      className="form-control" 
                        placeholder="Password" onInput={handleInput} required/>
                      <label className="form-label" htmlFor="form2Example11">Enter new password</label>
                    </div>
                    <button type='submit' className='btn btn-success'>Change Password</button>

  
                   
  
                   
  
                  </form>
  
                </div>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default ResetPass