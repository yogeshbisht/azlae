import { Service } from "@/types";

const ServiceCard = ({ icon: Icon, title, description }: Service) => {
  return (
    <div className="p-4 rounded-lg text-center max-w-sm mx-auto">
      <div className="flex items-center justify-center size-20 rounded-full bg-primary text-secondary mx-auto">
        <Icon className="size-8" />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
