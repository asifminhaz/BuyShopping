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
        <div className='bg-amber-200'>
          
            <div class="hero min-h-screen " >
            <form onSubmit={handleRegister}>
  <div class="hero-content flex-col lg:flex-row-reverse " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <div class="text-center lg:text-left" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
     
    <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1660074773~exp=1660075373~hmac=e46827d52f595a4905655bd043425765fc2f56d4cde9e125a99beea6192fc385"></img>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm max-w-lg ">
      <div class="card-body">
      <h1 className='text-center text-4xl text-black'>Please Create an Account</h1>
        <div class="form-control">
          <label class="label">
            <span className="label-text  text-black">Name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input ref={emailRef} type="text" placeholder="email" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input ref={passwordRef} type="text" placeholder="password" class="input input-bordered"required />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-black text-white">Register</button>
          <p className='mt-2 text-black'>Already have an Account?  <Link to='/login' className='text-error ' onClick={navigateLogin}>Please Sign in!!</Link></p>
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