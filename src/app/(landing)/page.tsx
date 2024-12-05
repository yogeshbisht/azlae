import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/landing/services";
import Features from "@/components/landing/features";
import GetService from "@/components/landing/get-service";
import About from "@/components/landing/about";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <Features />
      <GetService />
      <About />
    </main>
  );
};

export default LandingPage;
