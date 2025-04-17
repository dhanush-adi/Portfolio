import React from "react";
import Experience from "./Experience";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className=" max-w-[40%] mx-auto">
        {/* heading */}
        <div className="font-maga text-4xl py-4 font-bold">Information</div>

        {/* line  */}
        <hr className="border-gray-200 my-1" />

        {/* Mera Intro */}
        <div className="mb-8">
          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
            Hey there, I'm Rachit Dhaka — a builder at heart with a passion for
            solving real-world problems through tech. I love creating things
            from the ground up, whether it’s developing my own products or
            collaborating with forward-thinking teams to bring impactful ideas
            to life.
          </p>

          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
            Most recently, I’ve been diving deep into the Web3 space,
            participating in global hackathons like ETHIndia, ETHNewDelhi, and
            Unfold, and building decentralized platforms that aim to reshape how
            people connect, learn, and grow.
          </p>

          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
          Alongside that, I’ve led multiple
            tech events and hackathons at SRM, where I also co-founded the first
            official GeeksforGeeks Student Chapter. From mentoring platforms to
            blockchain-based verification systems, my work sits at the
            intersection of design, engineering, and purpose. Whether it’s
            front-end dev, product thinking, or community building — my goal is
            always the same: create meaningful experiences that people genuinely
            enjoy using.
            
          </p>



          <p className="font-sans py-4" style={{ wordSpacing: "0.2rem" }}>
            If you'd like to connect or collaborate on something awesome, feel
            free to reach out:
          </p>
          <span className="font-bold font-saans underline ">
            <a href="">rachitdhaka29@gmail.com</a>
          </span>
        </div>

        {/* line  */}
        <hr className="border-gray-200 my-1" />

        {/* heading */}
        <div className="font-maga text-3xl py-4 font-bold">Experience</div>

        {/* experience wala section */}
        <div>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default About;
