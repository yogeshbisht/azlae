"use client";

import useWindowScroll from "@/hooks/use-window-scroll";
import { cn } from "@/lib/utils";
import BrandLogo from "./brand-logo";
import { Button } from "@/components/ui/button";
import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const scrollY = useWindowScroll();
  const scrollStarted = scrollY > 80;

  return (
    <nav
      className={cn(
        "h-20 transition-all duration-500 fixed top-0 left-0 right-0 z-50",
        scrollStarted ? "shadow-lg h-16 bg-white" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between h-full max-w-screen-2xl section-padding">
        <BrandLogo />
        <Button variant={scrollStarted ? "default" : "secondary"}>
          <BiLogInCircle className="size-4 mr-0.5" />
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
