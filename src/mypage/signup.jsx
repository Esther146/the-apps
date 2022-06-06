import React from "react";
import { Link } from 'react-router-dom'
import { FaGoogle, FaLinkedin} from 'react-icons/fa'

export default function Signup() {
    return (
        <div className="w-full h-auto flex justify-center items-center bg-gray-200">
        <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
            <h3 className="text-black text-2xl font-bold text-center">
                HerTech
            </h3>
            <p className="text-gray-600 font-light text-md mt-2 text-center">
                You're 1-click away from creating an account
            </p>

            <input type="email" placeholder="example@gmail.com" className="w-full h-10 rounded-lg border-2 px-6 mt-4 border-gray-500" />

            <input type="password" placeholder="password" className="w-full h-10 rounded-lg border-2 px-6 mt-4 border-gray-500" />

            <button className="w-full h-12 rounded-lg bg-black text-white font-bold text-md mt-5">
                Create account
            </button>

            <p className="text-2xl font-light text-center mt-6 text-gray-600">
                OR
            </p>

            <p className=" w-full pt-2 h-12 mt-5 px-10 justify-center rounded-lg flex text-center bg-gray-300 text-black">
                <FaGoogle className="text-orange-800 text-4xl" /> 
                <span className="px-2 pt-2 text-center">Continue with Google</span>
            </p>

            <p className=" w-full h-12 mt-5 pt-2 justify-center rounded-lg flex bg-gray-300 text-black">
                <FaLinkedin className="text-blue-700 text-4xl" /> 
                <span className="px-2 pt-2 text-center">Continue with LinkedIn</span>
            </p>

            <p className="text-center mt-6 font-medium text-gray-700">Already have an account? 
                <Link to="/login">
                <span className="font-bold text-black"> Login</span>
                </Link>
            </p>
        </div>
    </div>
    )
}