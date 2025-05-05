import React from "react";
import { NavLink } from "react-router";
const FooterV1 = () => {
  return (
    <div>
      <div className="text-[10px] text-[#9b9b9b] flex justify-center  mb-2 underline font-bold">
        <NavLink to="/version0"
        className= "duration-300"
        target="_blank">
            v0
        </NavLink>
      </div>
      <div className="text-[10px] text-[#9b9b9b] flex justify-center ">
        Made with ❤️ by Sargam Poudel
      </div>
    </div>
  );
};
export default FooterV1;
