import React from "react";
import { NavLink } from "react-router";
const FooterV1 = () => {
  return (
    <div>
      <div className="text-[10px] text-[#9b9b9b] flex justify-center  mb-2 underline font-bold">

        
        <NavLink to="/"
        className= "duration-300"
        >
            Version 2
        </NavLink>
      </div>
      <div className="text-[10px] text-[#9b9b9b] flex justify-center ">
        Made with ❤️ by Rachit Dhaka
      </div>
    </div>
  );
};
export default FooterV1;
