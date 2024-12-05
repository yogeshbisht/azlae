import React from "react";
import SectionContainer from "../section/section-container";
import SectionTitle from "../section/section-title";
import { featureList } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <SectionContainer sectionId="features" className="pt-48">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src="https://picsum.photos/400/600"
            alt="about"
            width={400}
            height={600}
            className="rounded-2xl shadow-lg"
          />
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
              className="mb-4 flex items-center gap-6"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-brand text-brand-light">
                <feature.icon className="size-8" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold text-brand">
                  {feature.title}
                </h3>
                <p className="max-w-lg text-sm text-brand-medium">
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
