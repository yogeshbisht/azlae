import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaAndroid, FaApple } from "react-icons/fa6";
import SectionTitle from "./section/section-title";

const HeroSection = () => {
  return (
    <section className="h-[720px] relative bg-neutral-900">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center justify-between section-padding max-w-screen-2xl gap-4">
        <div className="flex flex-col mt-24">
          <SectionTitle
            left
            inverted
            title="Welcome to the future of AI"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
          />
          <div className="flex items-center gap-4">
            <Button variant="secondary" className="w-[200px]" size="lg">
              <FaApple className="size-4 mr-0.5" />
              Download for iOS
            </Button>
            <Button variant="secondary" className="w-[200px]" size="lg">
              <FaAndroid className="size-4 mr-0.5" />
              Download for Android
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="relative h-[660px] w-[320px] rounded-[40px] mb-[-200px] justify-center items-center bg-neutral-200 z-10 hidden lg:flex shadow-large">
            <div className="relative h-[640px] w-[300px] rounded-[40px] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/29102417/pexels-photo-29102417/free-photo-of-nighttime-aerial-view-of-brooklyn-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hero"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-neutral-900 hero-clip-path" />
    </section>
  );
};

export default HeroSection;
