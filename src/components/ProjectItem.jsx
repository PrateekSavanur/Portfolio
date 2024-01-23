/* eslint-disable react/prop-types */

export default function ProjectItem({ projects }) {
  return (
    <div>
      <div className="project-container bg-cover bg-center h-64 relative overflow-hidden group rounded-sm">
        {/* Visible initially */}
        <h1 className="text-xl font-bold mb-2 opacity-100 transition duration-300 ease-in-out group-hover:opacity-0">
          {projects.name}
        </h1>
        <img
          src={projects.image}
          alt="image"
          className="object-cover w-full h-full"
        />
        {/* Details hidden initially, revealed on hover */}
        <div className="project-details absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <h1 className="text-xl font-bold mb-2">{projects.name}</h1>
          <div className="mb-2">{projects.skills}</div>
          <div className="mb-2">{projects.category}</div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2">
              Link to Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
