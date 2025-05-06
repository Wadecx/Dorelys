"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { AnimateContainer } from "@/animations";

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gestion de la visibilité du bouton
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <AnimateContainer delay={0.2}>
          <button
            onClick={scrollToTop}
            className="p-4 rounded-full bg-primary text-white shadow-lg hover:bg-[#c49c4c] transition duration-300 ease-in-out"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </AnimateContainer>
      )}
    </div>
  );
};
