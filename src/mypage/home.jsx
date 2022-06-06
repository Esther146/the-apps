import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full h-auto flex justify-center items-center">
            <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col mt-16">
                <h1 className="text-2xl font-bold text-center text-gray-900">
                    HerTechTrail Capstone project
                </h1>
                <p className="text-center mt-5 text-gray-700 text-lg">
                    Welcome to my first react app page!
                </p>

                <p className="text-justify mt-10 text-black text-xl">
                    Note: this page is still under construction
                    kindly use the navigation tabs above to move around the page
                </p>

                <p className="text-center mt-10 text-gray-600 text-lg">
                    Thank you!
                </p>

                <p className="text-center mt-6 font-medium text-gray-700">Don't have an account? 
                    <Link to="/signup">
                    <span className="font-bold text-black"> Sign up</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}