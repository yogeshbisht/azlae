import EmptySection from "@/components/empty-section";
import HeroSection from "@/components/hero";
import NavigationBar from "@/components/navigation-bar";

const LandingPage = () => {
  return (
    <main>
      <NavigationBar />
      <HeroSection />
      <EmptySection />
    </main>
  );
};

export default LandingPage;
