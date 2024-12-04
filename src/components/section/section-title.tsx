import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  description: string;
  left?: boolean;
  inverted?: boolean;
};

const SectionTitle = ({
  title,
  description,
  left,
  inverted
}: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-12", left && "text-left")}>
      <h2
        className={cn(
          "text-4xl md:text-5xl/tight lg:text-6xl/tight font-extrabold capitalize leading-normal",
          inverted && "text-slate-100"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-muted-foreground capitalize leading-relaxed",
          !left && "max-w-lg mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
