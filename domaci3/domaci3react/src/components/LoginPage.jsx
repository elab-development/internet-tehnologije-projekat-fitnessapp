import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function LoginPage({setToken}) {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate=useNavigate();
   const handleLogin=async(e)=>{
      e.preventDefault();
      try {
        const response = await axios.post('api/login', {email,password});
        sessionStorage.setItem('authToken', response.data.token)
        setToken(response.data.token);
        sessionStorage.setItem('role', response.data.user.role);
        console.log(response.data.user);
        const role = response.data.user.role;
        if (role == 'admin') {
          navigate('/');
          } else{
          navigate('/');
        }
        }catch(error){
          console.error('Error');
        }
        
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

                <form onSubmit={handleLogin}>
                  <p>Please login to your account</p>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form2Example11" 
                    className="form-control" value={email}
                      placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label className="form-label" htmlFor="form2Example11">Email</label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example22" value={password}
                     className="form-control" onChange={(e)=>setPassword(e.target.value)} required />
                    <label className="form-label" htmlFor="form2Example22">Password</label>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                      in</button>
                    <a className="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link  className="btn btn-outline-danger " to='/register'>Create new</Link>
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

export default LoginPage