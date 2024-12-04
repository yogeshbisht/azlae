import useWindowScroll from "@/hooks/use-window-scroll";
import { cn } from "@/lib/utils";

const BrandLogo = () => {
  const scrollY = useWindowScroll();

  return (
    <div
      className={cn(
        "text-2xl font-extrabold",
        scrollY > 80 ? "text-primary" : "text-secondary"
      )}
    >
      LOGO.
    </div>
  );
};

export default BrandLogo;
