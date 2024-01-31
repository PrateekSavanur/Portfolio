/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ProjectItem({ project, type }) {
  return (
    <div>
      <div className="project-container bg-cover bg-center h-64 relative overflow-hidden group rounded-sm">
        {/* Visible initially */}
        <h1 className="text-xl font-bold mb-2 opacity-100 transition duration-300 ease-in-out group-hover:opacity-0">
          {project.name}
        </h1>
        <img
          src={project.image}
          alt="image"
          className="object-cover w-full h-full"
        />
        {/* Details hidden initially, revealed on hover */}
        <div
          className={`project-details absolute bottom-0 left-0 right-0 p-4 bg-${project.color} bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out`}
        >
          <h1 className="text-xl font-bold mb-2">{project.name}</h1>
          <div className="mb-2">{project.category}</div>
          <div>
            <Link
              to={`/projects/${type}/${project.id}`}
              className="rounded-lg border-2 border-teal-800 text-teal-800 px-4 py-2"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
