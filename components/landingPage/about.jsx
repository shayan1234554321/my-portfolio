"use client";
import React, { useEffect, useState } from "react";
import "./about.css";
import {
  AWSIcon,
  CloudinaryIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  FramerIcon,
  GithubIcon,
  HTMLIcon,
  JestIcon,
  JSIcon,
  MaterialIcon,
  MongoIcon,
  NextIcon,
  PuppeteerIcon,
  ReactIcon,
  SanityIcon,
  SocketIcon,
  StripeIcon,
  TSIcon,
} from "@/elements/icons";
import { styled } from "styled-components";
import { motion, useScroll } from "framer-motion";
import { initial, initial2, whileInView } from "@/utility/constants";

const TechnologiesPc = styled(motion.div)`
  margin: 50px 0;
  padding-bottom: 150px;
  z-index: 3;
  position: relative;
  @media (max-width: 769px) {
    display: none;
  }
`;
const TechnologiesMobile = styled.div`
  display: none;
  margin: 50px 0;
  padding-bottom: 150px;
  z-index: 3;
  position: relative;
  transition: 0.1s;
  @media (max-width: 769px) {
    display: block;
  }
`;

const ExpertiseContainer = styled(motion.div)`
  position: absolute;
  width: 65%;
  min-width: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  row-gap: 30px;
  transform: translateX(-50%);
`;

const IconContainerStyled = styled(motion.div)`
  position: relative;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background-color: var(--background);
  display: flex;
  z-index: 8;
  align-items: center;
  justify-content: center;

  > div {
    animation: iconHoverOut 0.2s ease-in-out;
    position: absolute;
    pointer-events: none;
    top: -40px;
    font-size: 12px;
    background-color: var(--iconBackground);
    padding: 5px 10px;
    width: max-content;
    border-radius: 15px;
    box-shadow: 0px 0px 15px var(--boxShadow);
    transform: scale(0.5) translateY(20px);
    opacity: 0;
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: calc(50% - 10px);
      width: 15px;
      height: 15px;
      transform: rotateZ(45deg);
      background-color: var(--iconBackground);
      border-radius: 3px;
      z-index: -1;
    }
  }

  .techIcons {
    width: 25px;
    height: 25px;
  }

  .techIcons svg {
    width: 25px;
    height: 25px;
  }

  &:hover > div {
    opacity: 1;
    animation: iconHoverIn 0.2s ease-in-out;
    transform: scale(1) translateY(0px);
  }

  @keyframes iconHoverIn {
    0% {
      opacity: 0;
      transform: scale(0.5) translateY(20px);
    }
    50% {
      transform: scale(1.05) translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
  }

  @keyframes iconHoverOut {
    0% {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
    50% {
      transform: scale(0.4) translateY(25px);
    }
    100% {
      opacity: 0;
      transform: scale(0.5) translateY(20px);
    }
  }
`;

function IconContainer({
  shadow = false,
  Icon,
  width = "30px",
  description = "",
  noLink = false,
  ...rest
}) {
  return (
    <IconContainerStyled noLink={noLink} shadow={shadow} {...rest}>
      <div style={{ pointerEvents: "none", color: "var(--text)" }}>
        {description}
      </div>
      <span>{Icon}</span>
    </IconContainerStyled>
  );
}

const Expertise = () => {
  return (
    <ExpertiseContainer
      initial={{ opacity: 0, transform: "translateY(30px) translateX(-50%)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0px) translateX(-50%)",
        transition: { duration: 0.3, type: "spring", stiffness: 100 },
      }}
    >
      <IconContainer
        noLink
        Icon={<ExpressIcon />}
        shadow
        description="Node.js / Express"
      />
      <IconContainer
        noLink
        Icon={<FramerIcon />}
        shadow
        description="Framer Motion"
      />
      <IconContainer
        noLink
        Icon={<FigmaIcon />}
        width="15px"
        shadow
        description="Figma"
      />
      <IconContainer
        noLink
        Icon={<GithubIcon color={"var(--text)"} />}
        width="25px"
        shadow
        description="Github"
      />
      <IconContainer
        noLink
        Icon={<HTMLIcon />}
        width="20px"
        shadow
        description="HTML / CSS"
      />
      <IconContainer
        noLink
        Icon={<JSIcon />}
        width="20px"
        shadow
        description="Javascript"
      />
      <IconContainer
        noLink
        Icon={<MaterialIcon />}
        width="25px"
        shadow
        description="Material UI"
      />
      <IconContainer
        noLink
        Icon={<MongoIcon />}
        width="25px"
        shadow
        description="MongoDB"
      />
      <IconContainer
        noLink
        Icon={<NextIcon />}
        width="25px"
        shadow
        description="Next.js"
      />
      <IconContainer
        noLink
        Icon={<FirebaseIcon />}
        width="15px"
        shadow
        description="Firebase"
      />
      <IconContainer
        noLink
        Icon={<ReactIcon />}
        width="25px"
        shadow
        description="React / React Native"
      />
      <IconContainer
        noLink
        Icon={<TSIcon />}
        width="20px"
        shadow
        description="Type Script"
      />
      <IconContainer
        noLink
        Icon={<StripeIcon />}
        width="20px"
        shadow
        description="Stripe"
      />
      <IconContainer
        noLink
        Icon={<SocketIcon />}
        width="20px"
        shadow
        description="Socket IO"
      />
      <IconContainer
        noLink
        Icon={<JestIcon />}
        width="20px"
        shadow
        description="Jest"
      />
      <IconContainer noLink Icon={<AWSIcon />} shadow description="AWS" />
      <IconContainer
        noLink
        Icon={<CloudinaryIcon />}
        shadow
        description="Cloudinary"
      />
      <IconContainer
        noLink
        Icon={<SanityIcon />}
        width="35px"
        shadow
        description="Sanity"
      />
      <IconContainer
        noLink
        Icon={<PuppeteerIcon />}
        shadow
        description="Puppeteer"
      />
    </ExpertiseContainer>
  );
};

