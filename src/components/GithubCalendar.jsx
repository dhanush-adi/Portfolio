import { useState, useCallback } from "react";
import GitHubCalendar from "react-github-calendar";
import { IconBrandGithub } from "@tabler/icons-react";

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

  return (
    <section className="w-full lg:max-w-[60%] md:max-w-[60%] sm:max-w-[80%] px-4 sm:px-6 py-8 mx-auto">
      <div>
        <h4 className="text-2xl sm:text-3xl font-bold mb-2 font-maga pb-4">
          GitHub Contribution Calendar
        </h4>
        <div className="bg-white p-4 flex flex-col justify-self-center rounded-xl shadow-md">
          <GitHubCalendar
            username="rachitdhaka"
            transformData={processContributions}
            totalCount={totalCount}
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <a
          href="https://github.com/rachitdhaka"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <div className="font-saans flex gap-3">
            <p>Github</p>
            <IconBrandGithub stroke={1} />
          </div>
        </a>
      </div>
    </section>
  );
}

export default GithubCalendar;
