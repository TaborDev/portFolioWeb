import Intro from "@/components/intro";
import Contact from "@/components/contact";
import SectionDivder from "@/components/section-divder";
import Experience from "@/components/experience";
import About from "@/components/about";
import Projects from "@/components/projects";
import LogoCarousel from "@/components/logoCarousel";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivder/>
      <About/>
      <Projects/>
      <Skills />
      <LogoCarousel/>
      <Experience />
      <Contact/>
    </main>
  )
}
