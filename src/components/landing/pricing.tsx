"use client";

import SectionContainer from "@/components/section/section-container";
import SectionTitle from "@/components/section/section-title";
import { Button } from "@/components/ui/button";
import { SECTION_POLYGON, pricingTiers } from "@/constants";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

const ANNUAL_DISCOUNT = 0.8;

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (monthlyPrice: number) => {
    const annualPrice = monthlyPrice * 12 * ANNUAL_DISCOUNT;
    return isAnnual ? Math.round(annualPrice / 12) : monthlyPrice;
  };

  return (
    <SectionContainer
      sectionId="pricing"
      className="bg-slate-200 py-40"
      style={{ clipPath: SECTION_POLYGON }}
    >
      <SectionTitle
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your needs. No hidden fees."
      />

      {/* Billing Toggle */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center rounded-full bg-gray-100 p-1 shadow-md">
          <Button
            variant={!isAnnual ? "brand" : "ghost"}
            onClick={() => setIsAnnual(false)}
            className="rounded-full"
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "brand" : "ghost"}
            onClick={() => setIsAnnual(true)}
            className="rounded-full"
          >
            Annually
            <span className="mt-0.5 text-xs">Save 20%</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl bg-white p-8 shadow-lg ${
              tier.popular ? "ring-2 ring-brand" : ""
            }`}
          >
            {tier.popular && (
              <span className="absolute top-0 -translate-y-1/2 rounded-full bg-brand px-3 py-0.5 text-sm font-medium text-brand-light">
                Most Popular
              </span>
            )}
            <div className="mb-8">
              <h3 className="mb-2 text-xl font-bold text-brand">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-brand">
                  ${calculatePrice(parseInt(tier.price.replace("$", "")))}
                </span>
                <span className="text-brand-medium">
                  /{isAnnual ? "mo" : "month"}
                </span>
                {isAnnual && (
                  <div className="mt-1 text-sm text-brand-medium">
                    billed annually
                  </div>
                )}
              </div>
              <p className="text-brand-medium">{tier.description}</p>
            </div>

            <ul className="mb-8 space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <FaCheck className="size-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={tier.popular ? "brand" : "outline"}
              className="w-full"
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
