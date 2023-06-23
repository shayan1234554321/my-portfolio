import { useEffect, useState } from "react";

function fonts() {
  const [sizes, setSizes] = useState({
    normal: "16px",
    small: "14px",
    large: "24px",
    xLarge: "40px",
  });

  const handleResize = () => {
    setSizes({
      normal: window.innerWidth < 769 ? "14px" : "16px",
      small: window.innerWidth < 769 ? "12px" : "14px",
      large: window.innerWidth < 769 ? "20px" : "30px",
      xLarge: window.innerWidth < 769 ? "30px" : "40px",
    });
  };
  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize, false);
  }, []);
  return sizes;
}

export default fonts;
