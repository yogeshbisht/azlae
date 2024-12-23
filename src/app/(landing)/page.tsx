import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/landing/services";
import Features from "@/components/landing/features";
import GetService from "@/components/landing/get-service";
import About from "@/components/landing/about";
import Pricing from "@/components/landing/pricing";
import FAQs from "@/components/landing/faqs";
import Testimonials from "@/components/landing/testimonials";
import Blog from "@/components/landing/blog";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <Features />
      <GetService />
      <About />
      <Pricing />
      <FAQs />
      <Testimonials />
      <Blog />
    </main>
  );
};

export default LandingPage;
