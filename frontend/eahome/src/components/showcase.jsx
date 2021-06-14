import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const Showcase = () => {
    return (
    <div className="back-first">
        <div className="flex flex-col h-screen justify-center items-center space-y-3">
            <div className="font-bold text-3xl">
                <p className="line-1 anim-typewriter">Select your <span className="text-black">Interest</span></p>
            </div>
            <div className="space-x-6 space-y-4">
                <Link to="/yoga" className="bg-blue-600 hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-full">Yoga</Link>
                <Link to="/workout" className="bg-blue-600 hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-full">Workout</Link>
            </div>
        </div>
    </div>
    );
};

export default Showcase;