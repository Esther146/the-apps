import { React, useState } from "react";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config';

export default function Forgotpassword() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loading, setLoading] = useState("")

    const login = async () => {
      try {
        setLoading(true);
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,  
            loginPassword);
        console.log(user);
        setLoading(false)
      } catch (error) {
          console.log(error.message);
      }
    };

    return (
        <div className="w-full h-auto flex justify-center items-center bg-gray-200">
            <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
                <h3 className="text-black text-2xl font-bold text-center">HerTech</h3>
                <p className="text-gray-600 font-light text-md mt-2 text-center">Welcome back!</p>

                <input type="email" placeholder="example@gmail.com" 
                    onChange={
                        (event) => {setLoginEmail(event.target.value);}
                    }
                    className="w-full h-10 rounded-lg border-2 px-6 mt-4 border-gray-500" 
                />

                <input type="password" placeholder="password" 
                    onChange={
                        (event) => {setLoginPassword(event.target.value);}
                    }
                    className="w-full h-10 rounded-lg border-2 px-6 mt-4 border-gray-500" 
                />

                <button onClick={login} className="w-full h-12 rounded-lg bg-black text-white font-bold text-md mt-5">
                    {!loading && 'Reset Password'}
                    {loading && 'loading'}
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