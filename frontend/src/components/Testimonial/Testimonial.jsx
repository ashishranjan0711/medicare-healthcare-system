import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { testimonialStyles } from "../../assets/dummyStyles";

const Testimonial = () => {
  const scrollRefLeft = useRef(null);
  const scrollRefRight = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sardar khan",
      role: "Cardiologist",
      rating: 5,
      text: "Every minute I save on scheduling is a minute I get back with my patients. That's what this system gives me.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
      type: "doctor",
    },
    {
      id: 2,
      name: "Rukshana khatun",
      role: "Patient",
      rating: 5,
      text: "I'm not great with apps, but this one just makes sense. Booking is easy and the reminders actually help me remember.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "patient",
    },
    {
      id: 3,
      name: "Dr. Raushan Yadav",
      role: "Pediatrician",
      rating: 4,
      text: "This platform has streamlined our clinic operations — patient management is far more organized than before.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "doctor",
    },
    {
      id: 4,
      name: "Rishav Jha",
      role: "Patient",
      rating: 5,
      text: "I book appointments at midnight if I want to — and get instant confirmation. That kind of ease changes everything.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
      type: "patient",
    },
    {
      id: 5,
      name: "Dr. Rubina Khan",
      role: "Dermatologist",
      rating: 5,
      text: "Between my job and my kids, I used to forget appointments constantly. The automated reminders have basically fixed that",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "doctor",
    },
    {
      id: 6,
      name: "Amrita Singh",
      role: "Patient",
      rating: 5,
      text: "Wait times have dropped significantly since I started using this platform — smooth, intuitive, and genuinely convenient.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
      type: "patient",
    },
  ];

  const leftTestimonials = testimonials.filter((t) => t.type === "doctor");
  const rightTestimonials = testimonials.filter((t) => t.type === "patient");

  useEffect(() => {
    const scrollLeft = scrollRefLeft.current;
    const scrollRight = scrollRefRight.current;
    if (!scrollLeft || !scrollRight) return;

    let scrollSpeed = 0.5; 
    let rafId;

    const smoothScroll = () => {
      if (!isPaused) {
        scrollLeft.scrollTop += scrollSpeed;
        scrollRight.scrollTop -= scrollSpeed;

        if (scrollLeft.scrollTop >= scrollLeft.scrollHeight / 2) {
          scrollLeft.scrollTop = 0;
        }
        if (scrollRight.scrollTop <= 0) {
          scrollRight.scrollTop = scrollRight.scrollHeight / 2;
        }
      }
      rafId = requestAnimationFrame(smoothScroll);
    };

    rafId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < rating
            ? testimonialStyles.activeStar
            : testimonialStyles.inactiveStar
        }
      >
        <Star className={testimonialStyles.star} />
      </span>
    ));

  const TestimonialCard = ({ testimonial, direction }) => (
    <div
      className={`${testimonialStyles.testimonialCard} ${
        direction === "left"
          ? testimonialStyles.leftCardBorder
          : testimonialStyles.rightCardBorder
      }`}
    >
      <div className={testimonialStyles.cardContent}>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={testimonialStyles.avatar}
        />
        <div className={testimonialStyles.textContainer}>
          <div className={testimonialStyles.nameRoleContainer}>
            <div>
              <h4
                className={`${testimonialStyles.name} ${
                  direction === "left"
                    ? testimonialStyles.leftName
                    : testimonialStyles.rightName
                }`}
              >
                {testimonial.name}
              </h4>
              <p className={testimonialStyles.role}>{testimonial.role}</p>
            </div>
            <div className={testimonialStyles.starsContainer}>
              {renderStars(testimonial.rating)}
            </div>
          </div>

          <p className={testimonialStyles.quote}>"{testimonial.text}"</p>

          <div className={testimonialStyles.mobileStarsContainer}>
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={testimonialStyles.container}>
      <div className={testimonialStyles.headerContainer}>
        <h2 className={testimonialStyles.title}>Voices of Trust</h2>
        <p className={testimonialStyles.subtitle}>
          Real stories from doctors and patients sharing their positive
          experiences with our healthcare platform.
        </p>
      </div>

      <div
        className={testimonialStyles.grid}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        <div
          className={`${testimonialStyles.columnContainer} ${testimonialStyles.leftColumnBorder}`}
        >
          <div
            className={`${testimonialStyles.columnHeader} ${testimonialStyles.leftColumnHeader}`}
          >
            👩‍⚕️ Medical Professionals
          </div>
          <div
            ref={scrollRefLeft}
            className={testimonialStyles.scrollContainer}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {[...leftTestimonials, ...leftTestimonials].map((t, i) => (
              <TestimonialCard
                key={`L-${i}`}
                testimonial={t}
                direction="left"
              />
            ))}
          </div>
        </div>

        <div
          className={`${testimonialStyles.columnContainer} ${testimonialStyles.rightColumnBorder}`}
        >
          <div
            className={`${testimonialStyles.columnHeader} ${testimonialStyles.rightColumnHeader}`}
          >
            🧑‍💼 Patients
          </div>

          <div
            ref={scrollRefRight}
            className={testimonialStyles.scrollContainer}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {[...rightTestimonials, ...rightTestimonials].map((t, i) => (
              <TestimonialCard
                key={`R-${i}`}
                testimonial={t}
                direction="right"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{testimonialStyles.animationStyles}</style>
    </div>
  );
};

export default Testimonial;
