import { cn } from "@/lib/utils";
import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  sectionId: string;
  className?: string;
  style?: React.CSSProperties;
};

const SectionContainer = ({
  children,
  sectionId,
  className,
  style
}: SectionContainerProps) => {
  return (
    <section id={sectionId} className={cn("py-24", className)} style={style}>
      <div className="section-padding max-w-screen-2xl">{children}</div>
    </section>
  );
};

export default SectionContainer;
