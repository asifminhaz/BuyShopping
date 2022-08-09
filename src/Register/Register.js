import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const navigateLogin = event => {
                navigate('/login')
      }
      const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        createUserWithEmailAndPassword(email, password)
}
if(user){
    navigate('/home')
}
    return (
        <div className='bg-cyan-900'>
          
            <div class="hero min-h-screen " >
            <form onSubmit={handleRegister}>
  <div class="hero-content flex-col lg:flex-row-reverse " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <div class="text-center lg:text-left" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
     
    <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?t=st=1660014546~exp=1660015146~hmac=ed969d413719bf37b45383dac7977bc662eb9ff3a66b2367ba55343e326ed513"></img>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm max-w-lg ">
      <div class="card-body">
      <h1 className='text-center text-4xl text-white'>Please Create an Account</h1>
        <div class="form-control">
          <label class="label">
            <span className="label-text  text-white">Name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input ref={emailRef} type="text" placeholder="email" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input ref={passwordRef} type="text" placeholder="password" class="input input-bordered"required />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-blue-500">Register</button>
          <p className='mt-2 text-white'>Already have an Account?  <Link to='/login' className='text-error ' onClick={navigateLogin}>Please Sign in!!</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    
  </div>
  </form>
</div>
        </div>
    );
};

export default Register;