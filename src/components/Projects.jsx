import ProjectDisplay from "./ProjectDisplay";
import { FullStackprojectList } from "../helpers/FullStackProjects";
import { FrontendProjects } from "../helpers/FrontendProjects";

export default function Projects() {
  return (
    <div className="bg-slate-300 py-9">
      <div className="grid">
        <h1 className="font-serif font-bold text-center text-[20px] sm:text-[30px]  md:text-[40px]">
          FullStack/Blockchain projects
        </h1>
        <ProjectDisplay projectList={FullStackprojectList} type="fullstack" />
      </div>
      <div className="grid">
        <h1 className="font-serif font-bold text-center text-[20px] sm:text-[30px]  md:text-[40px]">
          Frontend
        </h1>
        <ProjectDisplay projectList={FrontendProjects} type="frontend" />
      </div>
    </div>
  );
}
