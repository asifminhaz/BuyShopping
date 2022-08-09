import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
  

     if(loading){
  return <Loading></Loading>
     }

    if (error) {
    errorElement = <div>
     <p className='text-danger'>Error: {error?.message}</p>
     </div>
    }

    if (user) {
        navigate('/home');
    }
    return (
        
            <div>
        <div className="divider text-white">OR</div>
          {errorElement}
         
          <div className=''>
              <button

                  onClick={() => signInWithGoogle()}
                  className='btn bg-blue-700 w-full d-block mx-auto'>
                   
                   <img className=' w-15 h-8' src ='https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_960_720.png'></img> 
                   <p>Google Sign in</p>
              </button>    
              </div>
        </div> 
       
    );
};

export default SocialLogin;