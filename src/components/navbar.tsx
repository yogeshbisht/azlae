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
        scrollStarted ? "shadow-lg h-16 bg-slate-100" : "bg-transparent"
      )}
    >
      <div className="section-padding flex h-full max-w-screen-2xl items-center justify-between">
        <BrandLogo />
        <Button variant={scrollStarted ? "brand" : "secondary"}>
          <BiLogInCircle className="mr-0.5 size-4" />
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
