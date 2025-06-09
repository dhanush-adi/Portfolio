import React from "react";
import GitHubCalendar from 'react-github-calendar';


const V0Github = () => {
  const theme = {
    light: [
      "#ebedf0", // Level 0
      "#a8f0a2", // Level 1
      "#70e97c", // Level 2
      "#42cc61", // Level 3
      "#21b94a", // Level 4
    ],
    dark: [
      "#161b22", // Level 0 - background gray
      "#003d1f", // Level 1
      "#006d32", // Level 2
      "#26a641", // Level 3
      "#39d353", // Level 4
    ],
  };
  return (
    <section>
        <p className="mb-10 text-black text-2xl">Github Contribution</p>

      <div className="overflow-auto px-10 bg-black p-4 rounded-3xl text-white">
        <GitHubCalendar
          username="rachitdhaka"
          colorScheme="dark"
          theme={theme}
        />
        <p className="mt-4 text-center text-sm">@rachitdhaka</p>
      </div>
    </section>
    
      

  );
};

export default V0Github;
