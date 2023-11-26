import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-500 dark:text-slate-100">
        Projects.
      </h2>
      <div>
        <ProjectCard
          projectImage="/images/Project-1.png"
          projectName="Portfolio Website"
          projectDescription="I have used Next.js, Tailwind CSS, TypeScript, and Vercel for deployment."
          projectLink="https://zahooronly.vercel.app"
        />
      </div>
    </div>
  );
};
export default Portfolio;
