import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-blue-950">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/education" element={<Education />} /> */}
          {/* <Route path="/experience" element={<Experience />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
