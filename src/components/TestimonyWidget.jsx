import React, { useState, useEffect } from "react";

const TestimonyWidget = ({ testimonials }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [showTestimonial, setShowTestimonial] = useState(true);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setShowTestimonial(false); // Start fading out
      setTimeout(() => {
        setCurrentTestimonialIndex((prevIndex) =>
          (prevIndex + 1) % testimonials.length
        );
        setShowTestimonial(true); // Start fading in
      }, 1000); // Delay for fade out animation (in milliseconds)
    }, 7000); // Change the interval as desired (in milliseconds)

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className={`max-w-2xl transition-opacity duration-1000 ${showTestimonial ? "opacity-100" : "opacity-0"}`}>
      <p className="italic">{currentTestimonial.body}</p>
      <p className="text-right mt-2">- {currentTestimonial.name}, {currentTestimonial.company}</p>
    </div>
  );
};

export default TestimonyWidget;