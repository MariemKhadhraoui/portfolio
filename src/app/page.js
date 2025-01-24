import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills  from "@/components/Skills";
import SiVisualStudio from 'react-icons/si';
import SiMicrosoft from 'react-icons/si';
import SiVisualStudioCode from 'react-icons/si';

export default function Home() {
  return (
    <main> 
     <Hero />
     <About />

    <Projects />
    <Skills />
    <Contact />
   </main>
    
    
    

  );
}
