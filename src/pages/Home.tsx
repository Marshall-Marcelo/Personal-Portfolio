import { TechStackSection } from "@/components/TechStackSection";
import ProjectCard from "@/components/ProjectCard";
import { type ProjectCardProps } from "@/components/ProjectCard";
import express_logo from "@/assets/express.webp";
import javascript_logo from "@/assets/javascript.webp";
import react_logo from "@/assets/react.webp";
import sql_logo from "@/assets/sql.webp";
import typescript_logo from "@/assets/typescript.webp";
import git_logo from "@/assets/git.webp";
import profile from "@/assets/profile.webp";

const Home = () => {
  const programmingLanguages: string[] = [javascript_logo, typescript_logo];
  const frameworks: string[] = [react_logo, express_logo];
  const database: string[] = [sql_logo];
  const tools: string[] = [git_logo];
  const projectDetails: ProjectCardProps[] = [
    {
      projectName: "Trainlytics (Solo Project - Under Development)",
      projectDescription: "A web application that allows users to create and track their workouts for analytics.",
      isPrivate: true,
    },
    {
      projectName: "StudyMates (Group Project)",
      projectUrl: "https://github.com/GiovanniL30/study-mates",
      liveUrl: "https://study-mates.vercel.app/",
      projectDescription: "Frontend only Desktop-focused web application that simulates LMS quiz answering and quiz answer display after submission.",
    },
    {
      projectName: "IT Capstone for SLU CCA (Group Project)",
      isPrivate: true,
      projectDescription: "Show and Ticket management system for SLU CCA",
    },
    {
      projectName: "Alumnix (Group Project)",
      projectUrl: "https://gitlab.com/2234078/9473-it312-alumniapp/",
      isBroken: true,
      projectDescription:
        "A school project that aims to provide a social media platform for SLU Alumni. This was developed during our 2nd year and is now unmaintained (DB got erased and API keys expired)",
    },
  ];

  return (
    <main className="grid place-items-center h-dvh my-5">
      <section className="flex flex-col gap-4 p-4 max-w-106.25 md:max-w-175">
        <section className="flex flex-col gap-2 items-center md:flex-row">
          <div className="p-1 w-30 border rounded-full">
            <img className="rounded-full" src={profile} alt="Marshall Profile" />
          </div>
          <h1 className="text-center text-2xl">Hello! My name is Marshall and I am an aspring Web Developer!</h1>
        </section>
        <section className="flex flex-col gap-1">
          <h2 className="text-xl">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-1">
            <TechStackSection sectionName={"Programming Languages"} images={programmingLanguages} />
            <TechStackSection sectionName={"Frameworks"} images={frameworks} />
            <TechStackSection sectionName={"Database"} images={database} />
            <TechStackSection sectionName={"Tools"} images={tools} />
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xl">Projects</h2>
          {projectDetails.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                projectName={project.projectName}
                projectUrl={project.projectUrl}
                projectDescription={project.projectDescription}
                liveUrl={project.liveUrl}
                isPrivate={project.isPrivate}
                isBroken={project.isBroken}
              />
            );
          })}
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xl">Contact Me</h2>
          <h3 className="text-md font-light">Email Address: marshallpersonal26@gmail.com</h3>
          <h3 className="text-md font-light">Contact Number: 0947-296-8946</h3>
          <h3 className="text-md font-light">
            Github:{" "}
            <a className="text-sm text-blue-400 underline" href="https://www.github.com/Marshall-Marcelo" target="_blank" rel="noopener noreferrer">
              www.github.com/Marshall-Marcelo
            </a>
          </h3>
        </section>
      </section>
    </main>
  );
};

export default Home;
