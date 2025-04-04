import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/layout/navbar";
import { Projects } from "@/components/sections/projects";

export default function App() {
  return (
    <div className="min-h-screen dark:bg-neutral-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
