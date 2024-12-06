import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectionContainer from "@/components/section/section-container";
import SectionTitle from "@/components/section/section-title";
import { testimonialData } from "@/constants";

const TestimonialCard = ({
  testimonial
}: {
  testimonial: (typeof testimonialData)[0];
}) => {
  return (
    <Card className="h-64">
      <CardContent className="p-6 h-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-lg font-semibold text-brand">
                {testimonial.name}
              </h4>
              <p className="text-sm text-brand-medium">{testimonial.role}</p>
            </div>
          </div>
          <blockquote className="text-brand-medium">
            &quot;{testimonial.content}&quot;
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <SectionContainer sectionId="testimonials">
      <SectionTitle
        title="What Our Clients Say"
        description="Hear from our satisfied customers about their experience"
      />

      <div className="mt-8 relative">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialData.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 gap-4 hidden md:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
