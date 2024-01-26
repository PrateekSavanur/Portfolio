import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";

import { FullStackprojectList } from "./helpers/FullStackProjects";
import { FrontendProjects } from "./helpers/FrontendProjects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="bg-blue-950">
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="projects/fullstack/:projectId"
            element={<ProjectDetails projectList={FullStackprojectList} />}
          />

          <Route
            path="projects/frontend/:projectId"
            element={<ProjectDetails projectList={FrontendProjects} />}
          />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
