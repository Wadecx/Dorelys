import { Button, Section } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";
import { Title } from "@/components/common/Title";

export const Herobanner = () => {
  return (
    <section className="relative w-full h-screen">
      {" "}
      {/* La section commence tout en haut */}
      <div
        className="w-full h-full bg-cover bg-center absolute top-0 left-0 z-0"
        style={{
          backgroundImage: "url('/assets/images/home/hero_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-32 text-white mt-0 lg:mt-8">
          <AnimateContainer>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 uppercase md:max-w-[50%] max-w-[90%] lg:max-w-[55%]">
              Transformez vos projets grâce à la dorure.
            </h1>

          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:max-w-[80%] ">
              Sublimez vos intérieurs avec un savoir-faire d'exception, alliant
              tradition et innovation !
            </p>
          </AnimateContainer>

          <AnimateContainer delay={0.4}>
            <Link
              href="/"
              className="flex items-center uppercase justify-center font-bold bg-primary text-white h-10 rounded-md px-6 py-6 w-fit text-xl uppercase hover:shadow-xl transition duration-300"
            >
              échangeons ensemble
            </Link>
          </AnimateContainer>
        </div>
      </div>
    </section>
  );
};
