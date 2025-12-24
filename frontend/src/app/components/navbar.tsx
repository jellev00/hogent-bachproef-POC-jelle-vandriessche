import React from 'react';
import Image from "next/image";
import LOGO from "../../../public/Logo.png";

const navbar = () => {
  return (
    <div className="sticky top-0 navbar bg-base-100 shadow-sm rounded-2xl">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-2xl mt-5 w-52 p-2 shadow text-base-400">
                <li><a>How It Works</a></li>
                <li><a>Features</a></li>
                <li><a>Roadmap</a></li>
                <li className="p-1"><a className="btn bg-base-100 text-secondary border-base-400">Sign In</a></li>
                <li className="p-1"><a className="btn bg-primary text-primary-content border-none">Get Started</a></li>
            </ul>
            </div>
            <a className="px-1 btn btn-ghost text-xl font-bold text-secondary">
                <Image src={LOGO} alt={"DepGuard AI Logo"}/>
                DepGuard <span className="text-primary">AI</span>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base-400">
                <li><a>How It Works</a></li>
                <li><a>Features</a></li>
                <li><a>Roadmap</a></li>
            </ul>
        </div>
        <div className="navbar-end hidden lg:flex lg:gap-2">
            <a className="btn bg-base-100 text-secondary border-base-400">Sign In</a>
            <a className="btn bg-primary text-primary-content border-none">Get Started</a>
        </div>
    </div>
  )
}

export default navbar