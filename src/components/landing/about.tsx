import Image from "next/image";
import SectionContainer from "../section/section-container";
import SectionTitle from "../section/section-title";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <SectionContainer sectionId="about">
      <SectionTitle
        title="About"
        description="Get Started In Minutes: Download The App, Create Your Profile"
      />
      <div className="flex items-center justify-center gap-8 lg:grid-cols-2">
        <div className="max-w-xl space-y-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex items-center gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex h-40 flex-col items-center justify-center gap-2 rounded-2xl p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
              >
                <FaDownload className="size-8" />
                <p>Download</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://picsum.photos/seed/picsum/400/600"
            alt="about"
            width={400}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
