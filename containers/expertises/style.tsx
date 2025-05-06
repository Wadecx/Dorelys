import { Section } from "@/components";
import { Place } from "@/data/place";
import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";

export const Style = () => {
  return (
    <Section size="full" className="flex flex-col bg-secondary">
      <div className="flex md:flex-row flex-col md:mt-48 mt-12 max-w-[1500px] justify-center mx-auto">
        <div className="flex flex-col gap-8 md:max-w-[50%] mt-12 ml-4 md:ml-0">
          <AnimateContainer delay={0.2}>
            <h2 className="uppercase font-light text-3xl md:text-5xl md:max-w-[70%] max-w-[90%]">
              Differents styles pour differentes amibiances
            </h2>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-justify md:max-w-[80%] max-w-[90%] text-xl">
              <span className="font-medium">
                {" "}
                À travers nos deux techniques, nous pouvons vous proposer :
              </span>{" "}
              damiers, patchworks, nuagués, travail de matières, métallisation à
              froid, peintures décoratives !
            </p>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-justify md:max-w-[80%] max-w-[90%] text-xl">
              Tout est possible avec{" "}
              <span className="font-medium">Dorelys by JMT Dorure.</span>
            </p>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <Link
              href=""
              className="flex bg-primary px-9 text-white py-2 rounded-lg uppercase hover:shadow-lg transition duration-300 text-xl font-medium w-fit mb-8 md:mb-0"
            >
              échangeons ensemble
            </Link>
          </AnimateContainer>
        </div>

        <div className="">
          <AnimateContainer delay={0.2}>
            <Image
              src="/assets/images/expertises/dorure.png"
              alt=""
              width={550}
              height={0}
              className="p-4"
            ></Image>
          </AnimateContainer>
        </div>
      </div>

      <div className="flex flex-col items-center mt-24 gap-12 mb-48 ml-4 md:ml-0">
        <h2 className="uppercase font-light text-3xl md:text-5xl md:max-w-[60%]">
          ces projets, notre fierté !
        </h2>

        <div className="flex gap-8 flex-col md:flex-row">
          {Place.map((place, index) => {
            return (
              <div className="flex flex-col  items-center" key={index}>
                <Image
                  src={place.image}
                  alt="Image d'exemple"
                  width={300}
                  height={0}
                  className="mb-4"
                ></Image>
                <AnimateContainer delay={0.2}></AnimateContainer>

                <p
                  className="text-center text-xl uppercase"
                  dangerouslySetInnerHTML={{ __html: place.title }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
