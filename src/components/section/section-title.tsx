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
    <div className={cn("text-center mb-16", left && "text-left")}>
      <h2
        className={cn(
          "text-4xl md:text-5xl/tight lg:text-6xl/tight font-extrabold capitalize leading-normal text-brand",
          inverted && "text-brand-light"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-brand-medium capitalize leading-relaxed",
          !left && "max-w-2xl mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
