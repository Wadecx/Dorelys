"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components";
import { AnimateContainer } from "@/animations";

export const Questions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Section
      size="full"
      className="mt-24 mx-auto flex justify-center lg:flex-row flex-col bg-secondary mt-0 md:mt-0 mb-0 md:mb-0 py-24"
    >

      <div className="flex md:flex-row flex-col max-w-9/10 mx-auto justify-center">
      <div className="lg:w-1/2 items-center mt-4 lg:block flex flex-col justify-center ">
        <h2 className="lg:text-4xl text-3xl uppercase w-[80%] font-medium mb-4 lg:text-start text-center">
          Questions fréquentes
        </h2>
        <div className="max-w-[80%]">
          <AnimateContainer>
            <h3
              className="text-xl font-medium flex items-center justify-between cursor-pointer"
              onClick={toggleParagraph}
            >
              ...
              <Plus
                className={`transition-transform ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              />
            </h3>
            <p
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              consequatur consectetur eligendi deleniti voluptatum. Quos neque
              pariatur explicabo maiores culpa adipisci facilis, accusantium
              nemo consequuntur tempore ullam, ea inventore sed.
            </p>
            <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          </AnimateContainer>
          <AnimateContainer delay={0.2}>
            <h3 className="text-xl font-medium mb-4 flex items-center justify-between cursor-pointer">
              ...
              <Plus />
            </h3>
            <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          </AnimateContainer>
          <AnimateContainer delay={0.4}>
            <h3 className="text-xl font-medium mb-4 flex items-center justify-between cursor-pointer">
              ...
              <Plus />
            </h3>
            <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          </AnimateContainer>
        </div>
      </div>

      <div className="relative flex rounded-2xl shadow-xl max-w-[350px] min-h-[400px] max-h-[400px] bg-white">
        <div className="my-8 mx-8 flex flex-col gap-4 relative z-10">
          <h2 className="uppercase font-medium text-xl text-black">
            Besoin d'aide ?
          </h2>
          <p className="max-w-[80%] text-gray-700">
            Nous restons à votre écoute pour répondre à vos besoins et
            questions.
          </p>
          <p className="text-gray-700">N’hésitez pas à nous contacter !</p>

          <div className="flex flex-col gap-2 text-gray-800">
            <a className="flex items-center gap-2" href="mailto:justine@dorelys-jmt.com">
              <Mail className="text-black" /> justine@dorelys-jmt.com
            </a>
            <a className="flex items-center gap-2" href="tel:0695889648">
              <Phone className="text-black"  /> 06 95 88 96 48
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="text-black" /> 13 Rue de Normandie, <br />{" "}
              27200 Vernon
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <Image
            src="/assets/logo/signature.png"
            alt="Ornement"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </div>
      </div>

    </Section>
  );
};
