import { useState, useCallback } from "react";
import GitHubCalendar from "react-github-calendar";
import { IconBrandGithub } from "@tabler/icons-react";
import { motion } from "framer-motion";

function GithubCalendar() {
  const [totalCount, setTotalCount] = useState(0);

  const processContributions = useCallback((contributions) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);
      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  const theme = {
    light: [
      "#ebedf0",  // Level 0 - light gray
      "#a8f0a2",  // Level 1 - bright pastel green
      "#70e97c",  // Level 2 - minty green
      "#42cc61",  // Level 3 - rich green
      "#21b94a"   // Level 4 - vibrant dark green
    ],
    dark: [
      "#161b22",  // Level 0 - background gray
      "#003d1f",  // Level 1
      "#006d32",  // Level 2
      "#26a641",  // Level 3
      "#39d353"   // Level 4
    ]
  };


  return (
    <section className="w-full lg:max-w-[60%] md:max-w-[60%] sm:max-w-[80%] px-4 sm:px-6 py-8 mx-auto">
      

      
      <h2 className="text-2xl sm:text-3xl font-bold font-maga mb-8">
        Github Contribution 
      </h2>

      <div className='overflow-auto px-10 bg-black p-4 rounded-4xl text-white'>
        <GitHubCalendar 
          username="rachitdhaka"
          colorScheme="dark"
          theme={theme}
        />
        
      </div>

      <motion.div className="mt-5 flex justify-center" >
          <a
            href="https://github.com/rachitdhaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="font-saans flex gap-3 hover:scale-110 duration-300">
              <p>Github</p>
              <IconBrandGithub stroke={1} />
            </div>
          </a>
        </motion.div>
    </section>
  );
}

export default GithubCalendar;
