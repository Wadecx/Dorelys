import { Section } from "@/components";
import { Etapes } from "@/data/etapes";
import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";

export const Savoirfaire = () => {
  return (
    <Section size="full">
      <div className="flex flex-col bg-secondary justify-center">
        <AnimateContainer delay={0.2}>
          {" "}
          <h2 className="uppercase text-3xl md:text-5xl font-light mt-24 mb-24 text-center md:max-w-full max-w-[80%] mx-auto">
            notre savoir faire en 3 étapes
          </h2>
        </AnimateContainer>

        <AnimateContainer delay={0.2}>
          {" "}
          <div className="flex md:flex-row flex-col justify-center md:mb-24 max-w-8/10 mx-auto gap-20">
            {Etapes.map((step, index) => {
              return (
                <div
                  className="flex flex-col items-center text-center gap-4"
                  key={index}
                >
                  <Image
                    src={step.img}
                    width={step.sizeimg}
                    height={0}
                    alt=""
                  ></Image>
                  <h3 className="uppercase text-2xl">{step.title}</h3>
                  <p className="text-xl md:max-w-[80%] lg:max-w-[95%]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimateContainer>

        <div className="flex flex-col md:flex-row max-w-8/10 mx-auto">
          <div className="w-fit">
            <p className="text-xl mb-8 pt-24">
              Pour chaque projet, un savoir faire artisanal :
            </p>
            <ul className="flex flex-col gap-12 list-disc md:ml-8 mb-8">
              <AnimateContainer delay={0.2}>
                <li className="md:max-w-[80%] text-xl text-justify">
                  <span className="font-medium">La dorure à l’eau</span>,
                  technique traditionnelle, s'effectue après de nombreuses
                  préparations. Celle des apprêts notamment avant la pose de
                  l'assiette et de la feuille. L'or est ensuite bruni à la
                  pierre d'Agate avant d'être éventuellement patiné et/ou usé,
                  en fonction des attentes de chacun.
                </li>
              </AnimateContainer>

              <AnimateContainer delay={0.2}>
                <li className="md:max-w-[80%] text-xl text-justify w-fit">
                  <span className="font-medium">La mixtion</span>, qui est une
                  imitation de la dorure à l'eau, s'effectue sur tous types de
                  support.
                </li>
              </AnimateContainer>

              <AnimateContainer delay={0.2}>
                <li className="md:max-w-[80%] text-xl text-justify">
                  Dans les deux cas il est possible d'utiliser différents ors
                  comme l’or jaune, moon gold, palladium, caplain, or blanc, or
                  rouge, or vert, ou des métaux comme l’argent, aluminium et
                  cuivre.
                </li>
              </AnimateContainer>
            </ul>

            <AnimateContainer delay={0.2}>
              <p className="text-xl my-12 md:max-w-[60%]">
                Nous travaillons avec vous pour donner une âme à chaque espace !
              </p>
            </AnimateContainer>

            <AnimateContainer delay={0.2}>
              <Link
                href="/"
                className="mb-12 flex items-center uppercase justify-center font-bold bg-primary text-white h-10 rounded-md px-6 py-6 w-fit text-xl uppercase hover:shadow-xl transition duration-300"
              >
                être rappelé
              </Link>
            </AnimateContainer>
          </div>

          <div className="md:w-3/5 w-full">
            <AnimateContainer delay={0.2}>
              <Image
                src="/assets/images/home/dame_dorure.png"
                alt=""
                width={0}
                height={0}
                className="w-full mb-24 object-cover"
              ></Image>
            </AnimateContainer>
          </div>
        </div>
      </div>
    </Section>
  );
};
