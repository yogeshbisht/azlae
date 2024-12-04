"use client";

import useWindowScroll from "@/hooks/use-window-scroll";
import { twMerge } from "tailwind-merge";
import BrandLogo from "./brand-logo";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

const NavigationBar = () => {
  const scrollY = useWindowScroll();
  const scrollStarted = scrollY > 80;

  return (
    <nav
      className={twMerge(
        "h-20 transition-all duration-500 fixed top-0 left-0 right-0 z-50",
        scrollStarted ? "shadow-lg bg-white h-16" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between h-full max-w-screen-2xl px-8 mx-auto">
        <BrandLogo />
        <Button variant={scrollStarted ? "default" : "outline"}>
          <LogInIcon className="w-4 h-4 mr-2" />
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;
