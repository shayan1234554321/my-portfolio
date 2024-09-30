"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "@/hooks/localStorage";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [screenWidth, setScreenWidth] = useState(1000);

  function changeTheme() {
    saveToLocalStorage("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const theme = getFromLocalStorage("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <Context.Provider
      value={{ theme, changeTheme, screenWidth, setScreenWidth }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
