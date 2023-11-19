export const slowContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const slowItem = {
  hidden: { opacity: 0, y: "-50px" },
  show: { opacity: 1, y: "0px", transition: { duration: 1 } },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: "-50px" },
  show: { opacity: 1, y: "0px", transition: { duration: 0.5 } },
};

export const fastContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fastItem = {
  hidden: { opacity: 0, y: "-50px" },
  show: { opacity: 1, y: "0px", transition: { duration: 0.4 } },
};
