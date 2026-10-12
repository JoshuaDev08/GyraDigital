import { Toaster } from "sileo";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Services from "./pages/What-we-do";
import Stats from "./pages/About-us";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import ProjectInquiryModal from "./components/Inquiry/ProjectsInquiryModal";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        offset={{
          top: 90,
          right: 20,
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Stats />
        <Pricing />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ProjectInquiryModal />
    </>
  );
}

export default App;
