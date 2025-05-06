import { Button, Section } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";

export const HerobannerExpertises = () => {
  return (
    <section className="relative w-full h-screen">
      {" "}
      {/* La section commence tout en haut */}
      <div
        className="w-full h-full bg-cover bg-center absolute top-0 left-0 z-0"
        style={{
          backgroundImage: "url('/assets/images/expertises/herobanner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-32 text-white mt-0 lg:mt-8">
          <AnimateContainer>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 uppercase md:max-w-[70%] max-w-[90%]">
              La Dorure, une signature d'excellence.
            </h1>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              chaque espace a son caractère, la dorure le révèle.
            </p>
          </AnimateContainer>

          <AnimateContainer delay={0.4}>
            <Link
              href=""
              className="bg-primary px-9 py-2 rounded-lg uppercase hover:shadow-lg transition duration-300 text-xl font-medium"
            >
              j'ai un projet
            </Link>
          </AnimateContainer>
        </div>
      </div>
    </section>
  );
};
