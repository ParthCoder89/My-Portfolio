import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DownloadCV from "./components/DownloadCV";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Achievements from "./pages/Achievements";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/achievements" element={<Achievements />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <DownloadCV />
    </Router>
  );
}

export default App;
