import React from 'react'
import { useState } from 'react'
import axios from 'axios';
function RegisterPage() {
    const [userData,setUserData]=useState({
        "name":"",
        "email":"",
        "password":""
    });
    function handleInput(e){
        let newUser=userData;
        newUser[e.target.name]=e.target.value;
        //console.log(newUser);
        setUserData(newUser);
    }
    function handleRegister(e){
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/register",userData).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
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
  
                  <form onSubmit={handleRegister}>
                    <p>Register</p>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="name" id="form2Example11" 
                      className="form-control" name="name"
                        placeholder="Username" onInput={handleInput} />
                      <label className="form-label" htmlFor="form2Example11">Username</label>
                    </div>
  
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="form2Example11" 
                      className="form-control" name="email"
                        placeholder="Phone number or email address" onInput={handleInput} />
                      <label className="form-label" htmlFor="form2Example11">Email</label>
                    </div>
  
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form2Example22" name="password"
                       className="form-control" onInput={handleInput} />
                      <label className="form-label" htmlFor="form2Example22">Password</label>
                    </div>
  
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" 
                      type="submit">Register</button>
                    </div>
  
                  </form>
  
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than a gym</h4>
                  <p className="small mb-0">From self-directed workouts to personal training and group exercise 
                  classes, we have something for everyone.</p>
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

export default RegisterPage