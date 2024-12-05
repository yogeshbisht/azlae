import { Service } from "@/types";

const ServiceCard = ({ icon: Icon, title, description }: Service) => {
  return (
    <div className="mx-auto max-w-sm rounded-lg p-4 text-center">
      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand text-brand-light">
        <Icon className="size-8" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-brand">{title}</h3>
      <p className="mt-2 text-brand-medium">{description}</p>
    </div>
  );
};

export default ServiceCard;
