import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import SectionContainer from "@/components/section/section-container";
import SectionTitle from "../section/section-title";
import { faqData } from "@/constants";

const FAQs = () => {
  return (
    <SectionContainer sectionId="faqs">
      <SectionTitle
        title="Frequently Asked Questions"
        description="Everything you need to know about our platform"
      />

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-xl font-semibold text-brand">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-brand-medium">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionContainer>
  );
};

export default FAQs;
