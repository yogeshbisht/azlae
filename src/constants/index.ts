import { Feature, PricingTier, Service } from "@/types";
import { BiRocket } from "react-icons/bi";
import { BsWindowDesktop } from "react-icons/bs";
import {
  FaTachographDigital,
  FaUser,
  FaChartBar,
  FaSearchengin
} from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";

export const serviceList: Service[] = [
  {
    icon: FaChartBar,
    title: "Market Research",
    description:
      "Gain a comprehensive understanding of your industry landscape."
  },
  {
    icon: FaUser,
    title: "User Experience",
    description:
      "Evaluate the viability and potential of new products or services."
  },
  {
    icon: FaTachographDigital,
    title: "Digital Marketing",
    description:
      "Benchmark your performance against competitors, identify strengths."
  },
  {
    icon: FaSearchengin,
    title: "SEO Services",
    description:
      "Anticipate market shifts and emerging trends to stay ahead of the curve."
  },
  {
    icon: BsWindowDesktop,
    title: "Software Development",
    description: "We go beyond data collection to provide actionable insights."
  },
  {
    icon: PiUsersThreeFill,
    title: "Affiliate Marketing",
    description:
      "We understand that every business is unique. That's why we offer."
  },
  {
    icon: MdOutlineWeb,
    title: "Website Development",
    description:
      "In today's competitive market, timing is everything. Our efficient."
  }
];

export const featureList: Feature[] = [
  {
    icon: BiRocket,
    title: "Feature One Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  },
  {
    icon: BiRocket,
    title: "Feature Two Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  },
  {
    icon: BiRocket,
    title: "Feature Three Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$9",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "1GB storage",
      "Basic support",
      "Access to core features"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "10GB storage",
      "Priority support",
      "Advanced features",
      "Team collaboration",
      "Analytics dashboard"
    ],
    buttonText: "Try Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited everything",
      "Custom storage limits",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "Custom training"
    ],
    buttonText: "Contact Sales"
  }
];
