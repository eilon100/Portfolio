import About from '../components/About';
import ContactMe from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/projects';
import Skills from '../components/skills';
import WorkExperience from '../components/Experience';

export default function Home() {
  return (
    <div
      className=" text-white h-screen
    overflow-y-scroll scrollbar-thin overflow-x-hidden z-0
     scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scroll-smooth"
    >
      <Hero />
      <About />
      <Projects />
      {/* <Skills /> */}
      <WorkExperience />
      <ContactMe />
    </div>
  );
}
