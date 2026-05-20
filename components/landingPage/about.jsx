"use client";
import React, { useEffect, useState } from "react";
import "./about.css";
import {
  AWSIcon,
  CloudinaryIcon,
  ExpressIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  NextIcon,
  PuppeteerIcon,
  ReactIcon,
  SocketIcon,
  StripeIcon,
  TSIcon,
  ShopifyIcon,
  N8nIcon,
  ClaudeIcon,
  ShadCNIcon,
  FacebookIcon,
  CoolifyIcon,
  ExpoIcon,
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
  
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
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
        Icon={<N8nIcon color={"red"} />}
        shadow
        description="n8n"
      />
      <IconContainer
        noLink
        Icon={<ClaudeIcon />}
        shadow
        description="Claude Code"
      />
      <IconContainer
        noLink
        Icon={<ShopifyIcon />}
        width="15px"
        shadow
        description="Shopify"
      />
      <IconContainer
        noLink
        Icon={<FigmaIcon color={"var(--text)"} />}
        width="25px"
        shadow
        description="Figma"
      />
      <IconContainer
        noLink
        Icon={<GithubIcon />}
        width="25px"
        shadow
        description="Github"
      />
      <IconContainer
        noLink
        Icon={<ReactIcon />}
        width="20px"
        shadow
        description="Context API"
      />
      <IconContainer
        noLink
        Icon={<StripeIcon />}
        width="25px"
        shadow
        description="Stripe"
      />
      <IconContainer
        noLink
        Icon={<ShadCNIcon />}
        width="25px"
        shadow
        description="Shadcn"
      />
      <IconContainer
        noLink
        Icon={<FacebookIcon />}
        width="25px"
        shadow
        description="Graph API"
      />
      <IconContainer
        noLink
        Icon={<CoolifyIcon />}
        width="18px"
        shadow
        description="Coolify self Host"
      />
      <IconContainer
        noLink
        Icon={<img src="/centrifuge.svg" style={{ width: "100%" }} />}
        width="20px"
        shadow
        description="Centrifugo"
      />
      <IconContainer
        noLink
        Icon={<TSIcon />}
        width="20px"
        shadow
        description="TypeScript"
      />
      <IconContainer
        noLink
        Icon={<FramerIcon />}
        width="20px"
        shadow
        description="Framer Motion"
      />
      <IconContainer
        noLink
        Icon={<img src="/tailwind.svg" style={{ width: "100%" }} />}
        width="20px"
        shadow
        description="Tailwind"
      />
      <IconContainer
        noLink
        Icon={<ExpoIcon />}
        width="20px"
        shadow
        description="React Native Expo"
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
        Icon={<CloudinaryIcon />}
        width="20px"
        shadow
        description="Cloudinary"
      />
      <IconContainer noLink Icon={<AWSIcon />} shadow description="AWS" />
      <IconContainer
        noLink
        Icon={<img src="/qdrant.svg" style={{ width: "100%" }} />}
        shadow
        description="Qdrant"
      />
      <IconContainer
        noLink
        Icon={<NextIcon />}
        width="35px"
        shadow
        description="Next.js"
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
    <motion.div initial={initial2} whileInView={whileInView} className="card-inner">
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
        <span className="boldAndColored">4+ years</span> of experience in{" "}
        <span className="boldAndColored">MERN stack and React Native Expo</span>
        . I have successfully built platforms such as{" "}
        <a href="https://robodialog.com" target="_blank" className="boldAndColored">RoboDialog</a> and{" "}
        <a href="https://skupreme.com" target="_blank" className="boldAndColored">Skupreme</a> by utilizing
        technologies like Next.js, Langchain, LangGraph, Qdrant, Typescript,
        MongoDB and Express.js
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
      <img src="/mobile-1.webp" className="mobileBlack" />
      <img src="/mobile-2.webp" className="mobileWhite" />
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
