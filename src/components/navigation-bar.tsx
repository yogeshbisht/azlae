"use client";

import useWindowScroll from "@/hooks/use-window-scroll";
import { twMerge } from "tailwind-merge";

const NavigationBar = () => {
  const scrollY = useWindowScroll();
  return (
    <nav
      className={twMerge(
        "h-20 transition-all duration-300 fixed top-0 left-0 right-0 z-50",
        scrollY > 80 ? "shadow-lg bg-white" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between h-full max-w-7xl px-4 mx-auto">
        <h1
          className={twMerge(
            "text-2xl font-bold",
            scrollY > 80 ? "text-black" : "text-white"
          )}
        >
          AI-Powered
        </h1>
      </div>
    </nav>
  );
};

export default NavigationBar;
