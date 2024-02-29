import React, { useEffect, useState } from "react";

const TITLES = [
  "a software engineer",
  "a video producer",
  "a fullstack developer",
  "an enthusiastic learner",
];

const Title = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  

  useEffect(() => {
    let timeout = null;
    let titleInterval = null;
    titleInterval = setInterval(() => {
      const index = (titleIndex + 1) % TITLES.length;
      setTitleIndex(index);
      setFadeIn(true);
      timeout = setTimeout(() => {
        setFadeIn(false);
      }, 2000);
    }, 4000);

    timeout = setTimeout(() => {
      setFadeIn(false);
    }, 2000);

    return function cleanup() {
      clearInterval(titleInterval);
      clearTimeout(timeout);
    };
  }, [titleIndex]);

  return (
    <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
      I am {TITLES[titleIndex]}
    </p>
  );
};

export default Title;
