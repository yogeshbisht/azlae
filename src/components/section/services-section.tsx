import SectionTitle from "./section-title";
import SectionContainer from "./section-container";
import { serviceList } from "@/constants";
import ServiceCard from "./service-card";

const ServicesSection = () => {
  return (
    <SectionContainer sectionId="services" className="pt-48">
      <SectionTitle
        title="Our Services"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {serviceList.map((service, index) => (
          <ServiceCard key={`${service.title}-${index}`} {...service} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
