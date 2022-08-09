import { Toast } from 'flowbite-react';
import React from 'react';
import { useRef } from 'react';
import Loading from '../Loading/Loading';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const LogIn = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const handleSubmit = event => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(email, password)
      
      
   
}
if(user){
navigate(from, {replace: true});
}
const navigateRegister = event => {
navigate('/signup')
}
if(loading){
return <Loading></Loading>
 }
 const resetPassword = async () => {
  const email= emailRef.current.value;
  if(email){
  await sendPasswordResetEmail(email);
Toast('Sent email');
  }
  else{
    Toast('please enter your email')
  }

}
    return (
        
           <div className='bg-cyan-900'>
            
            <div class="hero min-h-screen " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <form onSubmit={handleSubmit}>
  <div class="hero-content flex-col lg:flex-row-reverse ">
    <div class="text-center lg:text-left">
     
    <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1660014546~exp=1660015146~hmac=1f8d8c66eb1a7d8aef385cda5ef8388914411928ec3783f707f493c636ac248b"></img>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm max-w-lg ">
      <div class="card-body ">
      <h1 className='text-center text-4xl text-white mb-5'> Log In With Your Account</h1>
      
        <div class="form-control">
          <label class="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input ref={emailRef} type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input ref={passwordRef} type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <p className='text-white'>Forgot Password?<button className='text-primary btn btn-link' onClick={resetPassword}>Reset Password</button></p>
          </label>
        </div>
        <div class="form-control mt-4">
          <button class="btn  bg-blue-500">Log in</button>
          <p className='mt-2 text-white'>New to BuyShopping ?  <Link to='/signup' className='text-error ' onClick={navigateRegister}>Please Register!!</Link></p>
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

export default LogIn;