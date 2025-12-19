import React from 'react';
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Image from "next/image";
import DASHBOARD from "../../public/Dashboard.svg";
import What from "./components/What";

const page = () => {
  return (
    <div className="py-8 w-[80%] mx-auto">
      <Navbar />
      <Hero />
      <Image src={DASHBOARD} alt={"DepGuard AI Logo"} className="mt-14 shadow-2xl rounded-2xl"/>
      <div className="divider my-14"></div>
      <What />
    </div>
  )
}

export default page