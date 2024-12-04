import { twMerge } from "tailwind-merge";
import useWindowScroll from "@/hooks/use-window-scroll";

const BrandLogo = () => {
  const scrollY = useWindowScroll();

  return (
    <div
      className={twMerge(
        "text-2xl font-extrabold",
        scrollY > 80 ? "text-black" : "text-white"
      )}
    >
      LOGO.
    </div>
  );
};

export default BrandLogo;
