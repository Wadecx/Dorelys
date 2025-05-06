import { Section } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";
import { Title } from "@/components/common/Title";

export const JmtDorure = () => {
  return (
    <Section size={"8/10"} className=" z-[999]">
      <div className="flex items-center justify-center flex-col md:flex-row gap-8">
        <div className="md:w-5/12">
          <AnimateContainer delay={0.2}>
            <Image
              src="/assets/images/expertises/perle.png"
              width="0"
              height="0"
              className="w-full max-h-[700px] object-cover"
              alt="Image d'une d'orure"
            ></Image>
          </AnimateContainer>
        </div>

        <div className="flex-1 flex flex-col gap-12 text-start ml-4">
          <AnimateContainer delay={0.2}>
            {/* <h2 className="uppercase font-light text-3xl md:text-4xl md:max-w-[95%]">
              Pourquoi nos clients choisissent dorélys by jmt dorure ?
            </h2> */}

            <Title lineColor="#000">Pourquoi nos clients choisissent dorélys by jmt dorure ?</Title>
          </AnimateContainer>

          <ul className="list-disc md:ml-8 flex flex-col gap-12">
            <AnimateContainer delay={0.2}>
              <li className="text-xl text-justify">
                <span className="font-medium">Précision et exigence : </span>{" "}
                Chaque détail compte, chaque finition est réalisée à la
                perfection.
              </li>
            </AnimateContainer>

            <AnimateContainer delay={0.2}>
              <li className=" text-xl text-justify">
                <span className="font-medium">Sur-mesure :</span> Chaque projet
                est singulier, pensé en collaboration étroite avec vous.
              </li>
            </AnimateContainer>

            <AnimateContainer delay={0.2}>
              <li className=" text-xl text-justify">
                <span className="font-medium">Matériaux nobles :</span> Feuilles
                d’or, moon gold, platine... Un choix premium pour des résultats
                exceptionnels.
              </li>
            </AnimateContainer>
          </ul>
          <AnimateContainer delay={0.2}>
            <Link
              href="/"
              className="flex items-center uppercase justify-center font-bold bg-primary text-white h-10 rounded-md px-6 py-6 w-fit text-xl uppercase hover:shadow-xl transition duration-300"
            >
              j'ai un projet
            </Link>
          </AnimateContainer>
        </div>
      </div>
    </Section>
  );
};
