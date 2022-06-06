import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full h-auto flex justify-center items-center bg-gray-200">
            <div className="w-96 h-auto bg-white shadow-md rounded-xl p-6 flex flex-col npmmt-16">

                <h1 className="text-2xl font-bold m-6 text-center text-black">
                    HerTechTrail Capstone project
                </h1>

                <p className="text-center text-lg font-bold text-gray-800 pt-5">
                    Welcome to my first react app page!
                </p>

                <p className=" font-bold text-xl text-justify text-gray-900 pt-5">
                    Note: This project is still under construction,
                     use the nav tabs above to navigate around the pages.
                </p>
                <p className="text-center font-bold text-gray-700 pt-5">
                    Thank you!
                </p>
            </div>
        </div>
    )
}