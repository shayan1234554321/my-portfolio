"use client";
import "react";
import "./hero.css";
import { useGlobalContext } from "@/context/GlobalContext";
import {
  MoonIcon,
  SunIcon,
  LinkedinIcon,
  GithubIcon,
  RightIcon,
  BottomRightIcon,
  BottomLeftIcon,
  TopLeftIcon,
} from "@/elements/icons";
import CustomButton from "@/elements/button";
import Image from "next/image";
import Lottie from "react-lottie";
import sunglassesAnimation from "../../public/sunglasses.json";
import precisionAnimation from "../../public/precision.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { initial, initial2, whileInView } from "@/utility/constants";

const Hero = () => {
  const { theme, changeTheme, screenWidth } = useGlobalContext();
  const [isStopped, setIsStopped] = useState(true);
  const [isStopped2, setIsStopped2] = useState(true);

  const sunglassesAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: sunglassesAnimation,
  };

  const precisionAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: precisionAnimation,
  };

  useEffect(() => {
    const playAnimation = () => {
      setIsStopped(false);
      setTimeout(() => {
        setIsStopped(true);
        setTimeout(() => {
          playAnimation();
        }, 2000); // 3-second delay before next play
      }, 2000); // 2-second animation duration
    };
    playAnimation();
  }, []);

  useEffect(() => {
    const playAnimation = () => {
      setIsStopped2(false);
      setTimeout(() => {
        setIsStopped2(true);
        setTimeout(() => {
          playAnimation();
        }, 1000);
      }, 2000);
    };

    playAnimation();
  }, []);

  return (
    <div className="hero">
      <div className="top">
        <motion.h4 initial={initial} whileInView={whileInView}>
          <a
            href="https://drive.google.com/file/d/1P5xYXMsj513Irb7UcHDJzbE7FQgaFLqT/view?usp=sharing"
            target="_blank"
          >
            RESUME
          </a>
        </motion.h4>
        <motion.div
          initial={initial}
          whileInView={whileInView}
          className="themeContainer"
          onClick={changeTheme}
        >
          <div className={`moonIcon ${theme === "dark" ? "selected" : ""}`}>
            <MoonIcon color={"var(--text)"} />
          </div>

          <div className={`sunIcon ${theme === "dark" ? "" : "selected"}`}>
            <SunIcon color={"var(--text)"} />
          </div>
        </motion.div>
      </div>
      <div className="mid flexCenterColumn">
        <div className="flexCenterColumn" style={{ position: "relative" }}>
          <div
            className={`sunglassesContainer  ${theme === "dark" && ""}`}
            onClick={() => changeTheme()}
          >
            <motion.h2 initial={initial2} whileInView={whileInView}>
              Building
            </motion.h2>
            <div>
              <Lottie
                options={sunglassesAnimationOptions}
                isStopped={isStopped}
                style={{ margin: 0 }}
              />
            </div>
          </div>
          <motion.h2 initial={initial2} whileInView={whileInView}>
            YOUR VISION
          </motion.h2>
          <motion.h2
            initial={initial2}
            whileInView={whileInView}
            className="precisionText"
          >
            With Precisi
            <Lottie
              options={precisionAnimationOptions}
              width={40}
              isStopped={isStopped2}
            />
            n
          </motion.h2>
          <Image
            src={theme === "dark" ? "/arrow-dark.svg" : "/arrow-light.svg"}
            width="200"
            height="200"
            className="arrowContainer"
            alt="arrow"
          />
        </div>
        <div className="flexCenterColumn">
          <motion.h5 initial={initial} whileInView={whileInView}>
            Hi There 👋 I am Shayan{" "}
          </motion.h5>
          <motion.h6 initial={initial} whileInView={whileInView}>
            A Full Stack Web And Mobile Developer and Designer
          </motion.h6>
        </div>

        <CustomButton
          onClick={() => window.open("mailto:kshayan091@gmail.com", "_blank")}
        >
          CONTACT
        </CustomButton>
        <motion.div
          initial={initial}
          whileInView={whileInView}
          className="socialIcons"
        >
          <a href="https://www.linkedin.com/in/shayan-khan20/" target="_blank">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/shayan1234554321" target="_blank">
            <GithubIcon color={"var(--text)"} />
          </a>
        </motion.div>
      </div>
      <RightIcon changeStroke={screenWidth < 769 ? true : false} />
      <BottomRightIcon changeStroke={screenWidth < 769 ? true : false} />
      <BottomLeftIcon changeStroke={screenWidth < 769 ? true : false} />
      <TopLeftIcon changeStroke={screenWidth < 769 ? true : false} />
    </div>
  );
};

export default Hero;
