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
          Live Conversation with AI Customer Support Agent in your website with
          just Copy and Paste of a script
        </li>
        <li>Implemented MongoDB Indexing to speed up queries upto 10x</li>
        <li>
          Implemented training AI on your Data using RAG Model. Using FAISS
          Vector store, Hugging Face model and Langchain in Node.js
        </li>
        <li>
          Focusing on user data security and privacy using tokenization and
          encryption
        </li>
        <li>
          Giving the ability to create Tickets using chatflow customization
        </li>
      </ul>
    ),
    images: ["/project1.png"],
    visit: "https://www.robodialog.com",
    demo: "https://www.youtube.com/watch?v=wNTgGfObfU0",
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
  {
    name: "FUTURE STORE",
    about:
      "Future store is an ecommerce website that sells the latest tech gadgets. You can have many products , have your cart and checkout with stripe integrations.",
    description: (
      <ul>
        <li>
          Frontend Development using Next.js with a clean design and mobile
          responsive
        </li>
        <li>Secure Payments using Stripe</li>
        <li>Headless CMS for dynamic Products store using Sanity</li>
        <li>
          Cart and Checkout features with ability to select more than one
          product
        </li>
      </ul>
    ),
    images: ["/project3.png"],
    code: "https://github.com/shayan1234554321/ecommerce",
    visit: "https://ecommerce-sigma-snowy.vercel.app/",
  },
  {
    name: "FLICKSY",
    about:
      "Flicksy is a video sharing app where users can create and share videos.",
    description: (
      <ul>
        <li>
          Cross platform mobile app using React Native and Expo for both IOS and
          Android
        </li>
        <li>
          The likes functionality is made as such that the app can be scaled to
          Millions of users. With the use of indexing and model separation
        </li>
        <li>
          Youtube like functionality for profiles, where users can access other
          public profiles and see their videos and statistics
        </li>
        <li>
          A secure backend made with Node.js, Express and MongoDB. And security
          with Auth, tokens, Hashing and more
        </li>
      </ul>
    ),
    images: ["/project4.png"],
    code: "https://github.com/shayan1234554321/flicksy",
    gallery: ["/ss3.png", "/ss4.png"],
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
                <button
                  onClick={() => {
                    if (project.visit) {
                      window.open(project.visit, "_blank");
                    } else {
                      setSelectedGallery(project.gallery);
                    }
                  }}
                >
                  {project.visit ? "VISIT" : "GALLERY"}
                </button>
                <button
                  onClick={() => {
                    if (project.code) {
                      window.open(project.code, "_blank");
                    } else {
                      window.open(project.demo, "_blank");
                    }
                  }}
                >
                  {project.code ? "CODE" : "DEMO"}
                </button>
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
