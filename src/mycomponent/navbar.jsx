import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="w-full h-24 flex shadow-md bg-white p-5 justify-between items-center">
           <div className="flex-1 font-extrabold text-black text-2xl">
               HerTechTrail
           </div>
           <div className="flex justify-evenly flex-1">
               <Link to="/">
                    <p  className="font-bold text-lg">Home</p>
               </Link>

               <Link to="/login">
                    <p className="font-bold text-lg">Login</p>
               </Link>

               <Link to="/signup">
                    <p className="font-bold text-lg">Sign up</p>
               </Link>
           </div>
        </div>
    )
}