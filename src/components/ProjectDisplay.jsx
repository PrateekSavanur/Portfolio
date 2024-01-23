/* eslint-disable react/prop-types */
import ProjectItem from "./ProjectItem";
export default function ProjectDisplay({ projectList }) {
  return (
    <div>
      <div className="grid grid-cols-1 font-mono items-center sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10 pb-24 px-9 text-[15px] sm:text-[17px] md:text-[20px]">
        {projectList.map((projects) => {
          return <ProjectItem key={projects.name} projects={projects} />;
        })}
      </div>
    </div>
  );
}
