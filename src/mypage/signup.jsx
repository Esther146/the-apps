import React from "react";
import { Link } from 'react-router-dom'
import { FaGoogle, FaLinkedin} from 'react-icons/fa'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from './firebase-config'
import { useState } from 'react';


export default function Signup() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loading, setLoading] = useState("")

    const register = async () => {
      try {
        setLoading(true);
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,  
            registerPassword);
        console.log(user);
        setLoading(false);
      } catch (error) {
          console.log(error.message);
      }
    };

    return (
        <div className="w-full h-auto flex justify-center items-center bg-gray-200">
        <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
            <h3 className="text-black text-2xl font-bold text-center">
                HerTech
            </h3>
            <p className="text-gray-600 font-light text-md mt-2 text-center">
                You're 1-click away from creating an account
            </p>

            <input type="email" placeholder="example@gmail.com" 
                onChange={
                    (event) => {setRegisterEmail(event.target.value);}
                }
                className="w-full h-10 rounded-lg border-2 px-6 mt-4 border-gray-500" 
            />

            <input type="password" placeholder="password" 
                onChange={
                    (event) => {setRegisterPassword(event.target.value);}
                }
                className="w-full h-10 rounded-lg border-2 px-6 mt-4 border-gray-500" 
            />

            <button onClick={register} className="w-full h-12 rounded-lg bg-black text-white font-bold text-md mt-5">
                {!loading && 'Create account'}
                {loading && 'loading'}
            </button>

            <p className="text-2xl font-light text-center mt-6 text-gray-600">
                OR
            </p>

            
            <button onClick={signInWithGoogle} className="w-full pt-1 h-12 mt-5 px-10 justify-center rounded-lg flex text-center bg-gray-300 text-black">
                <FaGoogle className="text-orange-800 text-4xl" /> 
                <span className="px-2 pt-1 text-center">Continue with Google</span>
            </button>    
        

            <button className=" w-full h-12 mt-5 pt-2 justify-center rounded-lg flex bg-gray-300 text-black">
                <FaLinkedin className="text-blue-700 text-4xl" /> 
                <span className="px-2 pt-1 text-center">Continue with LinkedIn</span>
            </button>

            <p className="text-center mt-6 font-medium text-gray-700">Already have an account? 
                <Link to="/login">
                <span className="font-bold text-black"> Login</span>
                </Link>
            </p>
        </div>
    </div>
    )
}