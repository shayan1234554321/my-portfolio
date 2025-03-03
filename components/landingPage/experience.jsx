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
        year: 2024,
        month: "Nov - Current",
      },
      description: (
        <>
          <h5>Authornate - Pakistan, Islamabad (Onsite)</h5>
          <h5>Mid-Senior Full Stack Developer</h5>
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
              feature used by 1,000+ users.
            </li>
            <li>
              Led web3 authentication and secure transaction handling, ensuring
              seamless integration with blockchain technology.
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
              Developed a full-stack web platform using Next.js, Node.js, and
              MongoDB, ensuring seamless integration of AI chatbot services and
              achieving a 35% boost in customer support automation efficiency.
            </li>
            <li>
              Architected scalable back-end systems with MongoDB, utilizing
              indexing, reducing database query times by 40% under heavy load.
            </li>
            <li>
              Implemented Vector Database using FAISS, Hugging Face Vector Model
              and Langchain for RAG Model in Node.js
            </li>
            <li>
              Designed highly responsive, pixel-perfect frontend interfaces
              using React and Next.js.
            </li>
            <li>
              Implemented secure authentication and tokenization, protecting
              user data and enhancing application security in compliance with
              industry standards.
            </li>
            <li>
              Integrated third-party APIs for automation and analytics,
              streamlining data processing and boosting operational efficiency
              by 30%.
            </li>
            <li>
              Deployed and managed the platform on VPS hosting, optimizing
              server performance and maintaining 99.9% uptime.
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
          <h5>SMB DigitalZone - UAE, Dubai Remote</h5>
          <h5>Lead Full Stack Web Developer</h5>
          <ul>
            <li>
              Built scalable web applications using Next.js, Cloudinary,
              Node.js, and MongoDB, ensuring smooth frontend-backend
              synchronization and a 20% improvement in page load speed.
            </li>
            <li>
              Integrated Major social media for connecting accounts and posting
              to their platforms like Facebook, Youtube, TikTok , Twitter, etc.
            </li>
            <li>
              Implemented JWT-based authentication and OAuth for third-party
              logins, significantly enhancing user security and data protection.
            </li>
            <li>
              Designed and developed E-commerce, blog, company, and other
              websites with improved security and SEO optimization.
            </li>
            <li>
              Collaborated closely with product managers and designers,
              delivering detailed and highly optimized UI/UX experiences.
            </li>
            <li>
              Integrated Stripe for secure and seamless payment processing,
              achieving.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: {
        year: 2023,
        month: "Aug - Sep",
      },
      description: (
        <>
          <h5>SUMIAKA - United States Remote</h5>
          <h5>Junior Full Stack Web Developer</h5>
          <ul>
            <li>
              Developed comprehensive HR management tools, ensuring an intuitive
              user interface with React and Material-UI for enhanced
              productivity.
            </li>
            <li>
              Collaborated with the design team on Figma to create user-friendly
              interfaces.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: {
        year: 2023,
        month: "Jan - July",
      },
      description: (
        <>
          <h5>Carmed - Pakistan Remote</h5>
          <h5>Mid Senior Full Stack Web and Mobile Developer</h5>
          <ul>
            <li>
              Developed a cross-platform mobile application using React Native,
              integrating Firebase for real-time updates, resulting in a 30%
              reduction in response times for live user interactions.
            </li>
            <li>
              Collaborated closely with the design team on Figma, iterating on
              UI/UX to deliver a highly intuitive and visually compelling mobile
              experience.
            </li>
            <li>
              Proactively identified and addressed security vulnerabilities in
              Next.js, Express, and React Native, reducing potential security
              risks by 25%.
            </li>
            <li>
              Integrated cloud-based solution to enhance application
              scalability.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: {
        year: 2022,
        month: "June - Jan 2023",
      },
      description: (
        <>
          <h5>Skupreme - United States Remote</h5>
          <h5>Junior Frontend Developer</h5>
          <ul>
            <li>
              Developed responsive and visually engaging user interfaces using
              Next.js and styled-components
            </li>
            <li>
              Received recognition from project managers for consistently
              delivering high-quality UI/UX solutions ahead of deadlines,
              contributing to the overall success of multiple projects.
            </li>
            <li>
              Actively participated in team code reviews, identifying potential
              issues early on and contributing to a 15% improvement in code
              quality and maintainability.
            </li>
            <li>
              Created reusable frontend components in React, accelerating
              development speed and improving design consistency across the
              platform.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: {
        year: 2021,
        month: "Feb - June 2022",
      },
      description: (
        <>
          <h5>Fiver and Other Projects - Pakistan Remote</h5>
          <h5>Software Developer</h5>
          <ul>
            <li>
              Developed responsive and visually engaging user interfaces using
              Next.js, React Native Expo, Node.js, MongoDB, Cloudinary,
              Typescript and styled-components
            </li>
            <li>
              Maintained clean and sustainable codebases, ensuring project
              maintainability and delivering on time with a 100% success rate
              for project deadlines.
            </li>
            <li>
              Utilized MongoDB indexing and optimized queries to improve
              database performance, leading to a 30% increase in app
              responsiveness.
            </li>
            <li>
              Designed and developed full-stack applications with a focus on
              frontend precision and backend scalability
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
        year: 2022,
        month: "Jan 2020 - March",
      },
      description: (
        <>
          <h5>Fazaia Degree Collage</h5>
          <h5>Pakistan, Risalpur</h5>
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
        I have over 3 years of experience in which i have worked with US ,
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
