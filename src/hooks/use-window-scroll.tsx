"use client";

import { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", updateScrollY);
    return () => window.removeEventListener("scroll", updateScrollY);
  }, []);

  return scrollY;
};

export default useWindowScroll;
