"use client";
import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({
  children,
  addedClasses,
  threshold,
  onReveal,
  onHideDiv,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          scrollObserver.unobserve(entry.target);
        }
      },
      {
        threshold: threshold || 0.55,
      }
    );

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && onReveal) {
      onReveal();
    } else if (!isVisible && onHideDiv) {
      onHideDiv();
    }
  }, [isVisible]);

  const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100 " + addedClasses : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
