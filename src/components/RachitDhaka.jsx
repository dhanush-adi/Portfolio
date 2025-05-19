import { useState } from "react";

const RachitDhaka = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-[60px] w-fit overflow-hidden cursor-pointer text-5xl font-bold text-black"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Old Word */}
      <span
        className={`absolute transition-transform duration-300 ease-in-out ${
          hovered ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        rachit DHaka
      </span>

      {/* New Word */}
      <span
        className={`absolute transition-transform duration-300 ease-in-out ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        RD
      </span>
    </div>
  );
};

export default RachitDhaka;
