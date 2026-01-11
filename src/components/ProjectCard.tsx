export interface ProjectCardProps {
  projectName: string;
  liveUrl?: string;
  projectUrl?: string;
  projectDescription: string;
  isPrivate?: boolean;
  isBroken?: boolean;
}

const ProjectCard = ({ projectName, liveUrl, projectUrl, projectDescription, isPrivate, isBroken }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-md font-light bg-gray-200 px-1 py-0.5 rounded">{projectName}</h3>
      <p className="text-md font-extralight px-1 py-0.5">{projectDescription}</p>
      <span className="text-md font-extralight px-1 py-0.5">
        Project Url: {""}
        {isPrivate ? (
          <span className="text-sm"> This project is private</span>
        ) : (
          <a className="text-sm text-blue-400 underline" href={projectUrl} target="_blank" rel="noopener noreferrer">
            {projectUrl}
          </a>
        )}
      </span>
      <span className="text-md font-extralight px-1 py-0.5">
        Live Url: {""}
        {isPrivate || isBroken ? (
          <span className="text-sm">
            {isPrivate && "This project is private"}
            {isBroken && "This project is unmaintained"}
          </span>
        ) : (
          <a className="text-sm text-blue-400 underline" href={liveUrl} target="_blank" rel="noopener noreferrer">
            {liveUrl}
          </a>
        )}
      </span>
    </div>
  );
};

export default ProjectCard;
