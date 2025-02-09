"use client";

import React, { useState, useRef } from "react";
import TestimonialCard from "@/app/components/global/TestimonialCard";

const testimonials = [
  {
    videoPlaceholder: "/placeholder1.png",
    name: "Manzi Jack",
    title: "Product Designer",
    location: "Kigali",
  },
  {
    videoPlaceholder: "/placeholder2.png",
    name: "Jane Doe",
    title: "Software Engineer",
    location: "Nairobi",
  },
  {
    videoPlaceholder: "/placeholder3.png",
    name: "John Smith",
    title: "UX Specialist",
    location: "Lagos",
  },
  {
    videoPlaceholder: "/placeholder3.png",
    name: "John Smith",
    title: "UX Specialist",
    location: "Lagos",
  },
  {
    videoPlaceholder: "/placeholder3.png",
    name: "John Smith",
    title: "UX Specialist",
    location: "Lagos",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 3; // Adjust speed of slide
    sliderRef.current!.scrollLeft = scrollLeft - walk;

    // Set the index based on the scroll position
    const newIndex = Math.round(
      (sliderRef.current!.scrollLeft / sliderRef.current!.offsetWidth) *
        testimonials.length
    );
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);

    if (sliderRef.current) {
      // Calculate the position of the clicked dot's corresponding testimonial
      const targetPosition = index * sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 w-full py-12">
      <h2 className="text-[32px] sm:text-[40px] text-[#03192E] text-left font-sans font-bold md:text-4xl mb-6">
        Users are in Love with Skills <br /> Challenges Program
      </h2>
      <p className="text-left text-[#687588] font-sans text-[16px] sm:text-[18px] mb-8">
        See what our clients say about working with us. Their success <br /> speaks for
        our dedication and expertise.
      </p>

      <div className="relative w-full p-0 overflow-hidden">
        {/* Slider content */}
        <div
          ref={sliderRef}
          className="flex scroll-smooth overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] mr-4" // Added margin-right for space between cards
            >
              <TestimonialCard
               
                name={testimonial.name}
                title={testimonial.title}
                location={testimonial.location}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-[#2B71F0]" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
