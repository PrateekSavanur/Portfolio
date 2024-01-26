/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";

function ProjectDetails({ projectList }) {
  const { projectId } = useParams(); // Get the projectId and type from the URL params

  // Filter the projects based on the type

  // Find the project with the matching ID
  const project = projectList.find(
    (project) => project.id === parseInt(projectId)
  );

  if (!project) {
    return (
      <div className="grid items-center justify-center bg-white">
        <div>Project not found</div>
        <div>Go back👇</div>
        <div className="flex justify-start rounded-lg border-2 border-teal-400 text-teal-400 px-3 py-1 w-28 text-[10px] sm:text-[15px]  md:text-[20px]">
          <Link className="p-2" to="/projects">
            Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-[80vh] bg-slate-300">
      <div className="text-slate-800 max-w-lg p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-4">Project Details</h1>
        <div className="mb-4 flex justify-center">
          <img
            src={project.image}
            alt={project.name}
            className="w-2/3 h-auto rounded-lg"
          />
        </div>
        <h2 className="text-lg text-center font-semibold mb-2">
          Name: {project.name}
        </h2>
        <h3 className="text-lg text-center font-semibold mb-2">
          Skills: {project.skills}
        </h3>
        <div className="text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
