import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  description: string;
  left?: boolean;
};

const SectionTitle = ({ title, description, left }: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-12", left && "text-left")}>
      <h2
        className={cn(
          "text-4xl md:text-5xl/tight lg:text-6xl/tight font-extrabold capitalize leading-normal",
          left && "text-slate-100"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-muted-foreground mt-2 capitalize leading-relaxed",
          !left && "max-w-lg mx-auto"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
