import { cn } from "@/lib/utils";
import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  sectionId: string;
  className?: string;
};

const SectionContainer = ({
  children,
  sectionId,
  className
}: SectionContainerProps) => {
  return (
    <section id={sectionId} className={cn("py-24", className)}>
      <div className="max-w-screen-2xl section-padding">{children}</div>
    </section>
  );
};

export default SectionContainer;
