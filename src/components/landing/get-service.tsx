import React from "react";
import SectionContainer from "../section/section-container";
import SectionTitle from "../section/section-title";
import { Button } from "../ui/button";
import { FaApple } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa";
import { SECTION_POLYGON } from "@/constants";

const GetService = () => {
  return (
    <SectionContainer
      sectionId="get-service"
      className="bg-brand py-40"
      style={{ clipPath: SECTION_POLYGON }}
    >
      <SectionTitle
        inverted
        title="Get a demo of our service"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
      />
      <div className="flex items-center justify-center gap-4">
        <Button variant="secondary" className="w-[200px]" size="lg">
          <FaApple className="mr-0.5 size-4" />
          Download for iOS
        </Button>
        <Button variant="secondary" className="w-[200px]" size="lg">
          <FaAndroid className="mr-0.5 size-4" />
          Download for Android
        </Button>
      </div>
    </SectionContainer>
  );
};

export default GetService;
