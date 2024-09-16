import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { auth , provider} from "../firebase";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword , signInWithPopup} from "firebase/auth";
import image from '../assets/image.svg'

function Signin() {

  // const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup , setisSignup] = useState(false);

  const SigninUser = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("sign in successfully");
      navigation("/Expensetracker");
    }
    catch (err) {
      console.log("Some error in sign in", err);
    }
  };

  const PopupSignin = async() => {
    try {
      const res = await signInWithPopup(auth , provider);
      console.log("sign in successfully");
      navigation("/Expensetracker");
    } catch (error) {
      console.log("Some error in sign in", err);
    }
  } 
  const createUser = async() => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res);
        navigation("/Expensetracker");
      }
    catch (err) {
        console.log("Some error", err);
      }
};

  return (
    <>
     <div className='bg-gray-100 flex items-center justify-center min-h-screen'>
        <div className='bg-violet-200 flex rounded-md shadow-lg max-w-3xl px-16'>
          <div className='w-1/2 py-8 ml-3'>
          <h3 className='text-lg font-bold ml-14 mb-2 text-gray-700'>{isSignup ? "Signup User" : "Login User"}</h3>
            <input
              type='email'
              placeholder='Enter Email'
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
              className='rounded-xl black my-3 pl-3 pr-2 py-2 text-sm'>
            </input>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='rounded-xl black my-3 pl-3 pr-2 py-2 text-sm'
            ></input>
            <br></br>

            <button onClick={isSignup ? createUser : SigninUser} className='bg-blue-900 text-white rounded-xl px-20 py-2 my-3 hover:scale-105'>{isSignup ? "Signup" : "Login"}</button>

            <div className='flex mt-6'>
              <p className='text-xs mt-1'>{isSignup ? "Already have an account?" : "Don't have an account?"}</p>
              <button className='bg-blue-900 text-white text-sm rounded-xl hover:scale-105 mx-1 px-3 py-1' onClick={() => setisSignup(!isSignup)}>{isSignup ? "Login" : "Signup"}</button>
            </div>

            <div className='flex items-center mx-16 mt-6'>
              <p className='mx-6 font-bold text-gray-700'>Or</p>
            </div>

            <button onClick={PopupSignin} className='bg-blue-900 text-white text-sm  rounded-xl px-6 py-3 mx-1 mt-8 hover:scale-105'>Continue with Google</button>
          </div>
          <div className='w-1/2'>
            <img src={image} alt='login image' className='mt-24 rounded-xl hidden md:block'/>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin
