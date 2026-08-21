import "@/App.css";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { Toolkit } from "@/components/portfolio/Toolkit";
import { Experiments } from "@/components/portfolio/Experiments";
import { Exploring } from "@/components/portfolio/Exploring";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Process />
        <Toolkit />
        <Experiments />
        <Exploring />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
