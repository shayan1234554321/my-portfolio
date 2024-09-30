"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect } from "react";

export const Body = ({ children }) => {
  const { theme, setScreenWidth } = useGlobalContext();

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

  return <body className={theme === "dark" ? "dark" : ""}>{children}</body>;
};
