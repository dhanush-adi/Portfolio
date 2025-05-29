import React from "react";
import FooterV0 from "./FooterV0";
import dp from "../assets/Images/Orginal.jpg";

const V0 = () => {
  return (
    <div className="w-full h-screen bg-neutral-900">



      {/* main section  */}
      <div className="max-w-4xl mx-auto bg-neutral-950- p-5 flex justify-between  px-5 ">
        {/* left side */}
        <div className="max-w-[60%]">
          <h1 className="text-white tracking-tighter text-3xl font-semibold">
            I'm Rachit Dhaka
          </h1>

          

          <p className="text-white text-left py-3">
            I’m a passionate developer who loves solving real-world problems through efficient algorithms and intuitive design. Whether it’s crafting seamless user experiences or optimizing performance under the hood, I bring both logic and creativity to the table
          </p>
        </div>


        {/* right side  */}
        <div className="max-w-[20%] flex ">
          <img src={dp} alt="dp" className="w-30 h-30 rounded-full" />
        </div> 

      </div>


      {/* Projects */}


    </div>
  );
};

export default V0;