const Card = ({ item }) => {
  return (
    <motion.div initial={initial2} whileInView={whileInView}>
      <p>{item.text}</p>
      {item.techs}
    </motion.div>
  );
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const [scrollYPosition, setScrollYPosition] = useState();

  const data = [
    {
      text: (
        <>
          Responsive and complex web apps using <bold>React Next.js</bold>
        </>
      ),
      techs: <NextIcon />,
    },
    {
      text: (
        <>
          Functional Mobile Applications using <bold>React Native</bold>
        </>
      ),
      techs: <ReactIcon />,
    },
    {
      text: (
        <>
          Robust Backend Architecture with <bold>Node.JS EXPRESS</bold>
        </>
      ),
      techs: <ExpressIcon />,
    },
  ];

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      setScrollYPosition(v * 4000);
    });
  }, [scrollYProgress]);

  return (
    <div className="about">
      <motion.h2>
        TURNING IDEAS INTO{" "}
        <Highlighted style={{ marginLeft: "15px" }}>REALITY</Highlighted>
      </motion.h2>
      <motion.p initial={initial} whileInView={whileInView}>
        Full-stack web and Mobile developer with{" "}
        <span className="boldAndColored">3+ years</span> of experience in{" "}
        <span className="boldAndColored">MERN stack and React Native</span>. I
        build responsive, SEO-friendly websites, mobile apps and robust
        backends. Having design skills in{" "}
        <span className="boldAndColored">Figma</span>.
      </motion.p>
      <div className="cardsContainer">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <TechnologiesPc>
        <Expertise />
      </TechnologiesPc>
      <TechnologiesMobile
        style={{
          transform: `translateX(calc(${scrollYPosition}px - 600px )) `,
        }}
      >
        <Expertise />
      </TechnologiesMobile>
      <img src="/mobile-black.svg" className="mobileBlack" />
      <img src="/mobile-white.svg" className="mobileWhite" />
    </div>
  );
};

const HighlightedContainer = styled.span`
  color: black;
  position: relative;
  z-index: 1;
`;

const HighlightedContainerAfter = styled(motion.div)`
  position: absolute;
  width: 120%;
  height: 120%;
  background: linear-gradient(
    45deg,
    var(--textFadeFirst),
    var(--textFadeSecond)
  );
  z-index: -1;
  transform: skewX(-20deg);
  border-radius: 15px;
  left: -12%;
  top: -10%;

  @media screen and (max-width: 768px) {
    border-radius: 10px;
  }

  @media screen and (max-width: 425px) {
    border-radius: 5px;
  }
`;

const Cursor = styled(motion.img)`
  position: absolute;
  bottom: -20px;
  right: -25px;

  @media screen and (max-width: 768px) {
    bottom: -15px;
    right: -20px;
    width: 15px;
    height: 15px;
  }

  @media screen and (max-width: 425px) {
    bottom: -14px;
    right: -12px;
    width: 10px;
    height: 10px;
  }
`;

export const Highlighted = ({ children, ...rest }) => {
  return (
    <HighlightedContainer {...rest}>
      <span style={{ color: "white", display: "inline" }}>{children}</span>
      <HighlightedContainerAfter
        initial={{
          width: 0,
          height: 0,
        }}
        whileInView={{
          transition: {
            duration: 0.5,
          },
          width: "120%",
          height: "120%",
          once: true,
        }}
      />
      <Cursor
        initial={{
          transform: "translateX(-120px) translateY(-20px)",
        }}
        whileInView={{
          transition: {
            duration: 0.5,
          },
          transform: "translateX(0px) translateY(0px)",
          once: true,
        }}
        src={"/arrow-blue.svg"}
      />
    </HighlightedContainer>
  );
};

export default About;
