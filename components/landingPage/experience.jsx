"use client";
import React, { useEffect, useRef, useState } from "react";
import "./experience.css";
import { motion, useScroll } from "framer-motion";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { initial, initial2, whileInView } from "@/utility/constants";

const JourneyCard = ({ item }) => {
  return (
    <motion.div
      initial={initial2}
      whileInView={whileInView}
      className="journeyCard"
    >
      <div>
        <div></div>
        <div className="dateContainer">
          <h3>{item.date.year}</h3>
          <h6>{item.date.month}</h6>
        </div>
      </div>
      <div className="description">{item.description}</div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  const { scrollYProgress: educationScroll } = useScroll({
    target: ref2,
    offset: ["start center", "end end"],
  });
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [educationScrollPosition, setEducationScrollPosition] = useState(0);

  const experience = [
    {
      date: {
        year: 2025,
        month: "June - Current",
      },
      description: (
        <>
          <h5>Iplex - Pakistan, Islamabad (Onsite)</h5>
          <h5>Mid-Senior Full Stack MERN Developer</h5>
          <ul>
            <li>
              Built core modules of VFLOW (MERN), enabling multi-store
              management with role-based access to streamline retail operations.
            </li>
            <li>
              Implemented shift and event management system with role
              assignment, scheduling logic, and secure JWT-based authentication
              in a scalable Express.js backend.
            </li>
            <li>
              Actively collaborated on UI/UX design in Figma, contributing to
              user-friendly and visually engaging interfaces.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: {
        year: 2024,
        month: "Feb - Current",
      },
      description: (
        <>
          <h5>ROBODIALOG - Pakistan Remote</h5>
          <h5>Founder</h5>
          <ul>
            <li>
              an AI-powered customer support platform using Vector DB (Qdrant),
              Langchain, Express.js, reactp, Next.js and typescript, enabling
              website owners to embed smart chatbots and human interaction for
              real-time support.
            </li>
            <li>
              Architected scalable back-end systems with MongoDB, utilizing
              indexing, reducing database query times by 40% under heavy load.
            </li>
            <li>
              Implemented Vector Database using Qdrant, Hugging Face Vector
              Model and Langchain for RAG Model in Node.js
            </li>
            <li>
              Designed highly responsive, pixel-perfect frontend interfaces
              using Reactp and Next.js.
            </li>
            <li>
              Implemented secure authentication and tokenization, protecting
              user data and enhancing application security in compliance with
              industry standards.
            </li>
            <li>
              Deployed and managed the platform on VPS hosting using Coolify,
              optimizing server performance and maintaining 99.9% uptime.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: {
        year: 2023,
        month: "Oct - Feb 2024",
      },
      description: (
        <>
          <h5>Authornate - Pakistan, Islamabad (Onsite)</h5>
          <h5>Mid Full Stack MERN Developer</h5>
          <ul>
            <li>
              Contributed in TrinityPad, a web and mobile platform for
              blockchain-based project investments, implementing Privy for
              authentication, ethers.js for web3 transactions, and a
              TypeScript-based backend using Express.js and Firebase.
            </li>
            <li>
              Played a crucial role in GameGPT, implementing frontend designs
              and integrating Web3 smart contracts, including successful
              deployment on the Ethereum testnet, facilitating an auction
              feature used by 1,000+ users
            </li>
            <li>
              Led web3 authentication and secure transaction handling, ensuring
              seamless integration with blockchain technology
            </li>
          </ul>
        </>
      ),
    },
    {
      date: {
        year: 2022,
        month: "May - Oct 2024",
      },
      description: (
        <>
          <h5>Multiple Contract Based - Remote</h5>
          <h5>Full Stack Web Developer</h5>
          <ul>
            <li>
              Provided frontend development with Next.js for SKUPREME, a US
              based startup. This project is about Automated Commerce & Supply
              Chain Management used by 1000+ sellers
            </li>
            <li>
              Developed Weeshare under SMB DigitalZone, integrating OAuth with
              platforms like Facebook, YouTube, TikTok, and Twitter, enabling
              users to securely connect accounts and schedule or post content
              directly via a unified dashboard.
            </li>
            <li>
              Engineered complex content and eCommerce platforms for SMB
              DigitalZone with features like OAuth login, Stripe payments,
              social media API integrations, and performance-optimized Next.js
              frontend
            </li>
            <li>
              Developed cross-platform mobile and web apps as Carmed,
              integrating Firebase for real-time interactions and React Native
              for a seamless mobile user experience.
            </li>
            <li>
              Collaborated closely with product managers and designers,
              delivering detailed and highly optimized UI/UX experiences.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const education = [
    {
      date: {
        year: 2023,
        month: "January - August",
      },
      description: (
        <>
          <h5>Microverse Bootcamp</h5>
          <h5>United States Remote</h5>
          <p>
            Spent 1300+ hours mastering algorithms, data structures, and
            full-stack development while simultaneously developing projects with
            Ruby, Rails, JavaScript, React, and Redux.
          </p>
          <ul>
            <li>Mentorship of junior developers</li>
            <li>Remote Full Stack Web Development Program, Full Time</li>
            <li>
              Spent 1300+ hours mastering algorithms, data structures, and
              full-stack development
            </li>
            <li>
              Simultaneously developing projects with Ruby, Rails, JavaScript,
              React, and Redux.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: {
        year: 2021,
        month: "March",
      },
      description: (
        <>
          <h5>City University</h5>
          <h5>Pakistan, Peshawar</h5>
          <p>
            At high school, they offer a comprehensive education program in
            computer engineering that prepares students for success in this
            rapidly evolving field. Their curriculum covers a wide range of
            topics, including computer hardware and software, programming
            languages, algorithms, data structures, and computer networks.
          </p>
          <ul>
            <li>Built Projects with c++</li>
            <li>
              Studied Computer Networks and working of Hardware and Software
              communication.
            </li>
            <li>
              A deeper look into cyber attacks and ways to protect yourself.
            </li>
            <li>An introduction to AI and machine learning.</li>
          </ul>
        </>
      ),
    },
  ];

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      setScrollYPosition(v);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    educationScroll.onChange((v) => {
      setEducationScrollPosition(v);
    });
  }, [educationScroll]);

  return (
    <div className="experience">
      <motion.h2 initial={initial} whileInView={whileInView}>
        MY JOURNEY
      </motion.h2>
      <motion.p
        initial={initial}
        whileInView={whileInView}
        className="paragraph"
      >
        I have over 4 years of experience in which i have worked with US ,
        Pakistan and Dubai companies remotely
      </motion.p>
      <div className="journeyCardsContainer" ref={ref}>
        {experience.map((item, index) => (
          <JourneyCard
            item={item}
            key={`${item.date.year + item.date.month + index}`}
          />
        ))}
        <div className="line" />
        <motion.div
          style={{
            height: `${scrollYPosition * 100}%`,
          }}
          className="line line2"
        />
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.05}
          duration={1}
          repeatDelay={5}
          style={{
            maskImage:
              "radial-gradient(1500px_circle_at_center, white, transparent)",
            position: "absolute",
            left: 0,
            right: 0,
            top: "-0%",
            height: "100%",
            transform: "skewY(12deg)",
          }}
        />
      </div>
      <motion.h2
        initial={initial}
        whileInView={whileInView}
        style={{ marginBottom: "5px" }}
      >
        EDUCATION
      </motion.h2>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        className="paragraph"
      >
        <p>Certified By</p>
        <div className="certificationContainer">
          <a
            href="https://coursera.org/share/26db931519a929fa09fe1ac52dc9bc3e"
            target="_blank"
          >
            <img src="/google.svg" alt="" />
          </a>
          <a
            href="https://coursera.org/share/dd640e24dc605bdad260dbc3eb67956a"
            target="_blank"
          >
            <img src="/meta.svg" alt="" style={{ height: "40px" }} />
          </a>
          <a
            href="https://www.credential.net/1bb697e9-2cfb-4828-a556-04eae77efc21"
            target="_blank"
          >
            <img src="/microverse.png" alt="" />
          </a>
        </div>
      </motion.div>
      <div className="journeyCardsContainer" ref={ref2}>
        {education.map((item, index) => (
          <JourneyCard
            item={item}
            key={`${item.date.year + item.date.month + index}`}
          />
        ))}
        <div className="line" />
        <motion.div
          style={{
            height: `${educationScrollPosition * 100}%`,
            // transition: "0.3s",
          }}
          className="line line2"
        />
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.05}
          duration={1}
          repeatDelay={5}
          style={{
            maskImage:
              "radial-gradient(1500px_circle_at_center, white, transparent)",
            position: "absolute",
            left: 0,
            right: 0,
            top: "-0%",
            height: "100%",
            transform: "skewY(12deg)",
          }}
        />
      </div>
    </div>
  );
};

export default Experience;
