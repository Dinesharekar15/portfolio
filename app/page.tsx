import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import JourneyTimeline from "@/components/JourneyTimeline";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <main id="main-content" className="flex flex-col flex-1 focus:outline-none" tabIndex={-1}>
        <Hero />
        <ProjectList />
        <TechStack />
        <ExperienceTimeline />
        <JourneyTimeline />
        <About />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
