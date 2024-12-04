import { cn } from "@/lib/utils";

type ArrowPathProps = {
  direction: "down" | "up";
  inverted?: boolean;
  className?: string;
};

const ArrowPath = ({ direction, inverted, className }: ArrowPathProps) => {
  return (
    <div
      className={cn(
        "h-12 w-full",
        direction === "down" ? "down-arrow-path" : "up-arrow-path",
        inverted ? "bg-neutral-900" : "bg-white",
        className
      )}
    />
  );
};

export default ArrowPath;
