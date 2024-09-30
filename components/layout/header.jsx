"use client";

import React, { useEffect, useState } from "react";
import "./header.css";
import {
  CallIcon,
  CapIcon,
  HouseIcon,
  InfoIcon,
  LaptopIcon,
} from "@/elements/icons";

const Header = ({ activeSection , onMenuClick }) => {
  const [selected, setSelected] = useState("house");
  const [hoverItem, setHoverItem] = useState(-2);
  const [screenWidth, setScreenWidth] = useState(1000);

  const isPartialHover = (num) => {
    if (num - 1 === hoverItem || num + 1 === hoverItem) return true;
    return false;
  };

  const getClassName = (name, index) => {
    return `${isPartialHover(index) === true ? "partialHover" : ""} ${
      selected === name ? "selected" : ""
    } `;
  };

  const getColor = (name) => {
    return selected === name ? "var(--primary)" : "var(--text)";
  };

  const handleMouseEnter = (e, index) => {
    e.stopPropagation();
    setHoverItem(index);
  };

  const calculateLineSpace = () => {
    if (screenWidth > 768) {
      if (hoverItem !== -2) {
        if (hoverItem === 0) {
          return 32 + 8;
        }
        if (hoverItem === 1) {
          return 32 + 50;
        }
        if (hoverItem === 2) {
          return 32 + 85;
        }
        if (hoverItem === 3) {
          return 32 + 120;
        }
        if (hoverItem === 4) {
          return 32 + 155;
        }
      } else {
        if (selected === "house") {
          return 32 + 35 * 0;
        }
        if (selected === "info") {
          return 32 + 35 * 1;
        }
        if (selected === "laptop") {
          return 32 + 35 * 2;
        }
        if (selected === "cap") {
          return 32 + 35 * 3;
        }
        if (selected === "call") {
          return 32 + 35 * 4;
        }
      }
    } else {
      if (hoverItem !== -2) {
        if (hoverItem === 0) {
          return 25 + 5;
        }
        if (hoverItem === 1) {
          return 25 + 50;
        }
        if (hoverItem === 2) {
          return 25 + 85;
        }
        if (hoverItem === 3) {
          return 25 + 120;
        }
        if (hoverItem === 4) {
          return 25 + 155;
        }
      } else {
        if (selected === "house") {
          return 25 + 27 * 0;
        }
        if (selected === "info") {
          return 25 + 27 * 1;
        }
        if (selected === "laptop") {
          return 26 + 27 * 2;
        }
        if (selected === "cap") {
          return 28 + 27 * 3;
        }
        if (selected === "call") {
          return 28 + 27 * 4;
        }
      }
    }
  };

  useEffect(() => {
    if (window) {
      const getScreenWidth = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener("resize", () => {
        getScreenWidth();
      });
      getScreenWidth();
    }
  }, []);

  useEffect(()=>{
    setSelected(activeSection)
  },[activeSection])

  return (
    <div
      className="header"
      onMouseLeave={() => {
        setHoverItem(-2);
      }}
    >
      <HouseIcon
        className={getClassName("house", 0)}
        color={getColor("house")}
        onMouseEnter={(e) => handleMouseEnter(e, 0)}
        onClick={() => {
          setSelected("house");
          onMenuClick("house");
          setHoverItem(-2);
        }}
      />
      <InfoIcon
        onClick={() => {
          setSelected("info");
          onMenuClick("info");
          setHoverItem(-2);
        }}
        className={getClassName("info", 1)}
        color={getColor("info")}
        onMouseEnter={(e) => handleMouseEnter(e, 1)}
      />
      <LaptopIcon
        onClick={() => {
          setSelected("laptop");
          onMenuClick("laptop");
          setHoverItem(-2);
        }}
        className={getClassName("laptop", 2)}
        color={getColor("laptop")}
        onMouseEnter={(e) => handleMouseEnter(e, 2)}
      />
      <CapIcon
        onClick={() => {
          setSelected("cap");
          onMenuClick("cap");
          setHoverItem(-2);
        }}
        className={getClassName("cap", 3)}
        color={getColor("cap")}
        onMouseEnter={(e) => handleMouseEnter(e, 3)}
      />
      <CallIcon
        onClick={() => {
          setSelected("call");
          onMenuClick("call");
          setHoverItem(-2);
        }}
        className={getClassName("call", 4)}
        color={getColor("call")}
        onMouseEnter={(e) => handleMouseEnter(e, 4)}
      />
      <div
        className="menuLine"
        style={{ left: `${calculateLineSpace()}px` }}
      ></div>
    </div>
  );
};

export default Header;
