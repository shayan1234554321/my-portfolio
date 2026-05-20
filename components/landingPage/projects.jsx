"use client";
import React, { useEffect, useRef, useState } from "react";
import "./projects.css";
import { useScroll, motion } from "framer-motion";
import { CloseIcon, ProjectsBGM, ProjectsBGPC } from "@/elements/icons";
import { initial, initial2, whileInView } from "@/utility/constants";

const projects = [
  {
    name: "ROBODIALOG",
    about: "An AI Customer Support Agent for websites",
    description: (
      <ul>
        <li>
          Built RoboDialog, a production AI chatbot SaaS platform. Implemented LangGraph-based agentic workflows with RAG, hybrid vector search (dense + BM25 + reranking), and multi-provider LLM failover.
        </li>
        <li>Created a lightweight Preact widget (script-tag deployment) with real-time sync</li>
        <li>
          WebSocket-based real-time chat via Centrifugo with live agent handoffs
        </li>
      </ul>
    ),
    images: ["/project1.png"],
    visit: "https://www.robodialog.com",
    demo: "https://www.youtube.com/watch?v=wNTgGfObfU0",
  },
  {
    name: "VERSUS CLIP",
    about: "Versus Clip is a gaming mobile app where users create players, select winners, watch animated game simulations, record videos.",
    description: (
      <ul>
        <li>
          Cross platform mobile app using React Native, Expo and TypeScript for both IOS and Android
        </li>
        <li>
          Implemented physics-based game engine with collision detection, elastic physics, and frame-rate independent movement
        </li>
        <li>
          Built extensible game module system with isolated, self-contained game packages registered in a central registry
        </li>
        <li>
          Created player management system with custom player creation, photo gallery integration, and category organization
        </li>
        <li>
          Integrated Google Mobile Ads (rewarded + interstitial) for monetization with pre-load strategy and cooldown enforcement
        </li>
      </ul>
    ),
    images: ["/project2.webp"],
    visit: "https://play.google.com/store/apps/details?id=com.versusclip.official",
    gallery: ["/ss3.webp", "/ss4.webp"],
  },
  {
    name: "SKUPREME",
    about:
      "SKUPREME is a comprehensive SaaS platform that automates eCommerce operations and supply chain management",
    description: (
      <ul>
        <li>
          Contributed to the frontend of a full-stack SaaS platform that integrats 60+ sales channels, marketplaces, warehouses, and carriers for real-time data synchronization.
        </li>
        <li>
          Built the centralized catalog management UI where users can add, edit, and delete products and propagate changes across all connected channels.
        </li>
        <li>
          Developed the frontend for inventory management features that has multi-warehouse support, smart distribution and transfer dashboard.
        </li>
        <li>
          Created the UI for automated order management with rule-based fulfillment workflows.
        </li>
      </ul>
    ),
    images: ["/project3.webp"],
    demo: "https://www.youtube.com/watch?v=WC_oTysFV0A",
    visit: "https://skupreme.com/",
  },
  {
    name: "ZYLO ( UBER CLONE )",
    about: "Zylo is a taxi booking mobile app. For both Riders and Drivers",
    description: (
      <ul>
        <li>
          Cross platform mobile app using React Native, Typescript and Expo for
          both IOS and Android
        </li>
        <li>
          The app can be scaled to upto Millions of Daily active users with the
          use of Indexing and 2dsphere Location indexing for Database
          scalability
        </li>
        <li>
          Implemented sockets so that drivers and riders can see live updates on
          the offers and journey
        </li>
        <li>
          A secure backend made with Node.js, Express and Typescript. And
          security with Auth, tokens, Hashing and more
        </li>
        <li>
          Yup Form and API validations implemented on both backend and frontend
        </li>
      </ul>
    ),
    images: ["/project2.png"],
    code: "https://github.com/shayan1234554321/zylo",
    gallery: ["/ss1.png", "/ss2.png"],
  },
];

const Projects = ({ isMenuScrolling }) => {
  const ref = useRef();
  const scrollRef = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const [yProgress, setYProgress] = useState(0);
  const [selectedGallery, setSelectedGallery] = useState([]);

  const scrollToFraction = (fraction) => {
    if (scrollRef.current && !isMenuScrolling?.current) {
      const maxScroll =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const scrollPosition = fraction * maxScroll;
      scrollRef.current.scrollLeft = scrollPosition;
    }
  };

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      scrollToFraction(v);
      setYProgress(v);
    });
  }, [scrollYProgress]);

  return (
    <div className="projects" ref={ref}>
      <div className="projectsContainer2">
        <motion.h2 initial={initial} whileInView={whileInView}>
          PROJECTS
        </motion.h2>
        <motion.div className="projectsContainer" ref={scrollRef}>
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="projectLeft">
                <div>
                  <h3>{project.name}</h3>
                  <h5>{project.about}</h5>
                </div>
                <div>
                  <div className="paragraph">{project.description}</div>
                </div>
              </div>
              <div className="projectRight">
                <div>
                  <img src="/laptop.png" alt="" />
                  <img src={project.images[0]} alt="project" />
                </div>
                {project.visit && (
                  <button onClick={() => window.open(project.visit, "_blank")}>
                    VISIT
                  </button>
                )}
                {project.gallery && (
                  <button onClick={() => setSelectedGallery(project.gallery)}>
                    GALLERY
                  </button>
                )}
                {project.code && (
                  <button onClick={() => window.open(project.code, "_blank")}>
                    CODE
                  </button>
                )}
                {project.demo && (
                  <button onClick={() => window.open(project.demo, "_blank")}>
                    DEMO
                  </button>
                )}
              </div>
            </div>
          ))}
        </motion.div>
        <ProjectsBGPC yProgress={yProgress} />
        <ProjectsBGM yProgress={yProgress} />
      </div>
      {selectedGallery?.length > 0 && (
        <div className="gallery" onClick={() => setSelectedGallery([])}>
          <CloseIcon onClick={() => setSelectedGallery([])} />
          <div className="galleryInner" onClick={(e) => e.stopPropagation()}>
            <h3>Gallery</h3>
            {selectedGallery.map((img, index) => (
              <img key={index} src={img} alt="project" className="galleryImg" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
