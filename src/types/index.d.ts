export interface MenuItem {
  name: string;
  href: string;
  active: boolean;
}

export interface Service {
  icon: React.JSX;
  title: string;
  description: string;
}

export interface Feature {
  icon: React.JSX;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}
