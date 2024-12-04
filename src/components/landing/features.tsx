import React from "react";
import SectionContainer from "../section/section-container";
import SectionTitle from "../section/section-title";
import { featureList } from "@/constants";

const Features = () => {
  return (
    <SectionContainer sectionId="features" className="pt-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <div className="h-[600px] w-[400px] rounded-xl bg-primary text-secondary" />
        </div>
        <div className="flex flex-col gap-4">
          <SectionTitle
            left
            title="Our Features"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          />
          {featureList.map((feature, index) => (
            <div
              key={`${feature.title}-${index}`}
              className="flex gap-6 items-center mb-4"
            >
              <div className="flex items-center justify-center size-16 rounded-full bg-primary text-secondary">
                <feature.icon className="size-8" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground max-w-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Features;
