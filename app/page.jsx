"use client";
import Hero from "@/components/landingPage/hero";
import "./page.css";
import Header from "@/components/layout/header";
import About from "@/components/landingPage/about";
import Experience from "@/components/landingPage/experience";
import Contact from "@/components/landingPage/contact";
import Footer from "@/components/layout/footer";
import Projects from "@/components/landingPage/projects";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("house");
  const isMenuScrolling = useRef(false);
  const HeroRef = useRef();
  const AboutRef = useRef();
  const ProjectsRef = useRef();
  const ExperienceRef = useRef();
  const ContactRef = useRef();
  const HeroInView = useInView(HeroRef, { threshold: 0.5 });
  const AboutInView = useInView(AboutRef, { threshold: 0.5 });
  const ProjectsInView = useInView(ProjectsRef, { threshold: 0.5 });
  const ExperienceInView = useInView(ExperienceRef, { threshold: 0.5 });
  const ContactInView = useInView(ContactRef, { threshold: 0.5 });
  const [timeout , setTimeOut] = useState(0);

  const onMenuClick = (section) => {
    if (timeout) clearTimeout(timeout);
    isMenuScrolling.current = true;
    switch (section) {
      case "house":
        HeroRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "info":
        AboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "laptop":
        ProjectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "cap":
        ExperienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "call":
        ContactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
    const time = setTimeout(() => {
      isMenuScrolling.current = false;
    }, 5000);
    setTimeOut(time);
  };

  useEffect(() => {
    if (HeroInView) {
      setActiveSection("house");
    } else if (AboutInView) {
      setActiveSection("info");
    } else if (ProjectsInView) {
      setActiveSection("laptop");
    } else if (ContactInView) {
      setActiveSection("call");
    } else if (ExperienceInView) {
      setActiveSection("cap");
    }
  }, [
    HeroInView,
    AboutInView,
    ProjectsInView,
    ExperienceInView,
    ContactInView,
  ]);

  return (
    <div className="main">
      <Header activeSection={activeSection} onMenuClick={onMenuClick} />
      <div className="section" ref={HeroRef} id="hero">
        <Hero />
      </div>
      <div className="section" ref={AboutRef} id="about">
        <About />
      </div>
      <div className="section" ref={ProjectsRef} id="projects" style={{overflowX: "unset"}}>
        <Projects isMenuScrolling={isMenuScrolling} />
      </div>
      <div className="section" ref={ExperienceRef} id="experience">
        <Experience />
      </div>
      <div className="section" ref={ContactRef} id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
