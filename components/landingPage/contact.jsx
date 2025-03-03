"use client";
import CustomButton from "@/elements/button";
import React from "react";
import "./contact.css";
import {
  AWSIcon,
  ContactBackgroundSVG,
  ExpoIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  MongoIcon,
  NextIcon,
  ReactIcon,
} from "@/elements/icons";
import { useGlobalContext } from "@/context/GlobalContext";
import { initial, whileInView } from "@/utility/constants";
import { motion } from "framer-motion";

const Contact = () => {
  const { screenWidth } = useGlobalContext();
  const services = [
    {
      title: "BACKEND DEVELOPMENT",
      description:
        "A scalable and secure Backend with Auth, tokens, Hashing and more",
      images: [
        <ExpressIcon color="var(--background)" />,
        <MongoIcon />,
        <AWSIcon color="var(--background)" />,
        <FirebaseIcon />,
      ],
      initial: {
        marginTop: 30,
      },
      whileInView: {
        marginTop: 0,
        transition: {
          duration: 0.1,
        },
      },
    },
    {
      title: "FRONTEND DEVELOPMENT",
      description: "Creating Responsive and Attention to Detail Websites",
      images: [<NextIcon color="var(--background)" />, <ReactIcon />],
      initial: {
        marginTop: 30,
      },
      whileInView: {
        marginTop: 0,
        transition: {
          duration: 0.2,
        },
      },
    },
    {
      title: "FULL STACK DEVELOPMENT",
      description: "A complete, secure and scalable Website to any business",
      images: [
        <NextIcon color="var(--background)" />,
        <ExpressIcon color="var(--background)" />,
        <MongoIcon />,
        <ReactIcon />,
        <FigmaIcon />,
      ],
      initial: {
        marginTop: 30,
      },
      whileInView: {
        marginTop: 0,
        transition: {
          duration: 0.3,
        },
      },
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      description:
        "Cross Platform Mobile App Development with React Native Expo",
      images: [
        <ExpoIcon color="var(--background)" />,
        <ExpressIcon color="var(--background)" />,
      ],
      initial: {
        marginTop: 30,
      },
      whileInView: {
        marginTop: 0,
        transition: {
          duration: 0.4,
        },
      },
    },
    {
      title: "PROJECT DESIGN",
      description: "Need Modern and Elegant UI/UX ? I can help",
      images: [<FigmaIcon />],
      initial: {
        marginTop: 30,
      },
      whileInView: {
        marginTop: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
  ];

  return (
    <div className="contact">
      <motion.h5 initial={initial} whileInView={whileInView}>
        Got this Far!
      </motion.h5>
      <motion.h2 initial={initial} whileInView={whileInView}>
        CONTACT ME NOW
      </motion.h2>
      <motion.p initial={initial} whileInView={whileInView}>
        I can build your frontend, backend, mobile application or full website.
        Lets discuss your next Idea, and make that into reality
      </motion.p>
      <CustomButton onClick={()=> window.open("mailto:kshayan091@gmail.com", "_blank")} >
        CONTACT
      </CustomButton>
      <div className="services">
        {services.map((service, index) => (
          <motion.div
            initial={service.initial}
            whileInView={service.whileInView}
            className="service"
            key={`${index + service.title}`}
          >
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <div className="images">
              {service.images.map((image, index) => image)}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg rightBG">
        <ContactBackgroundSVG changeStroke={screenWidth < 769 ? true : false} />
      </div>
      <div className="bg leftBG">
        <ContactBackgroundSVG changeStroke={screenWidth < 769 ? true : false} />
      </div>
    </div>
  );
};

export default Contact;
