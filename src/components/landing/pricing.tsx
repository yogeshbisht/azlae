"use client";

import SectionContainer from "@/components/section/section-container";
import SectionTitle from "@/components/section/section-title";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/constants";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

const ANNUAL_DISCOUNT = 0.8; // 20% discount for annual plans

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (monthlyPrice: number) => {
    const annualPrice = monthlyPrice * 12 * ANNUAL_DISCOUNT;
    return isAnnual ? Math.round(annualPrice / 12) : monthlyPrice;
  };

  return (
    <SectionContainer sectionId="pricing">
      <SectionTitle
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your needs. No hidden fees."
      />

      {/* Billing Toggle */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
          <button
            onClick={() => setIsAnnual(false)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !isAnnual
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isAnnual
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Annually
            <span className="ml-1 text-xs text-primary">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl bg-white p-8 shadow-lg ${
              tier.popular ? "ring-2 ring-primary" : ""
            }`}
          >
            {tier.popular && (
              <span className="absolute top-0 -translate-y-1/2 rounded-full bg-primary px-3 py-0.5 text-sm font-medium text-white">
                Most Popular
              </span>
            )}
            <div className="mb-8">
              <h3 className="mb-2 text-xl font-bold">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">
                  ${calculatePrice(parseInt(tier.price.replace("$", "")))}
                </span>
                <span className="text-muted-foreground">
                  /{isAnnual ? "mo" : "month"}
                </span>
                {isAnnual && (
                  <div className="mt-1 text-sm text-muted-foreground">
                    billed annually
                  </div>
                )}
              </div>
              <p className="text-muted-foreground">{tier.description}</p>
            </div>

            <ul className="mb-8 space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <FaCheck className="size-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full rounded-lg px-4 py-3 font-medium ${
                tier.popular
                  ? "bg-primary text-white hover:bg-primary/80"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
              size="lg"
            >
              {tier.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
