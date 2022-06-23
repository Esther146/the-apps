import{ React,  useState } from "react";
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config'


export default function Login() {

    const [enterinEmail, setEnterinEmail] = useState("");
    const [enterinPassword, setEnterinPassword] = useState("");
    const [loading, setLoading] = useState("")

    const enterin = async () => {
      try {
        setLoading(true);
        const user = await signInWithEmailAndPassword(
            auth,
            enterinEmail,  
            enterinPassword);
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
                        (event) => {setEnterinEmail(event.target.value);}
                    }
                    className="w-full h-10 rounded-lg border-2 px-6 mt-4 border-gray-500" 
                />

                <input type="password" placeholder="password"
                    onChange={
                        (event) => {setEnterinPassword(event.target.value);}
                    }
                    className="w-full h-10 rounded-lg border-2 px-6 mt-4 border-gray-500" 
                />

                <button onClick={enterin} className="w-full h-12 rounded-lg bg-black text-white font-bold text-md mt-5">
                    {!loading && 'Login to HerTech'}
                    {loading && 'loading'}
                </button>

                <p className="text-2xl font-light text-center mt-6 text-gray-600">OR</p>

                <p className="text-center mt-6 font-medium text-gray-700">Don't have an account? 
                    <Link to="/signup">
                    <span className="font-bold text-black"> Sign up</span>
                    </Link>
                </p>
                <Link to="/forgotpassword">
                <p className="text-center mt-5 font-medium text-gray-800">Forgot Password</p>
                </Link>
            </div>
        </div>
    )
}