export const initial = {
  opacity: 0,
  transform: "translateY(30px) translateX(0px)",
};

export const initial2 = {
  opacity: 0,
  transform: "translateY(00px) translateX(30px)",
};

export const whileInView = {
  opacity: 1,
  transform: "translateY(0px) translateX(0px)",
  transition: {
    duration: 0.5,
    type: "spring",
    stiffness: 100,
  },
};
