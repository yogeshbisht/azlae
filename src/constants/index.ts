import { Blog, FAQ, Feature, PricingTier, Service } from "@/types";
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

// Section polygon constants
export const POLYGON_TOP = "50px";
export const POLYGON_BOTTOM = `calc(100% - ${POLYGON_TOP})`;
export const HERO_POLYGON = `polygon(0 0, 100% 0, 100% ${POLYGON_BOTTOM}, 50% 100%, 0 ${POLYGON_BOTTOM})`;
export const SECTION_POLYGON = `polygon(0 0, 50% ${POLYGON_TOP}, 100% 0, 100% ${POLYGON_BOTTOM}, 50% 100%, 0 ${POLYGON_BOTTOM})`;

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

export const faqData: FAQ[] = [
  {
    question: "What is this platform about?",
    answer:
      "Our platform is designed to help developers and teams collaborate more effectively through intelligent code reviews and automated workflows. It's a great tool for teams to review code, discuss changes, and ensure that the code is of high quality before it's merged into the main branch."
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer flexible pricing plans including a free tier for individual developers and premium plans for teams with additional features and support. The pricing is transparent and there are no hidden fees."
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial on all our premium plans with full access to all features. You can cancel anytime during the trial period and you won't be charged."
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 email support for all users, with priority support and dedicated account managers for enterprise customers. We also offer a SLA guarantee for enterprise customers."
  },
  {
    question: "What is the refund policy?",
    answer:
      "We do not offer refunds for our platform. However, you can cancel anytime during the trial period and you won't be charged."
  }
];

export const testimonialData = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "girl",
    content:
      "The platform has transformed how our team handles code reviews. The automated workflows have saved us countless hours. The intelligent code review features are incredible. It's like having an extra team member who never misses a detail."
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    avatar: "boy",
    content:
      "The intelligent code review features are incredible. It's like having an extra team member who never misses a detail."
  },
  {
    name: "Emily Rodriguez",
    role: "Tech Lead",
    avatar: "girl",
    content:
      "Implementation was smooth, and the support team was incredibly helpful. Our productivity has increased significantly."
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    avatar: "boy",
    content:
      "The platform's intuitive interface and powerful features make it an essential tool for our development workflow."
  }
];

export const blogData: Blog[] = [
  {
    id: 1,
    image: "image1.jpg",
    title: "Blog Post 1",
    subtitle: "Subtitle for Blog Post 1",
    date: "2024-01-01",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  },
  {
    id: 2,
    image: "image2.jpg",
    title: "Blog Post 2",
    subtitle: "Subtitle for Blog Post 2",
    date: "2024-01-02",
    author: "Jane Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  },
  {
    id: 3,
    image: "image3.jpg",
    title: "Blog Post 3",
    subtitle: "Subtitle for Blog Post 3",
    date: "2024-01-03",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  },
  {
    id: 4,
    image: "image4.jpg",
    title: "Blog Post 4",
    subtitle: "Subtitle for Blog Post 4",
    date: "2024-01-04",
    author: "Jane Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  },
  {
    id: 5,
    image: "image5.jpg",
    title: "Blog Post 5",
    subtitle: "Subtitle for Blog Post 5",
    date: "2024-01-05",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  },
  {
    id: 6,
    image: "image6.jpg",
    title: "Blog Post 6",
    subtitle: "Subtitle for Blog Post 6",
    date: "2024-01-06",
    author: "Jane Doe",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus suscipit vel, sit veritatis possimus molestias odio voluptates facilis omnis!"
  }
];
