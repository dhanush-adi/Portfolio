import "./App.css";
import image from './assets/Orginal.jpg';
import Footer from "./components/Footer";
import Social from "./components/Social";

function App() {
  return (
    <div className="bg-[#18181b] min-h-screen flex flex-col justify-between p-5 text-white">
      {/* Content Container */}
      <div className="flex justify-center w-full">
        {/* Main Div */}
        <div className="min-w-[50%] min-h-[90%] rounded-3xl p-5">
          {/* top bar , Name and Social Icons  */}
          <div className="text-xl text-[#9b9b9b]">
            I'm , <span className="font-bold text-3xl text-white">Rachit Dhaka </span>
          </div>

          {/* Intro Div */}
          <div className="pr-8 pl-8 pt-4 flex justify-between mt-5">
            <div className="min-w-[80%]">
              <ul className="list-disc pl-5 text-[#9b9b9b]">
                <li>Developer-Dsa-Designer</li>
                <li>Full Stack Developer </li>
                <li>Building Vartalaap Podacast</li>
                <li>Core Member of GeeksForGeeks SRM-RMP</li>
              </ul>
            </div>

            <div className="min-w-[20%] flex justify-center">
              {/* Image container with glow effect */}
              <div className="relative">
                {/* Primary glow layer */}
                <div className="absolute inset-0 bg-neutral-600 rounded-md blur-xl opacity-50"></div>
                {/* Secondary glow layer */}
                <div className="absolute inset-0 bg-white rounded-md blur-md opacity-40"></div>
                {/* The actual image */}
                <img src={image} alt="" className="relative w-[120px] h-[120px] rounded-md z-10" />
              </div>
            </div>
          </div>

          <div className="font-bold text-2xl mt-5">Projects</div>
          {/* Project Div */}
          <div className="pl-8 mt-3">
            <ol className="list-decimal pl-5 text-[#9b9b9b]">
              <li>
                <a
                  href="https://github.com/rachitdhaka/Paste-Application"
                  className="font-semibold text-white"
                >
                  Paste Application{" "}
                </a>
                - Notes Saving Application
              </li>
              <li>
                <a
                  href="https://devfolio.co/projects/orbitus-d287"
                  className="font-semibold text-white"
                >
                  Orbit Us -{" "}
                </a>
                Decentralised Drop servicing Platform
              </li>
              <li>
                <a
                  href="https://eth-link-vcpn.vercel.app/"
                  className="font-semibold text-white"
                >
                  Eth Link -{" "}
                </a>
                Decentralised Job Searching Platform
              </li>
            </ol>
          </div>

          {/* Education Div */}
          <div className="font-bold text-2xl mt-6">Education</div>
          <div className="pl-8 ">
            <ul className="list-disc pl-5 text-[#9b9b9b] mt-3">
              <li>
                SRM Institute of Science & Technology - Chennai
              </li>
            </ul>
          </div>
        </div>
      </div>


     

      {/* Footer */}
      <div className="mt-8 pb-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;