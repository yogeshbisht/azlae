import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaAndroid, FaApple } from "react-icons/fa6";
import SectionTitle from "./section/section-title";

const HeroSection = () => {
  return (
    <section
      className="relative h-[720px] bg-neutral-900"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%)"
      }}
    >
      <div className="section-padding grid h-full max-w-screen-2xl grid-cols-1 items-center justify-between gap-4 md:grid-cols-2">
        <div className="mt-24 flex flex-col">
          <SectionTitle
            left
            inverted
            title="Welcome to the future of AI"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
          />
          <div className="flex items-center gap-4">
            <Button variant="secondary" className="w-[200px]" size="lg">
              <FaApple className="mr-0.5 size-4" />
              Download for iOS
            </Button>
            <Button variant="secondary" className="w-[200px]" size="lg">
              <FaAndroid className="mr-0.5 size-4" />
              Download for Android
            </Button>
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="shadow-large relative z-10 mb-[-200px] hidden h-[660px] w-[320px] items-center justify-center rounded-[40px] bg-neutral-200 lg:flex">
            <div className="relative h-[640px] w-[300px] overflow-hidden rounded-[40px]">
              <Image
                src="https://picsum.photos/300/640"
                alt="hero"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
