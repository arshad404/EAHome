import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Yoga = () => {
    return (
        <div className="sign-landing">
            {/* <div>
                <Link to="/" className="px-8"><FaArrowLeft /></Link>
            </div> */}

            <div className="flex flex-col h-screen justify-center items-center space-y-3">
                <Link to="/" className="bg-blue-600 hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-full"><FaArrowLeft /></Link>
                <div className="space-x-12 space-y-4">
                    <Link to="/signin" className="bg-blue-600 hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-full">SignIN</Link>
                    <Link to="/signup" className="bg-blue-600 hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-full">SignUP</Link>
                </div>
            </div>
        </div>
    );
    };

export default Yoga;